$(function() {

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2015/11/23',
            a: 100,
            b: 90
        }, {
            y: '2015/11/24',
            a: 75,
            b: 65
        }, {
            y: '2015/11/25',
            a: 50,
            b: 40
        }, {
            y: '2015/11/26',
            a: 75,
            b: 65
        }, {
            y: '2015/11/27',
            a: 50,
            b: 40
        }, {
            y: '2015/11/28',
            a: 75,
            b: 65
        }, {
            y: '2015/11/29',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Produced', 'Sold'],
        hideHover: 'auto',
        resize: true
    });

});
