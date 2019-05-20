Highcharts.setOptions({
    colors: ['#EFD13B', '#E9AF32', '#CC5B23','#336699','#CC3333','#003366']
});
Highcharts.chart('pieC2', {
    exporting: { enabled: false },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    title: {
        text: 'Cause of unrest'
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
        layout: 'vertical',
        verticalAlign: 'right',
        x: 300,
        y: 150,
        labelFormat: '{name}'
    },
    series: [{
        name: 'amount',
        colorByPoint: true,
        data: [{
            name: 'Separatism(การแบ่งแยกดินแดน)',
            y: 72.9,
            sliced: true,
            selected: true,
        }, {
            name: 'Crime(อาชญากรรม)',
            y: 47
        }, {
            name: 'Drug relate(เกี่ยวข้องกับยาเสพติด)',
            y: 28
        }, {
            name: 'Unclear(ไม่ชัดเจน)',
            y: 19
        }, {
            name: 'Political conflict(ความขัดแย้งทางการเมือง)',
            y: 0.4
        }, {
            name: 'Others(อื่นๆ)',
            y: 0.13
        }]
    }]
}
);