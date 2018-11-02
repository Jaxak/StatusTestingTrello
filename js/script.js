$('div.window').mouseenter(function () {
    if (!$("#ksrjhcmgtkg").length) {
        showButtonTesting();
    } else {
    }
});

$(document).mouseup(function (e) {
    var container = $("#modalMyPopUp");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});
/*
$(document).click(function (e) {
    var container = $("div.child");
    if (container.has(e.target).length === 1){
        console.log('OK')
    }
});*/