function start(){
    // hide("res3canvas")
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
        console.log("Got pdf")
    }



}

function set(data, el){
    $(el).innerHTML = ts()+"</br>"+JSON.stringify(data, undefined, 4);

}

function setPDF(){
// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = '/static/Letter.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function(pdf) {
  console.log('PDF loaded');
  
  // Fetch the first page
  var pageNumber = 1;
  pdf.getPage(pageNumber).then(function(page) {
    console.log('Page loaded');
    
    var scale = 1.5;
    var viewport = page.getViewport({scale: scale});

    // Prepare canvas using PDF page dimensions
    var canvas = document.getElementById('res3canvas');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
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
  // PDF loading error
  console.error(reason);
});
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