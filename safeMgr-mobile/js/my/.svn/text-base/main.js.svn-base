//mui初始化
mui.init();
//var subpages = ['board/board.html', 'core/core.html', 'resources/resources.html', 'settings/settings.html'];
var subpages = ['board/board.html', 'core/core.html', 'settings/settings.html'];
var subpage_style = {
    top: '44px',
    bottom: '51px'
};
var pageCount = 3;

var aniShow = {};
var tabactive = ['board/board.html'];

var localData = new LocalData();
var adminServer = new AdminServer();
var restServer = new RestServer();

//创建子页面，首个选项卡页面显示，其它均隐藏；
mui.plusReady(function() {

    var self = plus.webview.currentWebview();
    for(var i = 0; i < pageCount; i++) {
        var temp = {};
        console.log("subpages=" + subpages[i]);
        var sub = plus.webview.create(subpages[i], subpages[i], subpage_style);
        if(i > 0) {
            sub.hide();
        } else {
            temp[subpages[i]] = "true";
            mui.extend(aniShow, temp);
        }
        self.append(sub);
    }

    document.getElementById('img-report').addEventListener('tap', function(event) {
        mui.openWindow({
            url: 'report/report.html',
            id: 'report',
            show: {
                aniShow: 'pop-in'
            },
            waiting: {
                autoShow: true,
                title: '正在加载....'
            }
        });
    });

    window.addEventListener('refresh-main', function(event) {
        console.log("refresh main");
    });

    //---------------------PUSH BEGIN-----------------------------
    // 监听在线消息事件
    plus.push.addEventListener("receive", function(msg) {
        console.log("getui receive push message");
        if(msg.aps) {
            // Apple APNS message
            console.log("接收到在线APNS消息");
        } else {
            console.log("接收到在线透传消息");
        }
        handlePushMsg(msg);
    }, false);

    // TODO 推送代码 IOS
    message = document.getElementById("message");
    // 监听点击消息事件
    plus.push.addEventListener("click", function(msg) {
        // 判断是从本地创建还是离线推送的消息
        console.log("getui click");
        switch(msg.payload) {
            case "LocalMSG":
                console.log("点击本地创建消息启动：");
                break;
            default:
                console.log("点击离线推送消息启动：");
                break;
        }
        // 提示点击的内容
        mui.toast("receive msg=" + msg.content);
        // 处理其它数据
        handlePushMsg(msg);
    }, false);

    function handlePushMsg(msg) {
        console.log("receive push msg=" + JSON.stringify(msg));
        // 透传消息格式： 
        // {
        //  "content": "{\"type\":\"提醒\",\"name\":\"证书过期\"}",
        //  "payload": "{\"type\":\"提醒\",\"name\":\"证书过期\"}",
        //  "appid": "H51820EB8",
        //  "title": "隐患排查",
        //  "__UUID__": "androidPushMsg1141970088"
        // }
        console.log("receive push content=" + JSON.stringify(msg.content));
        console.log("receive push payload=" + JSON.stringify(msg.payload));
        var payload = JSON.parse(msg.payload);
        console.log("receive push payload type=" + payload.type);
        switch(payload.type) {
            case 100:
                console.log("100 跳转到：核心要素");
                gotoPushMsgHandlePage("core/core.html");
                break;
            case 200:
                console.log("200 跳转到：核心管理");
                gotoPushMsgHandlePage("core/core.html");
                break;
            default:
                console.log("不跳转");
                break;
        }
    }

    // TODO 优化
    function gotoPushMsgHandlePage(page) {
        var currPageId = plus.webview.currentWebview().id;
        console.log("gotoPushMsgHandlePage currPageId=" + currPageId);
        // TODO main.js在main.html中加载，所以，currentWebview==main.html
        //          if(currPageId != page) {
        // 打开指定界面
        openPage(page);
        // location.href = "#tabbar-core";// TODO 在当前布局中失效
        gotoTab(page);
    }

    function gotoTab(targetTab) {
        console.log("targetTab=" + targetTab);
        //若为iOS平台或非首次显示，则直接显示       
        if(mui.os.ios || aniShow[targetTab]) {
            plus.webview.show(targetTab);
        } else {
            //否则，使用fade-in动画，且保存变量
            var temp = {};
            temp[targetTab] = "true";
            mui.extend(aniShow, temp);
            plus.webview.show(targetTab, "fade-in", 300);
        }
    }

    function openPage(tab) {
        console.log("gotoTab tab=" + tab);
        cleanClass("tabber-border");
        if(tab == 'core/core.html') {
            conversion("tabber-core");
            cleanClass("tabber-resources");
        } else if(tab == 'resources/resources.html') {
            conversion("tabber-resources");
            cleanClass("tabber-core");
        }
    }

    function conversion(pageID) {
        var title = document.getElementById("title");
        var tabresources = document.getElementById(pageID);
        title.innerHTML = document.querySelector("#" + pageID + ">" + ".mui-tab-label").innerHTML;
        tabresources.className += ' mui-active';
        tabactive[0] = pageID;
        tabactive[1] = true;
        console.log("tabactive[0]=" + tabactive[0]);
        console.log("tabresources.className=" + tabresources.className);
    }

    function cleanClass(page) {
        var tabborder = document.getElementById(page);
        if(tabborder === undefined || tabborder === null) {
            console.error("tabborder is null");
            return;
        }
        tabborder.className = tabborder.className.replace(' mui-active', '');
    }

    function listAllPush() {
        var msgs = null;
        switch(plus.os.name) {
            case "Android":
                msgs = plus.push.getAllMessage();
                break;
            default:
                break;
        }
        if(!msgs) {
            console.log("此平台不支持枚举推送消息列表！");
            return;
        }
        console.log("枚举消息列表（" + msgs.length + "）：");
        for(var i in msgs) {
            var msg = msgs[i];
            console.log(i + ": " + msg.title + " - " + msg.content);
        }
    };
    //---------------------PUSH END  -----------------------------

    // 登录成功后，上报个推ClientID，用于标示该用户
    function uploadClientId() {
        var clientId = localData.getPushClientId();;
        if(isInvalidString(clientId)) {
            clientId = plus.push.getClientInfo().clientid;
            localData.savePushClientId(clientId);
            console.error("clientId illegal=" + clientId);
            return;
        }
        var promise = adminServer.setUserCId(clientId);
        promise.done(function(data) {
            uploadPushClientId = true;
            console.log("uploadClientId success");
        });
        promise.fail(function(data) {
            console.error("uploadClientId fail");
            // TODO 上传失败，要在网络通的情况下，再次尝试上传；
        });
        return promise;
    }

    function closeLoginPage() {
        var wvs = plus.webview.all();
        for(var i = 0, len = wvs.length; i < len; i++) {
            // 注意：首次打开界面，login.html界面的id，是系统的，经测试，使用HBuilder基座运行时，登录界面的id=HBuilder
            if(wvs[i].getURL().indexOf("login.html") >= 0) {
                console.log("close login page=" + wvs[i].getURL());
                // 注意：先隐藏，再关闭，否则，打开新界面后，被销毁的界面还会一闪而过，体验不好
                plus.webview.hide(wvs[i]);
                plus.webview.close(wvs[i]);
            }
        }
    }

    // TODO 测试跳转
    //  setTimeout(function() {
    //      // 切换tab界面
    //      gotoPushMsgHandlePage("core/core.html");
    //      // 跳转到子界面
    //      mui.openWindow({
    //          url: 'core/aqscglmb/core-gzjh.html',
    //          id: '',
    //          extras: {},
    //          preload: false,
    //          show: {
    //              aniShow: 'pop-in'
    //          },
    //          waiting: {
    //              autoShow: true,
    //              title: '正在加载....'
    //          }
    //      });
    //  }, 5000);

    setTimeout(function() {
        closeLoginPage();
    }, 500);

    /**
     * 退出操作
     */
    var first = null;
    mui.back = function() {
        if(!first) {
            first = new Date().getTime();
            mui.toast('再按一次退出系统!');

            setTimeout(function() {
                first = null;
            }, 2000);
        } else {
            if(new Date().getTime() - first < 2000) {
                plus.runtime.quit();
            }
        }
    };

    setTimeout(function() {
        // 测试发现：在IOS设备上，刚进入主界面，获取不到push clientID，需要延迟
        // 首次进入主界面，刷新一下缓存中的ClientId
        var clientId = plus.push.getClientInfo().clientid;
        localData.savePushClientId(clientId);
        // 上报ClientId
        uploadClientId();
    }, 5000);
    //当前激活选项
    var activeTab = tabactive[0];
    var title = document.getElementById("title");
    //选项卡点击事件
    mui('.mui-bar-tab').on('tap', 'a', function(e) {
        var targetTab = this.getAttribute('href');
        if(tabactive[1]) {
            activeTab = tabactive[0];
            tabactive[1] = false;
        }
        if(targetTab == activeTab) {
            return;
        }
        //更换标题
        title.innerHTML = this.querySelector('.mui-tab-label').innerHTML;
        //显示目标选项卡
        //若为iOS平台或非首次显示，则直接显示
        if(mui.os.ios || aniShow[targetTab]) {
            plus.webview.show(targetTab);
        } else {
            //否则，使用fade-in动画，且保存变量
            var temp = {};
            temp[targetTab] = "true";
            mui.extend(aniShow, temp);
            plus.webview.show(targetTab, "fade-in", 300);
        }
        //隐藏当前;
        plus.webview.hide(activeTab);
        //更改当前活跃的选项卡
        activeTab = targetTab;
    });
});

//自定义事件，模拟点击“首页选项卡”
document.addEventListener('gohome', function() {
    var defaultTab = document.getElementById("defaultTab");
    //模拟首页点击
    mui.trigger(defaultTab, 'tap');
    //切换选项卡高亮
    var current = document.querySelector(".mui-bar-tab>.mui-tab-item.mui-active");
    if(defaultTab !== current) {
        current.classList.remove('mui-active');
        defaultTab.classList.add('mui-active');
    }
});