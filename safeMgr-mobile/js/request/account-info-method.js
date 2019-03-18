function AdminServer() {

    var localData = new LocalData();

    this.queryRoleByBaseUserId = function(userId) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/right/queryRoleByBaseUserId.action";
        Network.ajaxOperatePost(actionName, userId, function(code, result) {
            console.log("queryRoleByBaseUserId result=" + JSON.stringify(result));
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

    this.setUserCId = function(clientId) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/mobile/setUserCId.action";
        Network.ajaxOperatePost(actionName, clientId, function(code, result) {
            console.log("setUserCId result=" + JSON.stringify(result));
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

    this.updatePassWord = function(jsonStr) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/rest/user/updatePassWord.action";
        Network.ajaxOperatePost(actionName, jsonStr, function(code, result) {
            console.log("updatePassWord result=" + JSON.stringify(result));
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

    this.getLoginInfo = function() {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/right/getLoginInfo.action";
        Network.ajaxOperateGet(actionName, function(code, result) {
            console.log("getLoginInfo result=" + JSON.stringify(result));

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

            // 保存数据
            localData.saveUserId(result.data.id);
            localData.saveUserName(result.data.name);
            localData.saveRealName(result.data.realName);
            localData.saveCorpId(result.data.corpId);
            localData.saveCorpName(result.data.corpName);
            localData.saveDeptId(result.data.deptId);
            localData.saveDeptName(result.data.deptName);
            localData.saveTel(result.data.tel);
            localData.saveEmail(result.data.email);
            var roles = result.data.roles;
            var strRoles = "";
            for(var i = 0; i < roles.length; i++) {
                // console.log("角色=" + roles[i]["name"]);
                strRoles += roles[i]["name"] + " ";
            }
            localData.saveRoles(strRoles);
            // 回调通知
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

    this.getLoginTreeLevelRangeModel = function(clazzName, fromLevel, toLevel) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/right/getLoginTreeLevelRangeModel/" + clazzName + "/" + fromLevel + "/" + toLevel;
        Network.ajaxOperateGet(actionName, function(code, result) {
            console.log("getLoginTreeLevelRangeModel result=" + JSON.stringify(result));
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

    this.getLoginTreeModel = function(clazzName) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/right/getLoginTreeModel/" + clazzName;
        Network.ajaxOperateGet(actionName, function(code, result) {
            console.log("getLoginTreeModel result=" + JSON.stringify(result));
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

    // 不带权限，获取部门信息
    this.formatJsonTreeModel = function(clazzName) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/tree/formatJsonTreeModel.action";
        Network.ajaxOperatePost(actionName, clazzName, function(code, result) {
            console.log("formatJsonTreeModel result=" + JSON.stringify(result)); // json
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                console.error("formatJsonTreeModel result is empty");
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

    // 带权限，获取部门信息，目前废弃
    this.queryAllSearchDept = function() {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/rest/dept/queryAllSearchDept";
        Network.ajaxOperateGet(actionName, function(code, result) {
            // console.log("queryAllSearchDept result=" + result);// jsonp
            console.log("queryAllSearchDept result=" + JSON.stringify(result)); // json
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                console.error("queryAllSearchDept result is empty");
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }

            // TODO 两级：XXX矿业公司-XXX部门
            var allDept = JSON.stringify(result.data[0].children);
            localData.saveAllDept(allDept);
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

}