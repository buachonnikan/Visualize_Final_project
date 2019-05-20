Highcharts.setOptions({
    colors: ['#f08484', '#621645', '#1c0126']
});
Highcharts.chart('ipie10', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Injured in October 2018'
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
            y: 11,
            sliced: true,
            selected: true,
        }, {
            name: 'Muslims',
            y: 7
        }, {
            name: 'Unknown',
            y: 0
        }]
    }]
}
);