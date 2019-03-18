mui.init();

// 初始化单页view
var viewApi = mui('#app').view({
    defaultPage: '#setting'
});

// 锁屏设置
mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    var settings = app.getSettings();
    var lockStateButton = document.getElementById("lockState");
    var locker = document.querySelector('.mui-locker');
    lockStateButton.classList[settings.gestures ? 'add' : 'remove']('mui-active')
    locker.style.display = settings.gestures ? 'block' : 'none';

    lockStateButton.addEventListener('toggle', function(event) {
        var isActive = event.detail.isActive;
        locker.style.display = isActive ? 'block' : 'none';
        if(!isActive) {
            settings.gestures = '';
            app.setSettings(settings);
        }
    }, false);

    var record = [];
    locker.addEventListener('done', function(event) {
        var rs = event.detail;
        if(rs.points.length < 4) {
            mui.toast('设定的手势太简单了');
            record = [];
            rs.sender.clear();
            return;
        }
        record.push(rs.points.join(''));
        if(record.length >= 2) {
            if(record[0] == record[1]) {
                mui.toast('解锁手势设定成功，以后用户只需使用手势解锁而无需输入密码登录。');
                settings.gestures = record[0];
                //settings.autoLogin = true;
                app.setSettings(settings);
                setTimeout(function() {
                    $.back();
                }, 200);
            } else {
                mui.toast('两次手势不一致,请重新设定');
            }
            rs.sender.clear();
            record = [];
        } else {
            mui.toast('请确认手势设定');
            rs.sender.clear();
        }
    }, false);

});

var view = viewApi.view;
(function($) {
    //处理view的后退与webview后退
    var oldBack = $.back;
    $.back = function() {
        if(viewApi.canBack()) { //如果view可以后退，则执行view的后退
            viewApi.back();
        } else { //执行webview后退
            oldBack();
        }
    };
    //监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发)
    //第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象
    view.addEventListener('pageBeforeShow', function(e) {
        console.log(e.detail.page.id + ' beforeShow');
    });
    view.addEventListener('pageShow', function(e) {
        console.log(e.detail.page.id + ' show');
        //进入手执设定界面时
        if(e.detail.page.id == 'lock') {
            var settings = app.getSettings();
            /*if (!settings.autoLogin) {
                mui.toast('当前没有启用 “自动登录”，需要在登录时启用 "自动登录"，设定的手势锁屏才会升效。');
            }*/
            var lockStateButton = document.getElementById("lockState");
            var locker = document.querySelector('.mui-locker');
            lockStateButton.classList[settings.gestures ? 'add' : 'remove']('mui-active')
            locker.style.display = settings.gestures ? 'block' : 'none';
        }
    });
    view.addEventListener('pageBeforeBack', function(e) {
        console.log(e.detail.page.id + ' beforeBack');
    });
    view.addEventListener('pageBack', function(e) {
        console.log(e.detail.page.id + ' back');
    });
})(mui);