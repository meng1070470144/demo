(function($, owner) {

    // 年度安全生产工作计划
    owner.getInfoForGzjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/workPlan/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }
    // 目标考核
    owner.getInfoForMbkh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/checkTarget/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全生产制度与规程
    owner.getInfoForZdgc = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/rules/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全生产责任制定期考核
    owner.getInfoForDqkh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/responsCheck/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全生产责任制定期考核
    owner.getInfoForAwhjl = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/minutes/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 特殊作业台账
    owner.getInfoForZytz = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/specialWork/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 特殊作业审批记录
    owner.getInfoForSpjl = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/specialCheck/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全目标责任书
    owner.getInfoForMbzrs = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/produceTarget/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 详情-一级
    owner.getInfoForDetail = function(id, flag) {
        var url = Address.getBaseServerUrl();
        var actionName = "";
        if(flag === "gzjh") {
            // 1 年度安全生产工作计划
            var actionName = url + "/rest/workPlan/queryById/" + id;
        } else if(flag === "mbzrs") {
            // 安全目标责任书
            var actionName = url + "/rest/produceTarget/queryById/" + id;
        } else if(flag === "mbkh") {
            // 安全目标考核
            var actionName = url + "/rest/checkTarget/queryById/" + id;
        } else if(flag === "") {
            // TODO 2 安全生产责任制
        } else if(flag === "dqkh") {
            // 安全生产责任制定期考核
            var actionName = url + "/rest/responsCheck/queryById/" + id;
        } else if(flag === "awhjl") {
            // 安委会记录
            var actionName = url + "/rest/minutes/queryById/" + id;
        } else if(flag === "gbdb") {
            // 领导干部带班
            var actionName = url + "/rest/takeShift/queryById/" + id;
        } else if(flag === "zdgc") {
            // 安全生产制度与规程
            var actionName = url + "/rest/rules/queryById/" + id;
        } else if(flag === "pxjh") {
            // 安全教育培训计划
            var actionName = url + "/rest/safetyProductionTrainPlan/queryById/" + id;
        } else if(flag === "yajh") {
            // 应急预案和演练计划
            var actionName = url + "/rest/emergencyPlan/queryById/" + id;
        } else if(flag === "bztz") {
            // 安全生产费用使用标准和提取台账
            var actionName = url + "/rest/cost/queryById/" + id;
        } else if(flag === "jcjh") {
            // 安全检查计划
            var actionName = url + "/rest/checkPlan/queryById/" + id;
        } else if(flag === "sbqd") {
            // 3 作业活动和设备清单
            var actionName = url + "/rest/activityAndDeviceList/queryById/" + id;
        } else if(flag === "pjwj") { // TODO
            // 风险评价
            var actionName = url + "/rest/riskEvaluation/queryById/" + id;
        } else if(flag === "psjl") {
            // 风险评估报告和评审记录
            var actionName = url + "/rest/riskEvaluationAndReview/queryById/" + id;
        } else if(flag === "fxqd") {
            // 重大风险清单
            var actionName = url + "/rest/majorRiskList/queryById/" + id;
        } else if(flag === "pxjy") { // TODO
            // 风险管理培训记录
            var actionName = url + "/rest/riskManageTrainRecord/queryById/" + id;
        } else if(flag === "fxqd") {
            // 重大风险清单
            var actionName = url + "/rest/majorRiskList/queryById/" + id;
        } else if(flag === "jwxjh") {
            // ##### 检维修计划
            var actionName = url + "/rest/examineAndRepairPlan/queryById/" + id;
        } else if(flag === "jwxfa") {
            // 检维修档案
            var actionName = url + "/rest/examineAndRepairFile/queryById/" + id;
        } else if(flag === "aqsstz") {
            // 设备设施管理-安全设施台账
            var actionName = url + "/rest/device/queryById.action"
        } else if(flag === "aqpxjh") {
            // ##### 安全教育培训计划
            var actionName = url + "/rest/safetyProductionTrainPlan/queryById/" + id;
        } else if(flag === "aqpxda") {
            // 安全培训教育档案
            var actionName = url + "/rest/trainFile/queryById/" + id;
        } else if(flag === "aqrytz") {
            // 安全培训合格证书台账
            var actionName = url + "/rest/certificateList/queryById/" + id;
        } else if(flag === "tzrytz") {
            // 特种作业人员台账
            var actionName = url + "/rest/specialOperationList/queryById/" + id;
        } else if(flag === "zyfzjh") {
            // ##### 职业危害防治计划
            var actionName = url + "/rest/occupationalHazardsPreventionAndCurePlan/queryById/" + id;
        } else if(flag === "zywsda") {
            // 职业卫生档案
            var actionName = url + "/rest/occupationalHealthFile/queryById/" + id;
        } else if(flag === "jkda") {
            // 从业人员健康监护档案
            var actionName = url + "/rest/healthMonitoring/queryById/" + id;
        } else if(flag === "aqpxjh") {
            // ##### TODO 应急救援器材
            var actionName = url + "/rest/safetyProductionTrainPlan/queryById/" + id;
        } else if(flag === "aqpxda") {
            // TODO 应急救援预案
            var actionName = url + "/rest/trainFile/queryById/" + id;
        } else if(flag === "aqrytz") {
            // TODO 应急救援队伍
            var actionName = url + "/rest/certificateList/queryById/" + id;
        } else if(flag === "tzrytz") {
            // TODO 应急预案和演练计划
            var actionName = url + "/rest/specialOperationList/queryById/" + id;
        } else if(flag === "aqpxjh") {
            // ##### TODO 隐患排查治理 安全检查计划
            var actionName = url + "/rest/manageLedger/queryById/" + id;
        } else if(flag === "aqpxda") {
            // TODO 安全检查台账
            var actionName = url + "/rest/trainFile/queryById/" + id;
        } else if(flag === "aqrytz") {
            // TODO 隐患治理台账
            var actionName = url + "/rest/certificateList/queryById/" + id;
        } else if(flag === "zytz") {
            // ##### 特殊作业管理 特殊作业台账
            var actionName = url + "/rest/specialWork/queryById/" + id;
        } else if(flag === "spjl") {
            // 特殊作业审批记录
            var actionName = url + "/rest/specialCheck/queryById/" + id;
        } else if(flag === "yhzl") {
            // 隐患治理台账
            var actionName = url + "/rest/manageLedger/queryById/" + id;
        } else if(flag === "tzsb") {
            // 特种设备台账
            var actionName = url + "/rest/specialEquipmentList/queryById/" + id;
        } else {
            console.error("illegal params");
            return;
        }

        if(actionName.endWith("action")) {
            // POST
            return owner.getItemInfoPost(actionName, id);
        } else {
            // GET
            return owner.getItemInfo(actionName);
        }
    }

    // 列表-一级
    owner.getInfoListForFirst = function(flag, jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = "";
        if(flag === "gzjh") {
            // 1 年度安全生产工作计划
        } else if(flag === "mbzrs") {
            // 安全目标责任书
        } else if(flag === "mbkh") {
            // 安全目标考核
        } else if(flag === "") {
            // TODO 2 安全生产责任制
        } else if(flag === "dqkh") {
            // 安全生产责任制定期考核
        } else if(flag === "awhjl") {
            // 安委会记录
        } else if(flag === "gbdb") {
            // 领导干部带班
        } else if(flag === "zdgc") {
            // 安全生产制度与规程
        } else if(flag === "pxjh") {
            // 安全教育培训计划
        } else if(flag === "yajh") {
            // 应急预案和演练计划
        } else if(flag === "bztz") {
            // 安全生产费用使用标准和提取台账
        } else if(flag === "jcjh") {
            // 安全检查计划
        } else if(flag === "sbqd") {
            // 3 作业活动和设备清单
        } else if(flag === "pjwj") {
            // 风险评价
        } else if(flag === "psjl") {
            // 风险评估报告和评审记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "pxjy") {
            // 风险管理培训记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "jwxjh") {
            // ##### 检维修计划
        } else if(flag === "jwxfa") {
            // 检维修档案
        } else if(flag === "aqsstz") {
            // TODO 设备设施管理-安全设施台账
            var actionName = url + "/rest/device/queryForMobile.action";
        } else if(flag === "aqpxjh") {
            // ##### 安全教育培训计划
        } else if(flag === "aqpxda") {
            // 安全培训教育档案
        } else if(flag === "aqrytz") {
            // 安全培训合格证书台账
        } else if(flag === "tzrytz") {
            // 特种作业人员台账
        } else if(flag === "zyfzjh") {
            // ##### 职业危害防治计划
        } else if(flag === "zywsda") {
            // 职业卫生档案
        } else if(flag === "jkda") {
            // 从业人员健康监护档案
        } else if(flag === "aqpxjh") {
            // ##### TODO 应急救援器材
        } else if(flag === "aqpxda") {
            // TODO 应急救援预案
        } else if(flag === "aqrytz") {
            // TODO 应急救援队伍
        } else if(flag === "tzrytz") {
            // TODO 应急预案和演练计划
        } else if(flag === "aqpxjh") {
            // ##### TODO 隐患排查治理 安全检查计划
        } else if(flag === "aqpxda") {
            // TODO 安全检查台账
        } else if(flag === "aqrytz") {
            // TODO 隐患治理台账
        } else if(flag === "zytz") {
            // ##### 特殊作业管理 特殊作业台账
        } else if(flag === "spjl") {
            // 特殊作业审批记录
        } else if(flag === "yhzl") {
            // 隐患治理台账
        } else {
            console.error("illegal params");
            return;
        }

        return owner.getInfo(actionName, jsonStr);
    }

    // 列表-二级
    owner.getInfoListForSecond = function(flag, jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = "";
        if(flag === "gzjh") {
            // 1 年度安全生产工作计划
            var actionName = url + "/rest/planDetailInfo/queryByPhone.action";
        } else if(flag === "mbzrs") {
            // 安全目标责任书
        } else if(flag === "mbkh") {
            // 安全目标考核
        } else if(flag === "") {
            // TODO 2 安全生产责任制
        } else if(flag === "dqkh") {
            // 安全生产责任制定期考核
        } else if(flag === "awhjl") {
            // 安委会记录
        } else if(flag === "gbdb") {
            // 领导干部带班
        } else if(flag === "zdgc") {
            // 安全生产制度与规程
        } else if(flag === "pxjh") {
            // 安全教育培训计划
        } else if(flag === "yajh") {
            // 应急预案和演练计划
        } else if(flag === "bztz") {
            // 安全生产费用使用标准和提取台账
        } else if(flag === "jcjh") {
            // 安全检查计划
            var actionName = url + "/rest/planDetailInfo/queryByPhone.action";
        } else if(flag === "sbqd") {
            // 3 作业活动和设备清单
        } else if(flag === "pjwj") { // TODO
            // 风险评价
        } else if(flag === "psjl") {
            // 风险评估报告和评审记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "pxjy") { // TODO
            // 风险管理培训记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "jwxjh") {
            // ##### 检维修计划
            var actionName = url + "/rest/planDetailInfo/queryByPhone.action";
        } else if(flag === "jwxfa") {
            // 检维修档案
        } else if(flag === "") {
            // TODO 设备设施管理
        } else if(flag === "aqpxjh") {
            // ##### 安全教育培训计划
            var actionName = url + "/rest/planDetailInfo/queryByPhone.action";
        } else if(flag === "aqpxda") {
            // 安全培训教育档案
        } else if(flag === "aqrytz") {
            // 安全培训合格证书台账
        } else if(flag === "tzrytz") {
            // 特种作业人员台账
        } else if(flag === "zyfzjh") {
            // ##### 职业危害防治计划
        } else if(flag === "zywsda") {
            // 职业卫生档案
        } else if(flag === "jkda") {
            // 从业人员健康监护档案
        } else if(flag === "aqpxjh") {
            // ##### TODO 应急救援器材
        } else if(flag === "aqpxda") {
            // TODO 应急救援预案
        } else if(flag === "aqrytz") {
            // TODO 应急救援队伍
        } else if(flag === "tzrytz") {
            // TODO 应急预案和演练计划
        } else if(flag === "aqpxjh") {
            // ##### TODO 隐患排查治理 安全检查计划
        } else if(flag === "aqpxda") {
            // TODO 安全检查台账
        } else if(flag === "aqrytz") {
            // TODO 隐患治理台账
        } else if(flag === "zytz") {
            // ##### 特殊作业管理 特殊作业台账
        } else if(flag === "spjl") {
            // 特殊作业审批记录
        } else if(flag === "yhzl") {
            // 隐患治理台账
        } else {
            console.error("illegal params");
            return;
        }

        return owner.getInfo(actionName, jsonStr);
    }

    // 详情-二级
    owner.getInfoDetailForSecond = function(id, flag) {
        var url = Address.getBaseServerUrl();
        var actionName = "";
        if(flag === "gzjh") {
            // 1 年度安全生产工作计划
            var actionName = url + "/rest/planDetailInfo/queryById/" + id;
        } else if(flag === "mbzrs") {
            // 安全目标责任书
        } else if(flag === "mbkh") {
            // 安全目标考核
        } else if(flag === "") {
            // TODO 2 安全生产责任制
        } else if(flag === "dqkh") {
            // 安全生产责任制定期考核
        } else if(flag === "awhjl") {
            // 安委会记录
        } else if(flag === "gbdb") {
            // 领导干部带班
        } else if(flag === "zdgc") {
            // 安全生产制度与规程
        } else if(flag === "pxjh") {
            // 安全教育培训计划
        } else if(flag === "yajh") {
            // 应急预案和演练计划
        } else if(flag === "bztz") {
            // 安全生产费用使用标准和提取台账
        } else if(flag === "jcjh") {
            // 安全检查计划
            var actionName = url + "/rest/planDetailInfo/queryById/" + id;
        } else if(flag === "sbqd") {
            // 3 作业活动和设备清单
        } else if(flag === "pjwj") { // TODO
            // 风险评价
        } else if(flag === "psjl") {
            // 风险评估报告和评审记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "pxjy") { // TODO
            // 风险管理培训记录
        } else if(flag === "fxqd") {
            // 重大风险清单
        } else if(flag === "jwxjh") {
            // ##### 检维修计划
            var actionName = url + "/rest/planDetailInfo/queryById/" + id;
        } else if(flag === "jwxfa") {
            // 检维修档案
        } else if(flag === "") {
            // TODO 设备设施管理
        } else if(flag === "aqpxjh") {
            // ##### 安全教育培训计划
            var actionName = url + "/rest/planDetailInfo/queryById/" + id;
        } else if(flag === "aqpxda") {
            // 安全培训教育档案
        } else if(flag === "aqrytz") {
            // 安全培训合格证书台账
        } else if(flag === "tzrytz") {
            // 特种作业人员台账
        } else if(flag === "zyfzjh") {
            // ##### 职业危害防治计划
        } else if(flag === "zywsda") {
            // 职业卫生档案
        } else if(flag === "jkda") {
            // 从业人员健康监护档案
        } else if(flag === "aqpxjh") {
            // ##### TODO 应急救援器材
        } else if(flag === "aqpxda") {
            // TODO 应急救援预案
        } else if(flag === "aqrytz") {
            // TODO 应急救援队伍
        } else if(flag === "tzrytz") {
            // TODO 应急预案和演练计划
        } else if(flag === "aqpxjh") {
            // ##### TODO 隐患排查治理 安全检查计划
        } else if(flag === "aqpxda") {
            // TODO 安全检查台账
        } else if(flag === "aqrytz") {
            // TODO 隐患治理台账
        } else if(flag === "zytz") {
            // ##### 特殊作业管理 特殊作业台账
        } else if(flag === "spjl") {
            // 特殊作业审批记录
        } else if(flag === "yhzl") {
            // 隐患治理台账
        } else {
            console.error("illegal params");
            return;
        }

        return owner.getItemInfo(actionName);
    }

    // 领导干部带班
    owner.getInfoForGbdb = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/takeShift/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全生产教育培育计划
    owner.getInfoForPxjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/safetyProductionTrainPlan/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 应急预案与演练计划
    owner.getInfoForYajh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/emergencyPlan/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }
    // 安全检查计划
    owner.getInfoForJcjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/checkPlan/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全费用使用标准和提取台账
    owner.getInfoForBztz = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/cost/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 风险管理培训记录
    owner.getInfoForPxjy = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/riskManageTrainRecord/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 作业活动与设备清单
    owner.getInfoForSbqd = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/activityAndDeviceList/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 风险评价文件
    owner.getInfoForPjwj = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/riskEvaluation/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 风险评估与评审记录
    owner.getInfoForPsjl = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/riskEvaluationAndReview/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 重大风险清单
    owner.getInfoForFxqd = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/majorRiskList/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 年度综合检维修计划
    owner.getInfoForJwxjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/examineAndRepairPlan/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 检维修方案
    owner.getInfoForJwxfa = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/examineAndRepairFile/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全教育培训计划
    owner.getInfoForAqpxjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/safetyProductionTrainPlan/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全培训教育档案
    owner.getInfoForAqpxda = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/trainFile/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 安全生产管理人员台账
    owner.getInfoForAqrytz = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/certificateList/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 特种作业人员台账
    owner.getInfoForTzrytz = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/specialOperationList/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 职业危害防治计划
    owner.getInfoForZyfzjh = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/occupationalHazardsPreventionAndCurePlan/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 职业卫生档案
    owner.getInfoForZywsda = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/occupationalHealthFile/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 健康监护档案
    owner.getInfoForJkda = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/healthMonitoring/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 隐患治理台账
    owner.getInfoForYhzl = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/manageLedger/queryByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    //特种设备台账
    owner.getInfoForTzsb = function(jsonStr) {
        var url = Address.getBaseServerUrl();
        var actionName = url + "/rest/specialEquipmentList/queryByTokenByPhone.action";
        return owner.getInfo(actionName, jsonStr);
    }

    // 查询列表
    owner.getInfo = function(url, jsonStr) {
        var dtd = jQuery.Deferred();
        Network.ajaxOperatePost(url, jsonStr, function(code, result) {
            console.log("getInfo result=" + JSON.stringify(result));

            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

    // 查询详情-单条记录
    owner.getItemInfo = function(url) {
        var dtd = jQuery.Deferred();
        Network.ajaxOperateGet(url, function(code, result) {
            console.log("getItemInfo result=" + JSON.stringify(result));
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }

            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

    owner.getItemInfoPost = function(url, jsonStr) {
        var dtd = jQuery.Deferred();
        Network.ajaxOperatePost(url, jsonStr, function(code, result) {
            console.log("getItemInfoPost result=" + JSON.stringify(result));
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result === null || result === "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }

            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

    //查看详情
    owner.getDetailInfo = function(flag, id) {
        var dtd = jQuery.Deferred();
        var actionName = "";
        if(flag == "企业基本信息") {
            actionName = Address.getBaseServerUrl() + "/rest/ebi/queryById/" + id;
        }
        if(flag == "危险源清单") {
            actionName = Address.getBaseServerUrl() + "/rest/ehl/queryById/" + id;
        }
        if(flag == "应急预案") {
            actionName = Address.getBaseServerUrl() + "/rest/epm/queryById/" + id;
        }
        if(flag == "演练记录") {
            actionName = Address.getBaseServerUrl() + "/rest/edr/queryById/" + id;
        }
        if(flag == "三同时") {
            actionName = Address.getBaseServerUrl() + "/rest/threemeantime/queryById/" + id;
        }
        console.log("查看详情 actionname：" + actionName);

        Network.ajaxOperateGet(actionName, function(code, result) {
            console.log("getDetailInfo result=" + JSON.stringify(result));

            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                console.log("error = getDetailInfo response is empty");
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

}(mui, window.business = {}));