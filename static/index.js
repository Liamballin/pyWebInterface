function start(){
    hide("res3canvas")
    hide("res4")
}

//Keep this function
function handleResponse(res,el){

    if(!res.status){
        console.log("Error")
        set(res, el)
        return;
    }

    if(res.res.action == 'log'){
        set(res,el);
    }else if(res.res.action == 'pdf'){
        show('res3canvas')
        setPDF()
    }else if(res.res.action == 'csv'){
        show("res4")
        setGrid(res.res.data);
    }

}

function set(data, el){
    $(el).innerHTML = ts()+"</br>"+JSON.stringify(data, undefined, 4);
}

function setPDF(){

    var url = '/static/Letter.pdf';
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
    var loadingTask = pdfjsLib.getDocument(url);
    loadingTask.promise.then(function(pdf) {
    console.log('PDF loaded');
    
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function(page) {
        console.log('Page loaded');
        
        var scale =2;
        var viewport = page.getViewport({scale: scale});

        var canvas = document.getElementById('res3canvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
        canvasContext: context,
        viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
        console.log('Page rendered');
        });
    });
    }, function (reason) {
    console.error(reason);
    });
}

function setGrid(data){
    const columnDefs = [];

    let headers = Object.keys(data[0]);
    for(let i = 0; i < headers.length;i++){
        columnDefs.push({field:headers[i]})
    }
    
    const rowData = data
    
    const gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
    };

    const gridDiv = $("res4");
    gridDiv.className = "ag-theme-balham gridDiv"
    new agGrid.Grid(gridDiv, gridOptions);
}


function $(id){
    return document.getElementById(id);
}
function show(id){
    $(id).style.display = "initial"
}
function hide(id){
    $(id).style.display = "none"
}