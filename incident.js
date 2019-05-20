
Highcharts.setOptions({
    colors: ['#c17b7b', '#f08484', '#563737']
});

Highcharts.chart('bar2', {
    chart: {
        type: 'spline'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ["2547","2548","2549","2550","2551","2552","2553","2554","2555","2556","2557","2558","2559","2560","2561"]
    },
    yAxis: {
        title: {
            text: 'Amount'
        },
        labels: {
            formatter: function () {
                return this.value;
            }
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: 'Incident',
        marker: {
            symbol: 'square'
        },
        data: [1474,2091,2012,2409,1063,967,1097,1161,1851,1793,1356,945,815,589,548]

    }, {
        name: 'Dead',
        marker: {
            symbol: 'diamond'
        },
        data: [881,601,715,836,460,570,452,491,484,456,341,246,309,235,218,]
    }, {
        name: 'Injured',
        marker: {
            symbol: 'circle'
        },
        data: [773,1074,1198,1485,817,1084,898,1045,1351,987,672,544,630,343,265]
    }]
});
