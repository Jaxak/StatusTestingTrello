function showButtonTesting() {
    var cardId = document.URL.split("/")[4];
    if (!$("#testStateBlock").length) {
        addPopupButton();
    }
    if (!$("#modalMyPopUp").length) {
        addPopupDiv();
    }
    $('div.window-sidebar').on('click', 'a.ksrjhcmgtkg', function () {
        $('#modalMyPopUp').show();
    });
}

function addPopupButton() {
    $('div.window-sidebar').prepend('<div id="testStateBlock"class="window-module u-clearfix"></div>');
    $.get(chrome.runtime.getURL('popupButton.html'), function (data) {
        $('#testStateBlock').append(data);
    });
}

function addPopupDiv() {
    $.get(chrome.runtime.getURL('popupDiv.html'), function (data) {
        $('div.window-overlay').prepend(data);
    });
}