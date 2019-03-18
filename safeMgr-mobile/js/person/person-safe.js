mui.init();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    // 修改密码跳转
    document.getElementById("editpwd").addEventListener('tap', function(event) {
        mui.openWindow({
            url: 'person-editpwd.html',
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

    // 手势解锁跳转
    document.getElementById("lock").addEventListener('tap', function(event) {
        mui.openWindow({
            url: 'person-lock.html',
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

});