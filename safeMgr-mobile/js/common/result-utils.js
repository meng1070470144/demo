ResultUtils = (function() {
    var owner = {};
    
    var localData = new LocalData();

    // TODO 登出确认对话框状态，true:打开，false:关闭
    var logoutAlertStatus = false;

    var getLoginHtml = function() {
        var currentWebview = plus.webview.currentWebview();
        if(currentWebview === undefined || currentWebview == null) {
            console.log("current webview is illegal");
            return;
        }
        var currentUrl = currentWebview.getURL();
        //      console.log("current webview=" + JSON.stringify(currentWebview));
        console.log("currentUrl=" + currentUrl);
        // TODO currentUrl不为空，但是
        // TODO FALSE="getURL".isPrototypeOf(currentWebview)
        // TODO FALSE=currentWebview.hasOwnProperty("getURL")
        //      if(!currentWebview.hasOwnProperty("getURL")) {
        //          console.log("current webview not have getURL");
        //          return;
        //      }
        if(currentUrl === undefined || currentUrl == null || currentUrl == "") {
            console.log("current webview is illegal");
            return;
        }
        var index = currentUrl.indexOf("page");
        var subUrl = currentUrl.substring(index);
        var reg = new RegExp("/", "g");
        var slashCount = subUrl.match(reg).length;
        console.log("当前页面URL：" + currentUrl);
        console.log("当前页面URL index：" + index);
        console.log("当前页面URL subUrl：" + subUrl);
        console.log("当前页面URL slashCount：" + slashCount);
        var strUrl = "login.html";
        for(var i = 0; i < slashCount - 1; i++) {
            strUrl = "../" + strUrl;
        }
        console.log("strUrl=" + strUrl);
        return strUrl;
    }

    var logout = function() {
        // 清空缓存数据
        localData.clear();
        localStorage.clear();

        // 关闭除当前页面外的其他页面 
        //      var curr = plus.webview.currentWebview();
        //      var wvs = plus.webview.all();
        //      for(var i = 0, len = wvs.length; i < len; i++) {
        //          if(wvs[i].getURL() == curr.getURL()) {
        //              continue;
        //          }
        //          plus.webview.close(wvs[i]);
        //      }

        // 跳转到登录界面
        //      if(mui.os.ios) {
        //      console.log("current ios");
        console.log("open login page, relogin=" + getLoginHtml());
        mui.openWindow({
            url: getLoginHtml(),
            id: 'login.html',
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: false
            }
        });
        //      } else {
        //          console.log("current android");
        //          plus.webview.open(getLoginHtml());
        //      }
        //      // 关闭当前页面
        //      curr.close();
    }

    owner.handleCommonFailMsg = function(result) {
        if(result == null || !result.hasOwnProperty("status")) {
            mui.toast("请求异常:" + result);
            return;
        }

        var status = result.status;
        var msg = result.msg;
        console.log("handleCommonFailMsg status=" + status + " msg=" + msg);
        if(status == "000010") {
            // token过期
            console.log("handleCommonFailMsg logoutAlertStatus=" + logoutAlertStatus);
            if(!logoutAlertStatus) {
                logoutAlertStatus = true;
                mui.alert("会话过期，请重新登录:" + status, "提示", "确定", function() {
                    logout();
                    logoutAlertStatus = false;
                });
            }
        } else {
            var tip = (msg == "" ? "请求失败" : msg);
            mui.toast(tip + ":" + status);
        }
    };

    owner.handleCommonErrorMsg = function(result) {
        if(result == null) {
            mui.toast("请求异常:" + result);
            return;
        }

        console.error("handleCommonErrorMsg result=" + result);
        //      var tip = (result == "" ? "请求失败" : result);
        //      mui.toast(tip);
        if(result == "timeout") {
            mui.toast("网络请求超时:" + result);
        } else if(result == "error") {
            mui.toast("网络请求错误:" + result);
        } else if(result == "abort") {
            mui.toast("网络请求中止:" + result);
        } else {
            mui.toast("网络请求失败:" + result);
        }
    };

    owner.handleCommonMsg = function(code, result) {
        if(code == requestConstants.ERROR) {
            console.log("handleCommonMsg error");
            owner.handleCommonErrorMsg(result);
        } else if(code == requestConstants.FAIL) {
            console.log("handleCommonMsg fail");
            owner.handleCommonFailMsg(result);
        }
    };

    return owner;

})();