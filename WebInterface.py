from bottle import route, run, static_file
import os
import sys

handlers = {}

def whereThis():
    return os.path.dirname(os.path.abspath(__file__))

@route('/')
def main():
    return static_file('index.html', root=whereThis()+"/templates/")

@route('/event/<name>')
def event(name):
    res = None
    status = False
    if(name in handlers):
        res = handlers[name]()
        status = True
    else:
        res = "No event handler registered for ["+name+"]"
        status = False
    return {'status':status,'res':res}

@route('/static/<filename>')
def server_static(filename):
    return static_file(filename, root=whereThis()+"/static")

def on(event, function):
    handlers[event] = function

def start():
    port = None
    if(len(sys.argv) > 1):
        try:
            port = int(sys.argv[1])
        except:
            print("Invalid port")
    else:
        print("using default port")
    if(port == None):
        port = 8080

    run(host='localhost', port=port, debug=True)

if(__name__ == "__main__"):
    start()
