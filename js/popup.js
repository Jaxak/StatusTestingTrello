function AllLogicPopupButton() {
    var button = new Vue({
        el: '#ksrjhcmgtkg',
        data: {
            title: 'Поторогай меня'
        },
        methods: {
            showPopUp: function () {
                $('#modalMyPopUp').show();
            }
        }
    })
}

$(document).mouseup(function (e) {
    var container = $("#modalMyPopUp");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

function AllLogicPopUpDiv() {
    AllLogicStatusTesting();
}

function AllLogicStatusTesting(){
    getCheckListActual();
}
