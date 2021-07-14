@echo off

set port=8080

start "" http://localhost:%port%
py gen.py %port%