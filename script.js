function generateIframe() {
    var url = `https://${document.getElementById('url').value;}`
    var name = document.getElementById('name').value;
    var iframe = document.createElement('iframe');
    iframe.src = url;
    if(name != ""){
    document.title = name}else{document.title = `Hyrix: ${url}`}
    document.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        generateIframe();
    }
});
