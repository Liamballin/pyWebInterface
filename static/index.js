
//Keep this function
function handleResponse(res,el){


    //do something
    if(res.status){
        console.log("Success")
    }else{
        console.log("Error")
    }

    $(el).innerHTML = ts()+"</br>"+JSON.stringify(res, undefined, 4);

}



function $(id){
    return document.getElementById(id);
}