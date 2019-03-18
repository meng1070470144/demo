// 公共列表界面-一级
mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            auto: true,
            callback: pulldownRefresh
        },
        up: {
            height: 100, // 可选.默认50.触发上拉加载拖动距离
            auto: false, // 可选,默认false.自动上拉加载一次
            contentrefresh: "正在加载...", // 可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '没有更多数据了', // 可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: pullupRefresh
        }
    }
});

var flag = "";
var topTime = ""; // 记录列表第一条记录的时间
var endTime = ""; // 记录列表最后一条记录的时间

/*
 * 下拉刷新
 */
function pulldownRefresh() {
    if(!Network.isConnected()) {
        mui.toast("没有连上网络!");
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        return;
    }

    console.log("pull down to refresh");
    plus.nativeUI.showWaiting("正在加载，请稍候");
    var promise = queryByPhone(topTime, 1, false);
    promise.always(function() {
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        plus.nativeUI.closeWaiting();
    });
}

/**
 * 上拉刷新
 */
function pullupRefresh() {
    if(!Network.isConnected()) {
        mui.toast("当前没有网络!");
        mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
        return;
    }

    console.log("pull up to refresh");
    plus.nativeUI.showWaiting("正在加载，请稍候");
    var promise = queryByPhone(endTime, -1, false);
    promise.always(function() {
        mui('#pullrefresh').pullRefresh().endPullupToRefresh(false);
        plus.nativeUI.closeWaiting();
    });
}

mui.plusReady(function() {
    var self = plus.webview.currentWebview();
    // 注意：不能使用id
    flag = self.flag;
    console.log("flag=" + flag);

    var title = getTitle(flag);
    jQuery("#h-title").html(title);

    var titleHeight = jQuery("#div-title").height();

    // 刷新-重置列表
    document.getElementById('button-refresh').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryByPhone("", 0, true);
    }, false);

    // 查询-重置列表
    document.getElementById('confirm').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryByPhone("", 0, true);
    }, false);

    //  console.log("title height=" + jQuery("#div-title").height());
    //  console.log("card height=" + jQuery("#div-card").height());
    //  document.getElementById('li-search-panel').addEventListener('tap', function() {
    //      console.log("click search panel class=" + jQuery("#li-search-panel").attr('class'));
    //      if(jQuery("#li-search-panel").hasClass("mui-active")) {
    //          console.log("展开-》折叠");
    //          var top = jQuery("#div-title").height() + singleTop + 8 + 8;
    //          jQuery("#pullrefresh").css("top", top + "px"); // 100
    //          console.log("search panel height=" + jQuery("#li-search-panel").height());
    //      } else {
    //          console.log("折叠-》展开");
    //          var top = jQuery("#div-title").height() + singleTop * 4 + 8 + 8;
    //          jQuery("#pullrefresh").css("top", top + "px"); // 225
    //          console.log("search panel height=" + jQuery("#li-search-panel").height());
    //      }
    //  }, false);

    // 使用jquery.ba-resize.js，监听搜索框的高度变化
    // 因为mui-scroll-wrapper(pullrefresh)是绝对定位，所以，要根据搜索框的高度，修改top值，上下偏移
    // 参考：https://github.com/cowboy/jquery-resize
    jQuery("#div-card").bind('resize', function(e) {
        console.log("resize card height=" + jQuery("#div-card").height());
        var top = titleHeight + jQuery("#div-card").height() + 6 + 6;
        // console.log("bottom" + jQuery("#div-card").css("bottom"));// auto
        jQuery("#pullrefresh").css("top", top + "px");
    });

    queryByPhone("", 0, true);
});

function queryByPhone(judgeTime, direction, isClearList) {
    if(!Network.isConnected()) {
        mui.toast("没有连上网络!");
        return;
    }

    var jsonObj = new Object();
    jsonObj["direction"] = direction;
    jsonObj["pageSize"] = 5;
    jsonObj["updateTime"] = judgeTime;
    var jsonStr = JSON.stringify(jsonObj);
    console.log("jsonStr=" + jsonStr);
    // TODO 根据flag调用对应接口
    plus.nativeUI.showWaiting("正在查询...");
    var promise = business.getInfoListForFirst(flag, jsonStr);
    promise.done(function(data) {
        var result = data.result;
        // 刷新界面

        if(isClearList) {
            jQuery("#content").empty();
        }

        if(result.data.rows.length <= 0) {
            handleContent("empty");
            return;
        }

        var html = createHtml(result, flag);

        // 刷新列表首尾时间
        var total = parseInt(result.data.rows.length);
        var timeIndex = 8;
        jQuery('#content').show();
        if(direction == -1) {
            // 旧数据，日期更旧，小
            endTime = result.data.rows[total - 1][timeIndex];
            jQuery("#content").append(html);
        } else if(direction == 1) {
            // 新数据，日期更新，大
            topTime = result.data.rows[0][timeIndex];
            jQuery("#content").prepend(html);
        } else {
            // 首次进入界面，刷新最新数据
            topTime = result.data.rows[0][timeIndex];
            endTime = result.data.rows[total - 1][timeIndex];
            jQuery("#content").append(html);
        }

        handleContent("success");
        refreshEvent(flag);
        console.log("topTime=" + topTime + " endTime=" + endTime);
    });
    promise.always(function() {
        plus.nativeUI.closeWaiting();
    });
    return promise;
}

function createHtml(result, flag) {
    var total = parseInt(result.data.rows.length);
    var html = "";
    var listHtml = "";
    for(var i = 0; i < total; i++) {
        html += generateHtml(i, result.data.rows[i]);
    }
    //  jQuery('#content').show();
    //  jQuery("#content").append(html);
    return html;
}

function generateHtml(index, business) {
    console.log("generate html");
    if(business == null || business == "") {
        console.log("error = illegal params");
        return "";
    }

    var data = delnull(business);
    var id = data['0'];
    var keyMap = getMap(flag);

    var html = "";

    // 标题
    html += "<li class='mui-table-view-cell mui-collapse'>";
    html += "<a class='mui-navigate-right'>";
    html += "<img src='../../images/yj.png'>{0}<span>{1}</span>".format(keyMap.get("1").title, data["1"]);
    html += "</a>";

    html += "<div class='mui-collapse-content'>";
    html += "<table id='content' border='0' width='100%'>";
    // 记录详情
    var keys = keyMap.keys();
    for(var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var obj = keyMap.get(key);

        if(key === "name") {
            continue;
        }

        // 两列：填充右侧
        var value = data[key];
        var transformValue = value;
        if(obj.hasOwnProperty("transformValue")) {
            transformValue = obj.transformValue(value);
        }
        // 去掉空字符串
        transformValue = formatString(transformValue);
        console.log("title=" + obj.title + " value=" + transformValue);
        html += "<tr><td class='tr_name'>{0}</td><td class='td_name'>{1}</td></tr>".format(obj.title, transformValue);
    }

    // 查看详情按钮
    html += "<tr><td style='text-align:right;' colspan='2'>";
    html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='{0}'>查看详情</button>".format(id);
    html += "</td></tr>";

    html += "</table></div></li>";

    console.log("html=" + html);

    return html;
};

// 添加HTML元素后，刷新点击事件
function refreshEvent() {
    jQuery("button[listItemId]").click(function() {
        var listItemId = this.getAttribute("listItemId");
        var index = this.getAttribute("index");
        console.log("parent listItemId=" + listItemId + " index=" + index);
        mui.openWindow({
            url: "check-detail.html",
            id: '',
            extras: {
                // 注意：不能使用id，因为id是extras中的保留key
                listItemId: listItemId,
                flag: flag
            },
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: false
            }
        });
    });
}

// TODO 相对路径
function handleContent(content) {
    console.log("handleContent content=" + content);
    if(content === "success") {
        jQuery("#content").show();
        jQuery("#div-error").hide();
        return;
    }
    // 显示提示信息
    showTipMessage(content);
    // 显示提示界面
    var str = document.getElementById('content').innerText;
    console.log("str=" + str);
    console.log("str type=" + (typeof str));
    if(str === undefined || str === null || str === "") {
        showTipView(content);
    }
};

function showTipMessage(content) {
    // jQuery("#content").hide();
    if(content === "no-network") {
        mui.toast("当前没有网络!");
    } else if(content === "empty") {
        mui.toast("查询没有记录!");
    }
};

function showTipView(content) {
    console.log("showTipView content=" + content);
    jQuery("#div-error").show();
    jQuery("#content").hide();

    if(content === "no-network") {
        document.getElementById('span-error').innerText = "当前没有网络!";
        document.getElementById('img-error').src = "../../images/query-error.png";
    } else if(content === "error") {
        document.getElementById('span-error').innerText = "查询数据异常!";
        document.getElementById('img-error').src = "../../images/query-error.png";
    } else if(content === "empty") {
        jQuery("#content").empty();
        document.getElementById('span-error').innerText = "查询没有记录!";
        document.getElementById('img-error').src = "../../images/query-empty.png";
    }
};

function getMap(flag) {
    var keyMap = new Map();
    if(flag === "gzjh") {
        // 安全生产管理目标-年度安全生产工作计划
    } else if(flag === "mbzrs") {
        // 安全生产管理目标-安全目标责任书
    } else if(flag === "mbkh") {
        // 安全生产管理目标-安全目标考核
    } else if(flag === "dqkh") {
        // 负责人职责管理-安全生产责任制定期考核
    } else if(flag === "awhjl") {
        // 负责人职责管理-安委会记录
    } else if(flag === "gbdb") {
        // 负责人职责管理-领导干部带班
    } else if(flag === "zdgc") {
        // 负责人职责管理-安全生产制度与规程
    } else if(flag === "pxjh") {
        // 负责人职责管理-安全教育培训计划
    } else if(flag === "yajh") {
        // 负责人职责管理-应急预案和演练计划
    } else if(flag === "bztz") {
        // 负责人职责管理-安全生产费用使用标准和提取台账
    } else if(flag === "jcjh") {
        // 负责人职责管理-安全检查计划
    } else if(flag === "sbqd") {
        // 风险管理-作业活动和设备清单
    } else if(flag === "pjwj") {
        // 风险管理-风险评价
    } else if(flag === "psjl") {
        // 风险管理-风险评估报告和评审记录
    } else if(flag === "fxqd") {
        // 风险管理-重大风险清单
    } else if(flag === "pxjy") {
        // 风险管理-风险管理培训记录
    } else if(flag === "jwxjh") {
        // 检维修管理-检维修计划
    } else if(flag === "jwxfa") {
        // 检维修管理-检维修档案
    } else if(flag === "aqsstz") {
        // 设备设施管理-安全设施台账    数组 序号
        keyMap.put("1", {
            title: "名称："
        });
        keyMap.put("2", {
            title: "设备类型："
        });
        keyMap.put("4", {
            title: "所属单位："
        });
        keyMap.put("6", {
            title: "所属部门："
        });
        keyMap.put("8", {
            title: "更新时间："
        });
    } else if(flag === "aqpxjh") {
        // 教育培训管理-安全教育培训计划
    } else if(flag === "aqpxda") {
        // 教育培训管理-安全培训教育档案
    } else if(flag === "aqrytz") {
        // 教育培训管理-安全培训合格证书台账
    } else if(flag === "tzrytz") {
        // 教育培训管理-特种作业人员台账
    } else if(flag === "zyfzjh") {
        // 职业健康管理-职业危害防治计划
    } else if(flag === "zywsda") {
        // 职业健康管理-职业卫生档案
    } else if(flag === "jkda") {
        // 职业健康管理-从业人员健康监护档案
    } else if(flag === "zytz") {
        // 特殊作业管理-特殊作业台账
    } else if(flag === "spjl") {
        // 特殊作业管理-特殊作业审批记录
    } else if(flag === "yhzl") {
        // 隐患排查管理-隐患治理台账
    }

    return keyMap;
}

function getTitle(flag) {
    if(flag === "gzjh") {
        return "年度安全生产工作计划-计划细则";
    } else if(flag === "mbzrs") {
        return "安全目标责任书-详情";
    } else if(flag === "mbkh") {
        return "安全目标考核-详情";
    } else if(flag === "") {
        return "安全生产责任制-详情";
    } else if(flag === "dqkh") {
        return "安全生产责任制定期考核-详情";
    } else if(flag === "awhjl") {
        return "安委会记录-详情";
    } else if(flag === "gbdb") {
        return "领导干部带班-详情";
    } else if(flag === "zdgc") {
        return "安全生产制度与规程-详情";
    } else if(flag === "pxjh") {
        return "安全教育培训计划-详情";
    } else if(flag === "yajh") {
        return "应急预案和演练计划-详情";
    } else if(flag === "bztz") {
        return "安全生产费用使用标准和提取台账-详情";
    } else if(flag === "jcjh") {
        return "安全检查计划-计划细则";
    } else if(flag === "sbqd") {
        return "作业活动和设备清单-详情";
    } else if(flag === "pjwj") {
        return "风险评价-详情";
    } else if(flag === "psjl") {
        return "风险评估报告和评审记录-详情";
    } else if(flag === "fxqd") {
        return "重大风险清单-详情";
    } else if(flag === "pxjy") {
        return "风险管理培训记录-详情";
    } else if(flag === "fxqd") {
        return "重大风险清单-详情";
    } else if(flag === "jwxjh") {
        return "检维修计划-计划细则";
    } else if(flag === "jwxfa") {
        return "检维修档案-详情";
    } else if(flag === "aqsstz") {
        // 设备设施管理-安全设施台账
        return "安全设施台账";
    } else if(flag === "aqpxjh") {
        return "安全教育培训计划-计划细则";
    } else if(flag === "aqpxda") {
        return "安全培训教育档案-详情";
    } else if(flag === "aqrytz") {
        return "安全培训合格证书台账-详情";
    } else if(flag === "tzrytz") {
        return "特种作业人员台账-详情";
    } else if(flag === "zyfzjh") {
        return "职业危害防治计划-详情";
    } else if(flag === "zywsda") {
        return "职业卫生档案-详情";
    } else if(flag === "jkda") {
        return "从业人员健康监护档案-详情";
    } else if(flag === "aqpxjh") {
        return "应急救援器材-详情";
    } else if(flag === "aqpxda") {
        return "应急救援预案-详情";
    } else if(flag === "aqrytz") {
        return "应急救援队伍-详情";
    } else if(flag === "tzrytz") {
        return "应急预案和演练计划-详情";
    } else if(flag === "aqpxjh") {
        return "隐患排查治理 安全检查计划-详情";
    } else if(flag === "aqpxda") {
        return "安全检查台账-详情";
    } else if(flag === "aqrytz") {
        return "隐患治理台账-详情";
    } else if(flag === "zytz") {
        return "特殊作业管理 特殊作业台账-详情";
    } else if(flag === "spjl") {
        return "特殊作业审批记录-详情";
    } else if(flag === "yhzl") {
        return "隐患治理台账-详情";
    } else {
        return "查看详情";
    }
}