function LocalData() {

    /**
     * 保存token
     */
    this.saveToken = function(token) {
        localStorage.setItem("token", token);
    };

    /**
     * 获取token
     **/
    this.getToken = function() {
        return localStorage.getItem("token");
    };

    /**
     * 保存username
     */
    this.saveName = function(name) {
        localStorage.setItem("name", name);
    };

    /**
     * 获取username
     **/
    this.getName = function() {
        return formatString(localStorage.getItem("name"));
    };

    /**
     * 保存pwd
     */
    this.savePwd = function(pwd) {
        localStorage.setItem("pwd", pwd);
    };

    /**
     * 获取pwd
     **/
    this.getPwd = function() {
        return localStorage.getItem("pwd");
    };

    this.saveAutoLogin = function(autoLogin) {
        localStorage.setItem("autoLogin", autoLogin);
    };
    this.getAutoLogin = function() {
        // 注意：Boolean类型，保存到localStorage后，是字符串形式，再取出后，也是字符串形式，需要进行转换
        var value = localStorage.getItem("autoLogin");
        return value == "true" ? true : false;
    };

    this.clear = function() {
        console.log("clean login info");
        this.saveToken("");
        this.saveName("");
        this.savePwd("");
        this.saveAutoLogin(false);

        console.log("clean account info");
        this.saveUserId("");
        this.saveUserName("");
        this.saveRealName("");
        this.saveCorpName("");
        this.saveDeptName("");
        this.saveTel("");
        this.saveEmail("");
        this.saveRoles("");
    }

    /**
     * 获取应用本地配置
     **/
    this.setSettings = function(settings) {
        settings = settings || {};
        localStorage.setItem('$settings', JSON.stringify(settings));
    }

    /**
     * 设置应用本地配置
     **/
    this.getSettings = function() {
        var settingsText = localStorage.getItem('$settings') || "{}";
        return JSON.parse(settingsText);
    }

    this.saveUserId = function(userId) {
        localStorage.setItem("userId", userId);
    };

    this.getUserId = function() {
        return localStorage.getItem("userId");
    };

    this.saveUserName = function(name) {
        localStorage.setItem("userName", name);
    };
    this.getUserName = function() {
        return localStorage.getItem("userName");
    };

    this.saveRealName = function(realName) {
        localStorage.setItem("realName", realName);
    };
    this.getRealName = function() {
        return localStorage.getItem("realName");
    };

    this.saveCorpId = function(corpId) {
        localStorage.setItem("corpId", corpId);
    };
    this.getCorpId = function() {
        return localStorage.getItem("corpId");
    };

    this.saveCorpName = function(corpName) {
        localStorage.setItem("corpName", corpName);
    };
    this.getCorpName = function() {
        return localStorage.getItem("corpName");
    };

    this.saveDeptId = function(deptId) {
        localStorage.setItem("deptId", deptId);
    };
    this.getDeptId = function() {
        return localStorage.getItem("deptId");
    };

    this.saveDeptName = function(deptName) {
        localStorage.setItem("deptName", deptName);
    };
    this.getDeptName = function() {
        return localStorage.getItem("deptName");
    };

    this.saveTel = function(tel) {
        localStorage.setItem("tel", tel);
    };
    this.getTel = function() {
        return formatString(localStorage.getItem("tel"));
    };

    this.saveEmail = function(email) {
        localStorage.setItem("email", email);
    };
    this.getEmail = function() {
        return localStorage.getItem("email");
    };

    // TODO 保存为json数组格式
    this.saveRoles = function(roles) {
        localStorage.setItem("roles", roles);
    };
    this.getRoles = function() {
        return localStorage.getItem("roles");
    };

    this.saveAllDept = function(allDeptStr) {
        localStorage.setItem("allDept", allDeptStr);
    };
    this.getAllDept = function() {
        return localStorage.getItem("allDept");
    };

    this.saveAllDeptInPermission = function(allDeptStr) {
        localStorage.setItem("allDeptInPermission", allDeptStr);
    };
    this.getAllDeptInPermission = function() {
        var dept = localStorage.getItem("allDeptInPermission");
        return JSON.parse(dept);
    };

    this.saveSelfDept = function(selfDeptStr) {
        localStorage.setItem("selfDept", selfDeptStr);
    };
    this.getSelfDept = function() {
        return localStorage.getItem("selfDept");
    };

    this.saveChemicalsProperty = function(value) {
        localStorage.setItem("ChemicalsProperty", value);
    };
    this.getChemicalsProperty = function() {
        var data = localStorage.getItem("ChemicalsProperty");
        return JSON.parse(data);
    };

    // 缓存ClientId
    this.savePushClientId = function(clientId) {
        localStorage.setItem("push-client-id", clientId);
    };
    this.getPushClientId = function() {
        // 取ClientId，优先从ClientInfo对象中获取，其次从缓存中获取
        var clientId = plus.push.getClientInfo().clientid;
        if(isValidString(clientId)) {
            return clientId;
        } else {
            return localStorage.getItem("push-client-id");
        }
    };

}