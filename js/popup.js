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

$('div.window').mouseenter(function () {
    CheckBoxStatus("testingstatusbox1");
    CheckBoxStatus("testingstatusbox2");
    CheckBoxStatus("testingstatusbox3");
    CheckBoxStatus("testingstatusbox4");
});


$(document).mouseup(function (e) {
    var container = $("#modalMyPopUp");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

function CheckBoxStatus(idCheckbox) {
    $("#"+idCheckbox).one('click', 'div.checklist-item-checkbox', function () {
        $("#"+idCheckbox).toggleClass("checklist-item-state-complete");
        getDate(idCheckbox);
    });
}

function getDate(idCheckbox) {
    $("input."+idCheckbox).val(getCurrentDate());
}