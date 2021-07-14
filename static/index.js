
//Keep this function
function handleResponse(res){
    return new Promise((resolve,reject)=>{


        //do something
        if(res.status){
            console.log("Success")
        }else{
            console.log("Error")
        }


        resolve(res)
    })
}

