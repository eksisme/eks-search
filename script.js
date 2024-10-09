function generateIframe() {
    var url = `https://${document.getElementById('url').value;}`
    var title = document.getElementById('title').value;
    var iframe = document.createElement('iframe');
    iframe.src = url;
    document.title = title
    document.body.appendChild(iframe);
}

document.getElementById('url').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        generateIframe();
    }
});
