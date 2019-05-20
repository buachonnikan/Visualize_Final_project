Highcharts.setOptions({
    colors: ['#fad089', '#ff9c5b', '#ed303c','#663300','#CC9900','#333300','#CC6600','#003366']
});
Highcharts.chart('pieC1', {
    exporting: { enabled: false },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'Types of unrest'
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
        
        labelFormat: '{name} ({y})',
        layout: 'vertical',
        verticalAlign: 'left',
        x: -260,
        y: 125,
    },
    series: [{
        name: 'amount',
        colorByPoint: true,
        data: [{
            name: 'Shooting(ยิง)',
            y: 4314,
            sliced: true,
            selected: true,
        }, {
            name: 'Bombing(ระเบิด)',
            y: 3512
        }, {
            name: 'Arson(วางเพลิง)',
            y:1514
        }, {
            name: 'Attack(โจมตีที่ตั้ง)',
            y: 191
        }, {
            name: 'Usurp the weapon(ประสงค์อาวุธ)',
            y: 176
        },{
            name: 'Slaughter(่ฆ่าทารุณ)',
            y: 92
        },{
            name: 'Protests(ชุมนุมประท้วง)',
            y: 65
        },{
            name: 'Ambush(ซุ่มโจมตี)',
            y: 41
        }]
    }]
}
);