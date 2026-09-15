@echo off
cd /d "%~dp0"
echo ===================================================
echo   InterioCraft Website Server - Abdul Samad Y
echo ===================================================
echo Opening website in browser at http://localhost:8001 ...
start "" "http://localhost:8001"
python -m http.server 8001
pause
