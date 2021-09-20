@echo off

set port=8080

start "" http://localhost:%port%
python main.py %port%