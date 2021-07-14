function run(name, el){
    emitEvent(name).then(res=>{
        handleResponse(res,el)
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

//from stackoverflow
function ts() {
    const pad = (n,s=2) => (`${new Array(s).fill(0)}${n}`).slice(-s);
    const d = new Date();
    return `${pad(d.getFullYear(),4)}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}
    `;
  }
