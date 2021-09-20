import WebInterface
import csv
import os

def whereThis():
    return os.path.dirname(os.path.abspath(__file__))

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

def stepFour():
    print("PDF!")
    jsonArray = []
      
    #read csv file
    with open(whereThis()+'/static/MOCK_DATA.csv') as csvf: 
        #load csv file data using csv library's dictionary reader
        csvReader = csv.DictReader(csvf) 

        #convert each csv row into python dict
        for row in csvReader: 
            #add this python dict to json array
            jsonArray.append(row)



    out = {
        'action':'csv',
        'data':jsonArray
    }
    return out


WebInterface.on('stepOne', stepOne)
WebInterface.on('stepThree', stepThree)
WebInterface.on('stepFour', stepFour)


WebInterface.start()