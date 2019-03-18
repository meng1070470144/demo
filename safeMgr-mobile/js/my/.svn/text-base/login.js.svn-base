mui.init();

var localData = new LocalData();
var loginRequest = new LoginRequest();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    /**
     * UI元素
     */
    var accountbox = document.getElementById('account-input');
    var passwordbox = document.getElementById('password-input');
    var loginButton = document.getElementById('login-button');
    var regButton = document.getElementById('reg');
    var forgetButton = document.getElementById('forget');

    setTimeout(function() {
        // 关闭 splash
        plus.navigator.closeSplashscreen();
    }, 600);

    var loginServer = function(userName, password) {
        var loginInfo = {
            userName: userName,
            pwd: password
        };
        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }
        // TODO 封装成工具方法
        if(loginInfo.userName == null || loginInfo.userName.trim() == "") {
            mui.alert("账号为空，请重新输入", "提示", "确定", function() {});
            return;
        }

        plus.nativeUI.showWaiting("正在请求，请稍候");
        var promise = loginRequest.login(loginInfo);
        promise.done(function(data) {
            // 保存配置
            var autoLogin = jQuery("#checkbox-autologin").is(":checked");
            console.log("save autoLogin=" + autoLogin);
            localData.saveAutoLogin(autoLogin);

            mui.openWindow({
                url: 'main.html',
                id: 'main.html',
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
        promise.fail(function(data) {
            var code = data.code;
            var result = data.result;
            ResultUtils.handleCommonMsg(code, result);
        });
        promise.always(function() {
            plus.nativeUI.closeWaiting();
        });
    };

    /**
     * 登录操作
     */
    loginButton.addEventListener('tap', function(event) {
        loginServer(accountbox.value, passwordbox.value);
    });

    /**
     * 忘记密码
     */
    forgetButton.addEventListener('tap', function(event) {
        mui.openWindow({
            url: 'settings/forget.html',
            id: 'forget',
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    /**
     * 退出操作
     */
    var backButtonPress = 0;
    mui.back = function(event) {
        // 注意：调用接口openWindow，跳转界面，不会触发back回调，也就不会关闭当前界面
        //     所以，在进入主界面后，销毁登录界面；反之，进入登录界面，销毁其他所有界面
        console.log("login page back");
        backButtonPress++;
        if(backButtonPress > 1) {
            plus.runtime.quit();
        } else {
            mui.toast('再按一次退出应用');
        }
        setTimeout(function() {
            backButtonPress = 0;
        }, 1000);
        return false;
    };

    // 1.首先检查自动登录
    var autoLogin = localData.getAutoLogin();
    var lastUserName = localData.getName();
    var lastPassword = localData.getPwd();
    console.log("get autoLogin=" + autoLogin);
    // TODO 业务逻辑顺序
    if(autoLogin) {
        // 1、自动登录
        if(lastUserName != null && lastUserName != "" && lastPassword != null && lastPassword != "") {
            console.log("auto login");
            // 自动填入上次保存的账户、密码
            jQuery("#account-input").val(lastUserName);
            jQuery("#password-input").val(lastPassword);
            // 发起登录请求
            loginServer(lastUserName, lastPassword);
        } else {
            console.error("auto login, but userName or password illegal");
        }
    } else {
        // 2、密码登录
        // 3、手势登录
        // 检查 "登录状态/锁屏状态" 开始
        var settings = localData.getSettings();
        if(settings.gestures) {
            mui.openWindow({
                url: 'unlock.html',
                id: 'unlock',
                show: {
                    aniShow: 'pop-in'
                },
                waiting: {
                    autoShow: false
                }
            });
        }
    }

    function closeOtherPage() {
        var curr = plus.webview.currentWebview();
        var wvs = plus.webview.all();
        var webviewList = [];
        for(var i = 0, len = wvs.length; i < len; i++) {
            // console.log("login, wvs page id=" + wvs[i].id + " getURL=" + wvs[i].getURL());
            // console.log("login, wvs page json=" + JSON.stringify(wvs[i]));
            if(wvs[i].getURL() == curr.getURL()) {
                continue;
            }
            console.log("login, need close page id=" + wvs[i].id);
            webviewList.push(wvs[i]);
        }
        if(webviewList.length == 0) {
            console.log("login, not need close pages");
            return;
        }
        // 注意：经测试，进入新界面后，延缓关闭登录界面，可以防止白屏
        // 特殊场景：已保存账户和密码，杀死进程，再次打开，进入登录界面，登录成功，会自动跳转，所以，进入登录界面，要先判断是否有历史主界面，防止误判
        setTimeout(function() {
            for(var i = 0; i < webviewList.length; i++) {
                console.log("login, close page id=" + webviewList[i].id);
                plus.webview.hide(webviewList[i]);
                plus.webview.close(webviewList[i]);
            }
        }, 500);
    }

    closeOtherPage();

});