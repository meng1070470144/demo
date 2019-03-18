// 公共详情界面
mui.init();

mui.plusReady(function() {
    var self = plus.webview.currentWebview();
    // 注意：不能使用id
    var listItemId = self.listItemId;
    var flag = self.flag;
    console.log("listItemId=" + listItemId + " flag=" + flag);

    var title = getTitle(flag);
    jQuery("#h-title").html(title);

    document.getElementById('button-refresh').addEventListener('tap', function() {
        queryById();
    }, false);

    // TODO
    document.getElementById('button-check-detail').addEventListener('tap', function() {
        // 查看检查记录
        console.log("查看列表界面-二级");
        mui.openWindow({
            url: "check-second-list.html",
            id: '',
            extras: {
                // 注意：不能使用id，因为id是extras中的保留key
                parentId: listItemId,
                flag: flag
            },
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: false
            }
        });
    }, false);

    document.getElementById('button-back').addEventListener('tap', function() {
        mui.back();
    }, false);

    function queryById() {
        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }

        // TODO 根据flag调用对应接口 
        var promise = business.getInfoForDetail(listItemId, flag);
        promise.done(function(data) {
            var result = data.result;
            if(result.data === null || result.data === "") {
                // 查询详情数据为空
                console.error("result data is empty");
                mui.toast("查询详情数据，响应数据为空");
                return;
            }
            // 刷新界面
            refreshHtml(result.data);
        });
        return promise;
    }

    function refreshHtml(data) {
        var keyMap = getMap(flag);

        var html = "";
        // 记录详情
        var keys = keyMap.keys();
        for(var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var obj = keyMap.get(key);

            html += "<div class='form-row'>";
            // 两列：填充左侧
            if(obj.hasOwnProperty("height")) {
                html += "<label class='form-row-left' style='height:{0};'>{1}</label>".format(obj.height, obj.title);
            } else {
                html += "<label class='form-row-left'>{0}</label>".format(obj.title);
            }

            // 两列：填充右侧
            var value = data[key];
            var transformValue = value;
            if(obj.hasOwnProperty("transformValue")) {
                transformValue = obj.transformValue(value);
            }
            // 去掉空字符串
            transformValue = formatString(transformValue);
            html += "<label class='form-row-right'>{0}</label>".format(transformValue);
            html += "</div>";
        }

        // 附件列表
        html += "<div class='form-row'><label class='form-row-left'>附件：</label></div>";
        if(data.hasOwnProperty("attachments") && data.attachments != undefined && data.attachments != null && data.attachments != "") {
            var attachmentArray = data.attachments;
            for(var j = 0; j < attachmentArray.length; j++) {
                var fileName = attachmentArray[j]["achievementName"]; // 上传文件原始名称，主要用于显示
                var fileInnerName = attachmentArray[j]["name"]; // 系统内部名称，下载使用
                var filePath = attachmentArray[j]["path"]; // 下载文件的路径
                html += "<div class='form-row'>";
                html += "<span class='form-row-right' attachmentFilePath='{0}' attachmentFileInnerName='{1}'>{2}</span>".format(filePath, fileInnerName, fileName);
                html += "</div>";
            }
        } else {
            html += "<div class='form-row'>";
            html += "<span class='form-row-right'>{0}</span>".format("暂无附件");
            html += "</div>";
        }

        // TODO 查看检查记录
        //      if(flag === "jcjh") {
        //          // 安全检查计划
        //          // 左侧
        //          html += "<div class='form-row'><label class='form-row-left'>检维修记录：</label>";
        //          // 右侧
        //          html += "<span class='form-row-right'>{0}</span>".format("查看检维修记录");
        //          html += "</div>";
        //      }
        if(flag === "jcjh") {
            jQuery("#button-check-detail").show();
            jQuery("#button-check-detail").html(getCheckButtonText(flag));
        } else if(flag === "gzjh") {
            jQuery("#button-check-detail").show();
            jQuery("#button-check-detail").html(getCheckButtonText(flag));
        } else if(flag === "aqpxjh") {
            jQuery("#button-check-detail").show();
            jQuery("#button-check-detail").html(getCheckButtonText(flag));
        } else if(flag === "jwxjh") {
            jQuery("#button-check-detail").show();
            jQuery("#button-check-detail").html(getCheckButtonText(flag));
        }

        jQuery("#form-detail").empty();
        jQuery("#form-detail").append(html);

        refreshEvent();
    }

    // 添加HTML元素后，刷新点击事件
    function refreshEvent() {
        jQuery("span[attachmentFilePath]").click(function() {
            if(!Network.isConnected()) {
                mui.toast("没有连上网络!");
                return;
            }

            var filePath = this.getAttribute("attachmentFilePath");
            var fileName = this.getAttribute("attachmentFileInnerName");
            console.log("attachement filePath=" + filePath + " fileName=" + fileName);
            openAttachmentFile(filePath, fileName);
        });
    }

    // 下载和查看附件
    function openAttachmentFile(filePath, fileName) {
        var url = "http://192.168.1.102:8084/download/downloadFile";
        // 注意顺序
        url += "/" + fileName;
        url += filePath;
        console.log("attachment url=" + url);

        plus.nativeUI.showWaiting("正在下载文件，请稍候...");
        DownloadUtils.downloadFile(url, fileName, function(code, localFilePath) {
            console.log("download file code=" + code);
            if(code == 0) {
                console.log("localFilePath=" + localFilePath);
                plus.runtime.openFile(localFilePath, {}, function(error) {
                    // 调用第三方应用打开文件
                    console.log("open file error=" + JSON.stringify(error));
                    mui.toast('打开文件失败，请使用专用办公软件打开，比如：WPS,PDF');
                });
            } else {
                mui.toast('下载文件失败');
            }
            plus.nativeUI.closeWaiting();
        });
    }

    queryById();

});

function getCheckButtonText(flag) {
    if(flag === "jcjh") {
        return "查看计划细则";
    } else if(flag === "gzjh") {
        return "查看计划细则";
    } else if(flag === "aqpxjh") {
        return "查看计划细则";
    } else if(flag === "jwxjh") {
        return "查看计划细则";
    } else {
        return "查看记录"
    }
}

function getMap(flag) {
    var keyMap = new Map();
    if(flag === "gzjh") {
        // 安全生产管理目标-年度安全生产工作计划
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("corpName", {
            title: "组织部门：",
            height: "37px"
        });
        //      keyMap.put("type", {
        //          title: "检查分类："
        //      });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("signTime", {
            title: "签发时间："
        });
    } else if(flag === "mbzrs") {
        // 安全生产管理目标-安全目标责任书
        keyMap.put("name", {
            title: "责任书标题："
        });
        keyMap.put("corpName", {
            title: "组织部门：",
            height: "37px"
        });
        keyMap.put("fparty", {
            title: "甲方："
        });
        keyMap.put("sparty", {
            title: "乙方："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("signTime", {
            title: "签订时间："
        });
    } else if(flag === "mbkh") {
        // 安全生产管理目标-安全目标考核
        keyMap.put("name", {
            title: "考核标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("type", {
            title: "考核分类："
        });
        keyMap.put("signTime", {
            title: "考核时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "dqkh") {
        // 负责人职责管理-安全生产责任制定期考核
        keyMap.put("name", {
            title: "考核标题："
        });
        keyMap.put("deptName", {
            title: "考核部门："
        });
        keyMap.put("signTime", {
            title: "考核时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "awhjl") {
        // 负责人职责管理-安委会记录
        keyMap.put("name", {
            title: "会议标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("signTime", {
            title: "会议时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "gbdb") {
        // 负责人职责管理-领导干部带班
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("type", {
            title: "资料分类："
        });
        keyMap.put("signTime", {
            title: "执行时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "zdgc") {
        // 负责人职责管理-安全生产制度与规程
        keyMap.put("name", {
            title: "规章标题："
        });
        keyMap.put("corpName", {
            title: "发布部门："
        });
        keyMap.put("signTime", {
            title: "签发时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "pxjh") {
        // 负责人职责管理-安全教育培训计划
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "yajh") {
        // 负责人职责管理-应急预案和演练计划
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("type", {
            title: "资源分类："
        });
        keyMap.put("signTime", {
            title: "执行时间："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "bztz") {
        // 负责人职责管理-安全生产费用使用标准和提取台账
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("type", {
            title: "资源分类："
        });
        keyMap.put("signTime", {
            title: "执行时间："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "jcjh") {
        // 负责人职责管理-安全检查计划
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("type", {
            title: "资源分类："
        });
        keyMap.put("signTime", {
            title: "执行时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
    } else if(flag === "sbqd") {
        // 风险管理-作业活动和设备清单
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "pjwj") {
        // 风险管理-风险评价
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "psjl") {
        // 风险管理-风险评估报告和评审记录
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "fxqd") {
        // 风险管理-重大风险清单
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "pxjy") {
        // 风险管理-风险管理培训记录
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "jwxjh") {
        // 检维修管理-检维修计划
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "jwxfa") {
        // 检维修管理-检维修档案
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "aqsstz") {
        // 设备设施管理-安全设施台账
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("corpName", {
            title: "所属单位："
        });
        keyMap.put("deptName", {
            title: "所属部门："
        });
        keyMap.put("type", {
            title: "设备类别："
        });
        keyMap.put("createTime", {
            title: "创建时间："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "aqpxjh") {
        // 教育培训管理-安全教育培训计划
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "aqpxda") {
        // 教育培训管理-安全培训教育档案
        keyMap.put("name", {
            title: "姓名："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "aqrytz") {
        // 教育培训管理-安全培训合格证书台账
        keyMap.put("name", {
            title: "姓名："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("description", {
            title: "合格证名："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "tzrytz") {
        // 教育培训管理-特种作业人员台账
        keyMap.put("name", {
            title: "姓名："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "zyfzjh") {
        // 职业健康管理-职业危害防治计划
        keyMap.put("name", {
            title: "计划标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "zywsda") {
        // 职业健康管理-职业卫生档案
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "jkda") {
        // 职业健康管理-从业人员健康监护档案
        keyMap.put("name", {
            title: "员工姓名："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    } else if(flag === "zytz") {
        // 特殊作业管理-特殊作业台账
        keyMap.put("name", {
            title: "作业名称："
        });
        keyMap.put("corpName", {
            title: "发布部门："
        });
        keyMap.put("type", {
            title: "作业类型："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("signTime", {
            title: "审批时间："
        });
    } else if(flag === "spjl") {
        // 特殊作业管理-特殊作业审批记录
        keyMap.put("name", {
            title: "作业名称："
        });
        keyMap.put("corpName", {
            title: "发布部门："
        });
        keyMap.put("type", {
            title: "作业类型："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("signTime", {
            title: "作业时间："
        });
    } else if(flag === "yhzl") {
        // 隐患排查管理-隐患治理台账
        keyMap.put("name", {
            title: "考核标题："
        });
        keyMap.put("corpName", {
            title: "组织部门："
        });
        keyMap.put("people", {
            title: "责任人："
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("signTime", {
            title: "治理期限："
        });
    } else if(flag === "tzsb") {
        // 设备设施-特种设备台账
        keyMap.put("name", {
            title: "标题："
        });
        keyMap.put("deptId", {
            title: "所属部门："
        });
        keyMap.put("category", {
            title: "所属类别："
        });
        keyMap.put("remindCycle", {
            title: "提醒周期：",
            transformValue: transformRemindCycle, // 转换
        });
        keyMap.put("updateTime", {
            title: "更新时间："
        });
        keyMap.put("remark", {
            title: "备注信息："
        });
    }

    return keyMap;
}

function getTitle(flag) {
    if(flag === "gzjh") {
        return "年度安全生产工作计划-详情";
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
        return "安全检查计划-详情";
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
        return "检维修计划-详情";
    } else if(flag === "jwxfa") {
        return "检维修档案-详情";
    } else if(flag === "aqsstz") {
        return "安全设施台账-详情";
    } else if(flag === "aqpxjh") {
        return "安全教育培训计划-详情";
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
    } else if(flag === "tzsb") {
        return "特种设备台账-详情";
    } else {
        return "查看详情";
    }
}