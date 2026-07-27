(function () {
    "use strict";

    var STORAGE_KEY = "wsSiteNoticeDismissed";
    var overlay = document.getElementById("ws-site-notice");
    if (!overlay) {
        return;
    }

    try {
        if (localStorage.getItem(STORAGE_KEY)) {
            return;
        }
    } catch (e) {
        /* localStorage nedostupné (např. soukromý režim) - upozornění zobrazíme bez zapamatování */
    }

    function dismiss() {
        overlay.classList.remove("is-visible");
        try {
            localStorage.setItem(STORAGE_KEY, "1");
        } catch (e) {}
    }

    overlay.classList.add("is-visible");

    var closeBtn = overlay.querySelector(".ws-site-notice-close");
    var okBtn = overlay.querySelector(".ws-site-notice-ok");
    if (closeBtn) { closeBtn.addEventListener("click", dismiss); }
    if (okBtn) { okBtn.addEventListener("click", dismiss); }
    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) { dismiss(); }
    });
})();
