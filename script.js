function generateGUID() {
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
        });
return uuid;
}

document.getElementById('guidDisplay').innerText = generateGUID();

document.getElementById('generateButton').addEventListener('click', function() {
    var generatedGuid = generateGUID();
    document.getElementById('guidDisplay').innerText = generatedGuid;
});

document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('guidDisplay');
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    copyText.classList.add('selected');
    setTimeout(function() {
        copyText.classList.remove('selected');
    }, 1000);

    document.getElementById('copyButton').innerText = 'Copied';
    setTimeout(function() {
        document.getElementById('copyButton').innerText = 'Copy';
    }, 300);
});