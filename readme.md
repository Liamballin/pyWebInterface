# Python Web Interface

## Requirements:
- bottle==0.12.19

## ToDo:
- [ ] Send data with event, intercept event between click event and send?


## HTML 
Calling the `run()` function emits an event. First argument is event name, and second is the element ID to display the results.
```html
<button onclick="run('stepOne', 'elementOne')"> Do something </button>

```

## JavaScript
You can set a response handler by including a JS file in index.html.
`res.status` will be `true` if the event name has an assosciated handler function, and `false` if not. 
`res.res` contains the returned value from your handler function in `main.py`.
```JavaScript
function handleResponse(res,el){
    
    //do something
    if(res.status){
        console.log("Success")
    }else{
        console.log("Error")
    }
}

```

## Python
```py
from pyWebInterface import WebInterface

def stepOne():
    doSomething()
    return {'data':'somedata'}

# Register event handler
WebInterface.on('stepOne', stepOne)

# Start interface server
WebInterface.start()
```

## Batch file
Running the batch file starts the server and opens the interface in the default browser. Set the name of you main file here. 

You can set the port number here.
If not port is supplied, or the port is invalid, WebInterface will default to 8080.
```bat
@echo off

set port=1234

start "" http://localhost:%port%
py main.py %port%
```