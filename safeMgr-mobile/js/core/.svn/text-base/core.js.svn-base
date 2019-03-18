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
    var self = plus.webview.currentWebview();

    //年度安全生产工作计划
    document.getElementById("core-gzjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/aqscglmb/core-gzjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全生产责任制定期考核
    document.getElementById("core-dqkh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-dqkh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 目标考核
    document.getElementById("core-mbkh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/aqscglmb/core-mbkh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安委会记录
    document.getElementById("core-awhjl").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-awhjl.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 目标责任书
    document.getElementById("core-mbzrs").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/aqscglmb/core-mbzrs.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 特殊作业台账
    document.getElementById("core-zytz").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/tszygl/core-zytz.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 特殊作业审批记录
    document.getElementById("core-spjl").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/tszygl/core-spjl.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 领带干部带班
    document.getElementById("core-gbdb").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-gbdb.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全生产规模制度与操作规程
    document.getElementById("core-zdgc").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-zdgc.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全教育培训计划
    document.getElementById("core-pxjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-pxjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 应急预案与演练计划
    document.getElementById("core-yajh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-yajh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 隐患排查管理-安全检查计划 
    // 注意：与 负责人职责管理-安全检查计划 相同
    document.getElementById("core-jcjh-double").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-jcjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 隐患排查管理-隐患治理台账
    document.getElementById("core-yhzl").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/yhpcgl/core-yhzl.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 风险管理培训记录
    document.getElementById("core-pxjl").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fxgl/core-pxjy.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    //作业活动与设备清单
    document.getElementById("core-sbqd").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fxgl/core-sbqd.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    //风险评价文件
    document.getElementById("core-pjwj").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fxgl/core-pjwj.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    //风险评估与评审记录
    document.getElementById("core-psjl").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fxgl/core-psjl.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    //重大风险清单
    document.getElementById("core-fxqd").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fxgl/core-fxqd.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全生产费用使用标准和提取台账
    document.getElementById("core-bztz").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-bztz.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 负责人职责管理 安全检查计划
    document.getElementById("core-jcjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/fzrzzgl/core-jcjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 年度综合检维修计划
    document.getElementById("core-jwxjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jwxgl/core-jwxjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 检维修方案
    document.getElementById("core-jwxfa").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jwxgl/core-jwxfa.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全设施台账
    document.getElementById("core-aqsstz").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/check-list.html',
            id: '',
            extras: {
                flag: "aqsstz"
            },
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全教育培训计划
    document.getElementById("core-aqpxjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jypxgl/core-aqpxjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全培训教育档案
    document.getElementById("core-aqpxda").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jypxgl/core-aqpxda.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 安全生产管理人员台账
    document.getElementById("core-aqrytz").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jypxgl/core-aqrytz.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });
    // 特种作业人员台账
    document.getElementById("core-tzrytz").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/jypxgl/core-tzrytz.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 职业危害防治计划
    document.getElementById("core-zyfzjh").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/zyjkgl/core-zyfzjh.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 职业卫生档案
    document.getElementById("core-zywsda").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/zyjkgl/core-zywsda.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    // 健康监护档案
    document.getElementById("core-jkda").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/zyjkgl/core-jkda.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });
    
    // 特种设备台账
    document.getElementById("core-tzsb").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/core/sbss/core-tzsb.html',
            id: '',
            extras: {},
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

});