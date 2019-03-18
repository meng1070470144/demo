// 公共列表界面-二级
mui.init();

mui.plusReady(function() {
    var self = plus.webview.currentWebview();
    // 注意：不能使用id
    var parentId = self.parentId;
    var flag = self.flag;
    console.log("parentId=" + parentId + " flag=" + flag);

    var title = getTitle(flag);
    jQuery("#h-title").html(title);

    document.getElementById('button-refresh').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryById();
    }, false);

    // 查询
    document.getElementById('confirm').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryById();
    }, false);

    function queryById() {
        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }

        var jsonObj = new Object();
        jsonObj["parentId"] = parentId;
        var jsonStr = JSON.stringify(jsonObj);
        console.log("jsonStr=" + jsonStr);
        // TODO 根据flag调用对应接口
        plus.nativeUI.showWaiting("正在查询...");
        var promise = business.getInfoListForSecond(flag, jsonStr);
        promise.done(function(data) {
            var result = data.result;
            // 刷新界面

            jQuery("#content").empty();

            if(result.data.length <= 0) {
                handleContent("empty");
                return;
            }

            createHtml(result, flag);
            handleContent("success");
            refreshEvent(flag);
        });
        promise.always(function() {
            plus.nativeUI.closeWaiting();
        });
        return promise;
    }

    function createHtml(result, flag) {
        var ret = result;
        var total = parseInt(ret.data.length);
        var html = "";
        var listHtml = "";
        for(var i = 0; i < total; i++) {
            html += generateHtml(i, ret.data[i]);
        }
        jQuery('#content').show();
        jQuery("#content").append(html);
    }

    function generateHtml(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var keyMap = getMap(flag);

        var html = "";

        // 标题
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'>";
        html += "<img src='../../images/list-item-second.png'>{0}<span>{1}</span>".format(keyMap.get("name").title, data["name"]);
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

            //          html += "<div class='form-row'>";
            // 两列：填充左侧
            //          if(obj.hasOwnProperty("height")) {
            //              html += "<label class='form-row-left' style='height:{0};'>{1}</label>".format(obj.height, obj.title);
            //          } else {
            //              html += "<label class='form-row-left'>{0}</label>".format(obj.title);
            //          }

            // 两列：填充右侧
            var value = data[key];
            var transformValue = value;
            if(obj.hasOwnProperty("transformValue")) {
                transformValue = obj.transformValue(value);
            }
            // 去掉空字符串
            transformValue = formatString(transformValue);
            html += "<tr><td class='tr_name'>{0}</td><td class='td_name'>{1}</td></tr>".format(obj.title, transformValue);
        }

        // 查看详情按钮
        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='{0}'>查看详情</button>".format(data.id);
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
                url: "check-second-detail.html",
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

    queryById();
});

function getMap(flag) {
    var keyMap = new Map();
    if(flag === "gzjh") {
        // 安全生产管理目标-年度安全生产工作计划
         keyMap.put("name", {
            title: "名称："
        });
        keyMap.put("description", {
            title: "描述："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
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
        keyMap.put("name", {
            title: "名称："
        });
        keyMap.put("description", {
            title: "描述："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
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
        keyMap.put("name", {
            title: "名称："
        });
        keyMap.put("description", {
            title: "描述："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "jwxfa") {
        // 检维修管理-检维修档案
    } else if(flag === "aqpxjh") {
        // 教育培训管理-安全教育培训计划
           keyMap.put("name", {
            title: "名称："
        });
        keyMap.put("description", {
            title: "描述："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
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
    } else if(flag === "") {
        return "设备设施管理-详情";
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

// TODO 相对路径
function handleContent(content) {
    console.log("handleContent content=" + content);
    if(content === "success") {
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
    jQuery("#content").hide();
    if(content == "no-network") {
        mui.toast("当前没有网络!");
    } else if(content == "empty") {
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