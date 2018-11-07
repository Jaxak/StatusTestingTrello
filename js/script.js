$('div.window').mouseenter(function () {
    if (!$("#ksrjhcmgtkg").length) {
        showButtonTesting();
    } else {
    }
});

$(document).mouseenter(function () {
    CheckBoxStatus("#testingstatusbox1");
    CheckBoxStatus("#testingstatusbox2");
    CheckBoxStatus("#testingstatusbox3");
    CheckBoxStatus("#testingstatusbox4");
});

$(document).mouseup(function (e) {
    var container = $("#modalMyPopUp");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

function CheckBoxStatus(idCheckbox) {
    $(idCheckbox).on('click', 'div.checklist-item-checkbox', function () {
        $(idCheckbox).toggleClass("checklist-item-state-complete");
        getDate(idCheckbox);
    });
}

function getDate(idCheckbox) {
    $("input.datecheck").val(getCurrentDate());

}