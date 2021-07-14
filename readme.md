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