Highcharts.setOptions({
    colors: ['#fad089', '#ff9c5b', '#ed303c']
});
Highcharts.chart('pie1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Deceased in January 2018'
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
            size : 250,
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
            y: 5
        }, {
            name: 'Muslims',
            y: 15,
            sliced: true,
            selected: true,
        }, {
            name: 'Unknown',
            y: 0
        }]
    }]
}
);
