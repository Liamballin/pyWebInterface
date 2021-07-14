#!/usr/bin/python
from bottle import route, run, static_file
import os
import json
import datetime

handlers = {}

def whereThis():
    return os.path.dirname(os.path.abspath(__file__))


#------------routes--------------------------------

@route('/')
def hello():
    # return "Hello World!"
    return static_file('index.html', root=whereThis()+"/templates/")

@route('/event/<name>')
def event(name):
    print(name)
    print(handlers)

    funcVal = None
    if(name in handlers):
        funcVal = handlers[name]()
    else:
        funcVal = "No event handler registered for ["+name+"]"

    return {'status':funcVal}

    


@route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root=whereThis()+"/static")


#-----------------------------------------------------------------------


#register handler
def on(event, function):
    print("Registering function on "+event)
    handlers[event] = function
    print(handlers)
    handlers[event]()
    






def start():
    run(host='localhost', port=8080, debug=True)



if(__name__ == "__main__"):
    start()
