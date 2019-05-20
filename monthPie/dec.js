Highcharts.setOptions({
    colors: ['#fad089', '#ff9c5b', '#ed303c']
});
Highcharts.chart('pie12', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Deceased in December 2018'
    },
    tooltip: {
        pointFormat: 'Percentage: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
            size : 250
        }
    },
    legend:{
        y: 20,
        labelFormat: '{name} ({y})'
    },
    series: [{
        name: 'amount',
        colorByPoint: true,
        data: [{
            name: 'Buddhists',
            y: 7,
            sliced: true,
            selected: true,
        }, {
            name: 'Muslims',
            y: 9
        }, {
            name: 'Unknown',
            y: 2
        }]
    }]
}
);