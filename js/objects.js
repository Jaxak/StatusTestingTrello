var statusTesting = ["#readyForTesting", "#startedTesting", "#planToFinish", "#finishedTesting"];
var statusTestingCheck = ["#readyForTestingCheck", "#startedTestingCheck", "#planToFinishCheck", "#finishedTestingCheck"];
var statusTestingVue = [];

function getCheckListActual() {
    var readyForTesting = new Vue({
        el: '#readyForTestingCheck',
        data: {
            ch: false
        },
        methods: {
            check: function () {
                $(statusTesting[0]).toggleClass("checklist-item-state-complete");
                this.ch = !this.ch;
            }
        }
    })

    var startedTesting = new Vue({
        el: '#startedTestingCheck',
        data: {
            ch: false
        },
        methods: {
            check: function () {
                $(statusTesting[1]).toggleClass("checklist-item-state-complete");
                this.ch = !this.ch;
            }
        }
    })

    var planToFinish = new Vue({
        el: '#planToFinishCheck',
        data: {
            ch: false
        },
        methods: {
            check: function () {
                $(statusTesting[2]).toggleClass("checklist-item-state-complete");
                this.ch = !this.ch;
            }
        }
    })

    var finishedTesting = new Vue({
        el: '#finishedTestingCheck',
        data: {
            ch: false
        },
        methods: {
            check: function () {
                $(statusTesting[3]).toggleClass("checklist-item-state-complete");
                this.ch = !this.ch;
            }
        }
    })

    var buttonSave = new Vue({
        el: '#savedProgress',
        data: {
            
        },
        methods: {
            saved: function () {
                console.log(readyForTesting.ch + ' ' +
                startedTesting.ch + ' ' + 
                planToFinish.ch + ' ' + 
                finishedTesting.ch + ' ');
            }
        }
    })
}