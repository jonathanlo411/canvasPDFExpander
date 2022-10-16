// ==UserScript==
// @name         Canvas PDF Expander
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  On large screens, Canvas has limited width on many pages. This script removes the max-width on pages that have a iframe for a PDF or docx, etc.
// @author       Github @jonthanlo411
// @match        https://canvas.ucsd.edu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ucsd.edu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Check if there are two iframes (happens when there is Canvas's pdf in view)
    if (document.getElementsByTagName("iframe").length == 2) {
        // Remove the max-width styling on the wrapper to expand accross full screen
        document.getElementsByClassName("ic-Layout-wrapper")[0].style.maxWidth = "None";
    }
})();
