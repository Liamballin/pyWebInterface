import WebInterface
def stepOne():
    print("Running step one")
    
    out = {
        'action':'log',
        'data':'67tyughjbkgguytygjhb='
    }
    return out


WebInterface.on('stepOne', stepOne)
WebInterface.start()