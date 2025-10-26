@echo off
REM FIXED PNG EXPORT SCRIPT FOR CHARLOTTE
REM This script fixes the Chrome headless issues with text cutoff and white borders

setlocal enabledelayedexpansion

if "%~1"=="" (
    echo Usage: export-png-FIXED.bat [input.html] [optional-output-name.png]
    echo.
    echo Example: export-png-FIXED.bat announcement.html my-graphic.png
    exit /b 1
)

set INPUT_FILE=%~1
set INPUT_NAME=%~n1

if "%~2"=="" (
    set OUTPUT_FILE=%INPUT_NAME%-export.png
) else (
    set OUTPUT_FILE=%~2
)

echo ========================================
echo FIXED PNG EXPORT SCRIPT
echo ========================================
echo Input:  %INPUT_FILE%
echo Output: %OUTPUT_FILE%
echo.

REM Get full path to input file
set FULL_PATH=%~f1

echo [1/3] Checking Chrome installation...
where chrome >nul 2>&1
if errorlevel 1 (
    echo ERROR: Chrome not found in PATH
    echo Please ensure Chrome is installed and added to PATH
    exit /b 1
)

echo [2/3] Taking screenshot with FIXED settings...
echo.
echo Using improved Chrome headless settings:
echo - Force device scale factor = 1 (prevents DPI issues)
echo - Virtual time budget = 5000ms (wait for fonts to load)
echo - Disabled GPU (prevents rendering glitches)
echo - Hide scrollbars (clean output)
echo - Window size = 1200x1200 (exact canvas size)
echo.

REM FIXED COMMAND with all necessary flags
chrome --headless --disable-gpu --hide-scrollbars ^
    --force-device-scale-factor=1 ^
    --virtual-time-budget=5000 ^
    --window-size=1200,1200 ^
    --screenshot="%OUTPUT_FILE%" ^
    "file:///%FULL_PATH:\=/%"

if errorlevel 1 (
    echo ERROR: Chrome screenshot failed
    exit /b 1
)

echo.
echo [3/3] Verifying output...

if exist "%OUTPUT_FILE%" (
    echo ========================================
    echo SUCCESS! PNG exported successfully
    echo ========================================
    echo File: %OUTPUT_FILE%
    echo.
    echo Next steps:
    echo 1. Open %OUTPUT_FILE% and verify:
    echo    - Full 1200x1200px captured
    echo    - No text cut off at bottom
    echo    - No white borders
    echo    - Text sharp and readable
    echo.
    echo 2. If still issues, try export-png-PUPPETEER.bat
    echo ========================================
) else (
    echo ERROR: Output file was not created
    exit /b 1
)

endlocal
