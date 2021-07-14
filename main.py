import WebInterface
def stepOne():
    print("Running step one")
    
    out = {
        'status':True,
        'action':'log',
        'data':'67tyughjbkgguytygjhb='
    }
    return out


WebInterface.on('stepOne', stepOne)
WebInterface.start()