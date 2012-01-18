// ==UserScript==
// @match http://*.wikipedia.org/*
// ==/UserScript==

var ids = ['mw-page-base', 'mw-head-base', 'content', 'mw-head', 'mw-panel', 'footer'];

function show() {
    var overlay = document.getElementById('mw-sopaOverlay');
    if(overlay) {
        ids.forEach(function(id) {
            document.getElementById(id).style.display = 'block';
        });
        overlay.style.display = 'none';
    } else {
        setTimeout(show, 100);
    }
}

show();
