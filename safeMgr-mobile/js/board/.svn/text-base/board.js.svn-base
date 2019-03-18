mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            auto: true,
            callback: pulldownRefresh
        }
    }
});

function pulldownRefresh() {
    if(!Network.isConnected()) {
        mui.toast("没有连上网络!");
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        return;
    }

    jQuery.when()
        .done(function(data) {
            console.log("all done");
            mui.toast("刷新成功");
        })
        .fail(function(data) {
            mui.toast("刷新失败");
        })
        .always(function() {
            console.log("always end pull down to refresh");
            mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        });
}

mui.plusReady(function() {

    // 图片轮播
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval: 5000 //自动轮播周期，若为0则不自动播放，默认为0；
    });

    document.getElementById('li-schedule-1').addEventListener('tap', function() {
        mui.toast("该功能正在开发中...");
    }, false);

    document.getElementById('li-schedule-2').addEventListener('tap', function() {
        mui.toast("该功能正在开发中...");
    }, false);

    document.getElementById('li-schedule-3').addEventListener('tap', function() {
        mui.toast("该功能正在开发中...");
    }, false);

    //  jQuery(".mui-table-view-cell")
    //  $("li[class]").click(function() {
    //      mui.toast("该功能正在开发中...");
    //  });

    var getOption = function(chartType) {
        var chartOption = chartType == 'pie' ? {
            tooltip: {
                show: true,
                trigger: 'item',
                hideDelay: 100, // TODO 延迟隐藏不起作用
                formatter: "{b} : {c}例 ({d}%)"
            },
            calculable: false,
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                data: [{
                    value: 9,
                    name: '安全生产目标管理'
                }, {
                    value: 6,
                    name: '负责人职责管理'
                }, {
                    value: 28,
                    name: '风险管理'
                }, {
                    value: 14,
                    name: '检维修管理'
                }, {
                    value: 35,
                    name: '设备设施管理'
                }, {
                    value: 18,
                    name: '教育培训管理'
                }]
            }]
        } : {
            legend: {
                data: ['已处理', '未处理']
            },
            grid: {
                x: 35,
                x2: 10,
                y: 30,
                y2: 25
            },
            toolbox: {
                show: false,
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            calculable: false,
            xAxis: [{
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                splitArea: {
                    show: true
                }
            }],
            series: [{
                name: '已处理',
                type: chartType,
                data: [5, 9, 7, 13, 25, 8, 16, 20, 32, 20, 16, 19]
            }, {
                name: '未处理',
                type: chartType,
                data: [2, 5, 2, 6, 7, 4, 6, 16, 10, 6, 6, 11]
            }]
        };
        return chartOption;
    };
    var byId = function(id) {
        return document.getElementById(id);
    };

    var barChart = echarts.init(byId('barChart'));
    barChart.setOption(getOption('bar'));

    var pieChart = echarts.init(byId('pieChart'));
    pieChart.setOption(getOption('pie'));

});