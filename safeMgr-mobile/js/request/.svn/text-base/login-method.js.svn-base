function LoginRequest() {
    
    var localData = new LocalData();

    // 发送登录请求
    this.login = function(loginInfo) {
        var dtd = jQuery.Deferred();

        var jsonObj = new Object();
        jsonObj["name"] = loginInfo.userName;
        jsonObj["tel"] = loginInfo.userName; // TODO tel
        jsonObj["pwd"] = loginInfo.pwd;
        var jsonStr = JSON.stringify(jsonObj);

        var actionName = Address.getBaseServerUrl() + "/sso/login.action";
        Network.ajaxOperatePost(actionName, jsonStr, function(code, result) {
            console.log("login result=" + JSON.stringify(result));
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            // TODO status有无
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }

            localData.saveName(loginInfo.userName);
            localData.savePwd(loginInfo.pwd);
            localData.saveToken(result.data.token);
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

    this.logout = function(clientId) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/sso/loginOutByTokenForMobile.action";
        Network.ajaxOperatePost(actionName, clientId, function(code, result) {
            console.log("logout result=" + JSON.stringify(result));
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

}