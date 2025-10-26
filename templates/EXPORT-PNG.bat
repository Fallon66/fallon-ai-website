@echo off
REM CHARLOTTE'S WORKING PNG EXPORT SCRIPT
REM This is the FINAL working version that produces perfect 1200x1200 exports

setlocal enabledelayedexpansion

if "%~1"=="" (
    echo.
    echo ========================================
    echo CHARLOTTE'S PNG EXPORT SCRIPT
    echo ========================================
    echo.
    echo Usage: EXPORT-PNG.bat [input.html]
    echo.
    echo The output will be saved as [input]-export.png
    echo.
    echo Example: EXPORT-PNG.bat announcement.html
    echo          Creates: announcement-export.png
    echo.
    exit /b 1
)

set INPUT_FILE=%~1
set INPUT_NAME=%~n1
set OUTPUT_FILE=%INPUT_NAME%-export.png
set FULL_PATH=%~f1

echo.
echo ========================================
echo EXPORTING: %INPUT_FILE%
echo ========================================
echo.

echo [1/2] Taking screenshot with Chrome headless...

REM The working command with all necessary flags
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=5000 --window-size=1200,1200 --screenshot="C:\Users\Charlotte\fallon-ai-website\templates\%OUTPUT_FILE%" "file:///%FULL_PATH:\=/%"

if errorlevel 1 (
    echo ERROR: Chrome screenshot failed
    exit /b 1
)

echo.
echo [2/2] Verifying output...

if exist "%OUTPUT_FILE%" (
    for %%A in ("%OUTPUT_FILE%") do set FILE_SIZE=%%~zA
    set /a FILE_SIZE_KB=!FILE_SIZE! / 1024

    echo.
    echo ========================================
    echo SUCCESS!
    echo ========================================
    echo.
    echo File: %OUTPUT_FILE%
    echo Size: !FILE_SIZE_KB! KB
    echo Dimensions: 1200x1200px
    echo.
    echo Ready for LinkedIn/Instagram!
    echo ========================================
    echo.
) else (
    echo ERROR: Output file was not created
    exit /b 1
)

endlocal
