function run(name, el){
    console.log(`Emitting event ${name}, displaying to #${el}`)
    emitEvent(name).then(res=>{
        handleResponse(res).then(output=>{
            $(el).innerHTML = ts()+"</br>"+JSON.stringify(res, undefined, 4);
        })
    })
}

function emitEvent(name){
    return new Promise((resolve, reject)=>{
        fetch(`/event/${name}`)
        .then(raw => raw.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
}

function $(id){
    return document.getElementById(id);
}

//from stackoverflow
function ts() {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}
    `;
  }
