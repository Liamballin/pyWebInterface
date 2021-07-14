function start(){
    console.log("Startins")

}

function stepOne(){
    fetch("/event/stepOne")
    .then(raw => raw.json())
    .then(res => {
        console.log(res)
        showResult(res, "res1")
    })

    
}

function showResult(data, el){
    el = $(el);
    let output = "";

    let raw = JSON.stringify(data);
    
    let idl = 0;
    for(let i = 0; i < raw.length;i++){
        // console.log(raw.charAt(i))
        if(raw.charAt(i) == ','){
            raw = ssplice(raw, i, 1, ",</br>")
            console.log(raw)
            continue;
        }
        if(raw.charAt(i) == "{"){
            raw = ssplice(raw, i, 1, "{</br>")
            idl++;
        }
        if(raw.charAt(i) == "}"){
            raw = ssplice(raw, i, 1, "}</br>")
            idl++;
        }
    }
    el.innerHTML = raw;
}

function dataToHTML(data){

}


function $(id){
    return document.getElementById(id);
}

function ssplice(str, index, count, add) {
    var ar = str.split('');
    ar.splice(index, count, add);
    return ar.join('');
  }