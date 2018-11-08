$('div.window-overlay').mouseenter(function () {
    if (!$("#ksrjhcmgtkg").length) {
        showButtonTesting();
    }
});

function showButtonTesting() {
    var cardId = document.URL.split("/")[4];
    if (!$("#testStateBlock").length) {
        addPopupButton();
        addPopupDiv();
    }
}

function addPopupButton() {
    $('div.window-sidebar').prepend('<div id="testStateBlock"class="window-module u-clearfix"></div>');
    $.get(chrome.runtime.getURL('html/popupButton.html'), function (data) {
        $('#testStateBlock').append(data);
        AllLogicPopupButton();
    });
}

function addPopupDiv() {
    $.get(chrome.runtime.getURL('html/popupDiv.html'), function (data) {
        $('div.window-overlay').prepend(data);
        AllLogicPopUpDiv();
    });
}