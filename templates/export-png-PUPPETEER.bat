@echo off
REM PUPPETEER PNG EXPORT - WRAPPER SCRIPT
REM Most reliable method for pixel-perfect exports

setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Usage: export-png-PUPPETEER.bat [input.html] [optional-output-name.png]
    echo.
    echo Example: export-png-PUPPETEER.bat announcement.html my-graphic.png
    exit /b 1
)

set INPUT_FILE=%~1
set OUTPUT_FILE=%~2

echo Checking Puppeteer installation...
node -e "require('puppeteer')" >nul 2>&1
if errorlevel 1 (
    echo.
    echo Puppeteer not installed. Installing now...
    echo This may take a minute...
    npm install puppeteer
    if errorlevel 1 (
        echo ERROR: Failed to install Puppeteer
        exit /b 1
    )
)

echo.
echo Running Puppeteer export...
if "%OUTPUT_FILE%"=="" (
    node "%~dp0export-png-puppeteer.js" "%INPUT_FILE%"
) else (
    node "%~dp0export-png-puppeteer.js" "%INPUT_FILE%" "%OUTPUT_FILE%"
)

endlocal
