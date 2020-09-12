@echo off

tool.py
interface.py

del /f /s /q ..\client\resource\config\*.*
copy .\config\client ..\client\resource\config

del /f /s /q ..\client\src\interface\config\*.*
copy .\interface\client ..\client\src\interface\config
pause