mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            auto: false,
            callback: pulldownRefresh
        }
    }
});

mui('.mui-scroll-wrapper').scroll({
    scrollY: true, //是否竖向滚动
    scrollX: false, //是否横向滚动
    startX: 0, //初始化时滚动至x
    startY: 0, //初始化时滚动至y
    indicators: false, //是否显示滚动条
    deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
    bounce: true //是否启用回弹
});

var localData = new LocalData();
var loginRequest = new LoginRequest();
var adminServer = new AdminServer();

function pulldownRefresh() {
    if(!Network.isConnected()) {
        mui.toast("没有连上网络!");
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        return;
    }
    jQuery.when(getLoginInfo())
        .done(function(data) {
            mui.toast("刷新成功");
        })
        .fail(function(data) {
            mui.toast("刷新失败");
        })
        .always(function() {
            mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        });
}

function getLoginInfo() {
    var promise = adminServer.getLoginInfo();
    promise.done(function(data) {
        document.getElementById('person-realName').innerText = localData.getRealName();
        document.getElementById('person-roles').innerText = localData.getRoles();
    });
    return promise;
}

mui.plusReady(function() {
    // 基本信息
    document.getElementById("account").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/settings/person-account.html',
            id: '',
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

    // 账户安全
    document.getElementById("safe").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/settings/person-safe.html',
            id: '',
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

    // 关于
    document.getElementById("about").addEventListener('tap', function(event) {
        mui.openWindow({
            url: '../../page/settings/person-about.html',
            id: '',
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

    document.getElementById('exit').addEventListener('tap', function() {
        var btnArray = [{
            title: "注销当前账号"
        }];
        plus.nativeUI.actionSheet({
            cancel: "取消",
            buttons: btnArray
        }, function(event) {
            var index = event.index;
            switch(index) {
                case 1:
                    {
                        console.log("user logout");
                        logoutUser();
                        break;
                    }
            }
        });
    }, false);

    function logoutUser() {
        // TODO 登出接口调用失败，客户端体验；没有网络还不让注销登出；网络异常，登出失败，也不给登出
        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }
        // TODO 切换用户/注销用户，删除DB信息；

        plus.nativeUI.showWaiting("正在注销...");
        var clientId = localData.getPushClientId();
        // TODO clientId有时为空
        console.log("logout clientId=" + clientId);
        var promise = loginRequest.logout(clientId);
        promise.done(function(data) {
            clearUserInfo();
        });
        promise.fail(function(data) {
            var code = data.code;
            var result = data.result;
            ResultUtils.handleCommonMsg(code, result);
        });
        promise.always(function() {
            plus.nativeUI.closeWaiting();
        });
    }

    function clearUserInfo() {
        console.log("clearUserInfo begin");
        localData.clear();
        LocalStorage.clear();
        console.log("open login page");
        mui.openWindow({
            url: '../../page/login.html',
            id: 'login.html',
            preload: false,
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: false
            }
        });
    }

});

getLoginInfo();