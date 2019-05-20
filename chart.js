
Highcharts.setOptions({
    colors: ['#c17b7b', '#563737', '#563737']
});

Highcharts.chart('bar', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: '', 
        align: 'left'
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: 'left'
    },
    xAxis: [{
        categories: ["2547","2548","2549","2550","2551","2552","2553","2554","2555","2556","2557","2558","2559","2560","2561"],
        crosshair: true
    }],
    yAxis: [{ // line
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Incidents',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true

    }, { // bar
        gridLineWidth: 0,
        title: {
            text: 'Budget',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} million BATH',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }
   
    ],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        verticalAlign: 'right',
        x: 200,
        y: 0,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
    },
    series: [
        {//bar
            name: 'Budget',
            type: 'column',
            yAxis: 1,
            data: [13450.57,13674.90,14207.56,17526.94,22988.71,27144.91,15902.04,19387.80,16487.80,21124.90,24152.40,25686.50,30512.80,12510.10,13255.80],
            tooltip: {
                valueSuffix: ' million BATH'
            }
        },
        {//line
            name: 'Incidents',
            type: 'spline',
            data: [1474,2091,2012,2409,1063,967,1097,1161,1851,1793,1356,945,815,589,548],
            tooltip: {
                valueSuffix: ''
            }
        }
    ],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                }
            }
        }]
    }
});

// function jan(){
//     document.getElementById("pie1").style.display = "none";  
// }
