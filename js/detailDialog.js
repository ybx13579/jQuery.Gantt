window.addEventListener('message', function(event) {
    document.body.innerHTML = event.data;
});

window.addEventListener("click",function(e) {
    if (e.target && e.target.nodeName == "A") {
        chrome.extension.sendRequest({method:"detail", greeting:e.target.dataset.searchid, db:e.target.dataset.searchdb}, function(response) {
            strHtml = response.farewell;
            document.body.innerHTML = strHtml;
        });
    }
}, false);