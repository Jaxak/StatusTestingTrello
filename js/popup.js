function AllLogicPopupButton() {
    var button = new Vue({
        el: '#ksrjhcmgtkg',
        data: {
            title: 'Поторогай меня'
        },
        methods: {
            showPopUp: function () {
                $('#testStatistics-popup').show();
            }
        }
    })
}

$(document).mouseup(function (e) {
    var container = $("#testStatistics-popup");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});

function AllLogicPopUpDiv() {
    var testStatisticsPopup = new Vue({
        el: '#testStatistics-popup',
        data: {
            firstStepTesting: [
                {Title:'Готова к теситрованию'},
                {Time: getCurrentDate()},
                {TimeInputID:'#date-time-input-firstTime'},
                {StepTestingID:'#firstStepTesting'},
                {defaultTitle: 'Готова к теситрованию'},
                {checkStatus: false}
            
            ],
            secondStepTesting:[
                {Title:'Начали тестировать'},
                {Time: getCurrentDate()},
                {TimeInputID:'#date-time-input-secondTime'},
                {StepTestingID:'#secondStepTesting'},
                {defaultTitle: 'Начали тестировать'},
                {checkStatus: false}
            
            ],
            thirdStepTesting:[
                {Title:'Планируем закончить'},
                {Time: getCurrentDate()},
                {TimeInputID:'#date-time-input-thirdTime'},
                {StepTestingID:'#thirdStepTesting'},
                {defaultTitle: 'Планируем закончить'},
                {checkStatus: false}
            
            ],
            fourthStepTesting:[
                {Title:'Закончили тестировать'},
                {Time: getCurrentDate()},
                {TimeInputID:'#date-time-input-fourthTime'},
                {StepTestingID:'#fourthStepTesting'},
                {defaultTitle: 'Закончили тестировать'},
                {checkStatus: false}
            ]
        },
        methods: {
            switchPage: function (pageID) {
                $('div.t-content').hide();
                $('div'+pageID).show();
            },
            setDateInput: function (id, params) {
                $(id).val(params);
            },
            check: function (params) {
                if (!params[5].checkStatus){
                    params[0].Title = params[0].Title + ': ' + getDateFormatString(params[1].Time);
                    $(params[2].TimeInputID).hide();
                } else {
                    params[0].Title = params[4].defaultTitle;
                    $(params[2].TimeInputID).show();
                }
                params[5].checkStatus = !params[5].checkStatus;
                $(params[3].StepTestingID).toggleClass("checklist-item-state-complete");
    
            },
            saved: function () {
                if (this.firstStepTesting[5].checkStatus){
                    console.log(this.firstStepTesting[0].Title);
                }
                if (this.secondStepTesting[5].checkStatus){
                    console.log(this.secondStepTesting[0].Title);
                }
                if (this.thirdStepTesting[5].checkStatus){
                    console.log(this.thirdStepTesting[0].Title);
                }
                if (this.fourthStepTesting[5].checkStatus){
                    console.log(this.fourthStepTesting[0].Title);
                }
            }
        }
    });
}