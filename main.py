import WebInterface
def stepOne():
    print("Running step one")
    
    out = {
        'action':'log',
        'data':'67tyughjbkgguytygjhb='
    }
    return out

def stepThree():
    print("PDF!")

    out = {
        'action':'pdf',
        'data':{
            'filename':'Letter.pdf',
            'path':'/testFiles/'
        }
    }
    return out


WebInterface.on('stepOne', stepOne)
WebInterface.on('stepThree', stepThree)


WebInterface.start()