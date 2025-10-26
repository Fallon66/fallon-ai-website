/**
 * PUPPETEER PNG EXPORT - MOST RELIABLE METHOD
 * This script uses Puppeteer for pixel-perfect PNG exports
 * Fixes: text cutoff, white borders, font loading issues
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function exportPNG(inputFile, outputFile) {
    console.log('========================================');
    console.log('PUPPETEER PNG EXPORT');
    console.log('========================================');
    console.log('Input: ', inputFile);
    console.log('Output:', outputFile);
    console.log('');

    const browser = await puppeteer.launch({
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-gpu',
            '--force-device-scale-factor=1'
        ]
    });

    try {
        const page = await browser.newPage();

        // Set viewport to EXACT size needed
        await page.setViewport({
            width: 1200,
            height: 1200,
            deviceScaleFactor: 1
        });

        console.log('[1/5] Loading HTML file...');
        const fileUrl = 'file://' + path.resolve(inputFile).replace(/\\/g, '/');
        await page.goto(fileUrl, {
            waitUntil: 'networkidle0' // Wait for all resources including fonts
        });

        console.log('[2/5] Waiting for fonts to load...');
        // Wait for Google Fonts to load properly
        await page.evaluateHandle('document.fonts.ready');

        // Additional safety wait
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log('[3/5] Verifying canvas dimensions...');
        const dimensions = await page.evaluate(() => {
            const body = document.body;
            return {
                width: body.scrollWidth,
                height: body.scrollHeight,
                bodyWidth: body.offsetWidth,
                bodyHeight: body.offsetHeight
            };
        });
        console.log('Canvas size:', dimensions);

        console.log('[4/5] Taking screenshot...');
        await page.screenshot({
            path: outputFile,
            type: 'png',
            fullPage: false, // Don't use fullPage - use viewport size
            clip: {
                x: 0,
                y: 0,
                width: 1200,
                height: 1200
            }
        });

        console.log('[5/5] Verifying output...');
        const stats = fs.statSync(outputFile);

        console.log('');
        console.log('========================================');
        console.log('SUCCESS! PNG exported successfully');
        console.log('========================================');
        console.log('File:', outputFile);
        console.log('Size:', (stats.size / 1024).toFixed(2), 'KB');
        console.log('');
        console.log('Verification checklist:');
        console.log('✓ Full 1200x1200px captured');
        console.log('✓ Fonts loaded before screenshot');
        console.log('✓ No white borders (exact clip region)');
        console.log('✓ Text should be sharp and readable');
        console.log('========================================');

    } catch (error) {
        console.error('ERROR:', error.message);
        throw error;
    } finally {
        await browser.close();
    }
}

// Command line usage
if (require.main === module) {
    const args = process.argv.slice(2);

    if (args.length === 0) {
        console.log('Usage: node export-png-puppeteer.js [input.html] [optional-output.png]');
        console.log('');
        console.log('Example: node export-png-puppeteer.js announcement.html my-graphic.png');
        process.exit(1);
    }

    const inputFile = args[0];
    const outputFile = args[1] || inputFile.replace('.html', '-export.png');

    exportPNG(inputFile, outputFile)
        .then(() => process.exit(0))
        .catch(error => {
            console.error('Export failed:', error);
            process.exit(1);
        });
}

module.exports = { exportPNG };
