function run(name, el){
    console.log(`Emitting event ${name}, displaying to #${el}`)
    emitEvent(name).then(res=>{
        $(el).innerHTML = JSON.stringify(res, undefined, 4);
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

