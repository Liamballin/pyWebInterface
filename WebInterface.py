from bottle import route, run, static_file
import os
import sys


handlers = {}

def whereThis():
    return os.path.dirname(os.path.abspath(__file__))


#------------routes--------------------------------

@route('/')
def main():
    return static_file('index.html', root=whereThis()+"/templates/")

@route('/event/<name>')
def event(name):
    
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
