import server
def stepOne():
    print("Running step one")
    
    out = {
        'status':True,
        'data':'67tyughjbkgguytygjhb='
    }
    return out


server.on('stepOne', stepOne)
server.start()