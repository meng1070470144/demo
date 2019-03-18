mui.init();

var localData = new LocalData();
var loginRequest = new LoginRequest();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    var settings = localData.getSettings();
    var forgetButton = document.getElementById("forget");
    var locker = document.querySelector('.mui-locker');
    var clearStateAndToLogin = function() {
        settings.gestures = '';
        localData.setSettings(settings);
        mui.openWindow({
            url: 'login.html',
            id: 'login.html',
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: false
            }
        });
    };
    forgetButton.addEventListener('tap', function(event) {
        clearStateAndToLogin();
    });
    var tryNumber = 5;
    locker.addEventListener('done', function(event) {
        var rs = event.detail;
        if(settings.gestures == rs.points.join('')) {
            var loginInfo = {
                userName: localData.getName(),
                pwd: localData.getPwd()
            };
            if(!Network.isConnected()) {
                mui.toast("没有连上网络!");
                return;
            }
            if(loginInfo.userName == null || loginInfo.userName.trim() == "") { // TODO 封装成工具方法
                mui.alert("账号为空，请重新输入", "提示", "确定", function() {});
                return;
            }

            plus.nativeUI.showWaiting("正在请求，请稍候");
            var promise = loginRequest.login(loginInfo);
            promise.done(function(data) {
                console.log("open main html");
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
                console.log("login fail, code=" + code + " result=" + result);
                if(code == requestConstants.FAIL) {
                    if(result != null && result != "" && result.hasOwnProperty("msg")) {
                        mui.toast("请求失败 " + result.msg);
                    } else {
                        mui.toast("请求失败 ");
                    }
                } else if(code == requestConstants.ERROR) {
                    if(result == "timeout") {
                        mui.toast("请求超时!");
                    } else if(result == "error") {
                        mui.toast("请求错误!");
                    } else if(result == "abort") {
                        mui.toast("系统维护中");
                    } else {
                        mui.toast("登录失败");
                    }
                }
            });
            promise.always(function() {
                plus.nativeUI.closeWaiting();
            });
            rs.sender.clear();
        } else {
            tryNumber--;
            rs.sender.clear();
            if(tryNumber > 0) {
                mui.toast('解锁手势错误，还能尝试 ' + tryNumber + ' 次。');
            } else {
                clearStateAndToLogin();
            }
        }
    }, false);

    var backButtonPress = 0;
    mui.back = function(event) {
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
});