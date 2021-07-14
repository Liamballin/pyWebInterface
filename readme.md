# Python Web Interface


## HTML 
Calling the `run()` function emits an event. First argument is event name, and second is the element ID to display the results.
```html
<button onclick="run('stepOne', 'elementOne')"> Do something </button>

```

## Python
```py
import WebInterface

def stepOne():
    doSomething()
    return {'status':True}

# Register event handler
WebInterface.on('stepOne', stepOne)

# Start interface server
WebInterface.start()
```

## Batch file
Running the batch file starts the server and opens the interface in the default browser. 
You can set the port number here.
If not port is supplied, or the port is invalid, WebInterface will default to 8080.
```bat
@echo off

set port=1234

start "" http://localhost:%port%
py gen.py %port%
```