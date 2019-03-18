mui.init();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    if(mui.os.ios) {
        jQuery("#update").hide();
        jQuery("#li-qrcode-android").hide();
        jQuery("#li-qrcode-ios").hide();
    }

    // 获取HBuilder基座的版本
    // console.log("runtime version=" + plus.runtime.version);
    // 获取manifest.json中配置的版本
    plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
        console.log("wgtinfo version=" + wgtinfo.version);
        document.getElementById('span-version').innerText = wgtinfo.version;
    });

    //用户反馈
    document.getElementById("user-advice").addEventListener('tap', function() {
        mui.openWindow({
            url: 'person-advice.html',
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

    // 检查更新
    document.getElementById("update").addEventListener('tap', function() {
        // console.log("check update begin");
        plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo) {
            var version = wgtinfo.version;
            console.log("check, version=" + version);
            var platform = (plus.os.name).toLocaleLowerCase();
            updateInfo.updateInfos(version, platform, true);
        });
    });

    function qrcode(downloadUrl, id) {
        // 默认生成的二维码大小是 256×256
        // jquery.qrcode.min.js，不支持中间嵌入logo图片
        jQuery('#' + id).empty();
        // 注意顺序
        jQuery('#' + id).qrcode({
            render: "canvas", //也可以替换为table
            foreground: "#047326",
            background: "#FFF",
            width: 164,
            height: 164,
            text: downloadUrl,
            //      typeNumber: -1, //计算模式
            //      correctLevel: 2, //二维码纠错级别
        });
        // jQuery("#id").qrcode(encodeURI("http://中文中文"));// 使用encodeURI进行转码
    }

    mui(".mui-table-view").on('tap', '#li-qrcode-android', function() {
        if(jQuery("#li-qrcode-android").hasClass("mui-active")) {
            return;
        }

        var downloadUrl = updateInfo.getQrcodeUrlAndroid();
        console.log("downloadUrl=" + downloadUrl);
        if(isValidString(downloadUrl)) {
            qrcode(downloadUrl, "div-qrcode-android");
        } else {
            mui.toast("当前没有Android版本信息");
            collapseMuiTableViewCell("li-qrcode-android");
        }
    });

    mui(".mui-table-view").on('tap', '#li-qrcode-ios', function() {
        if(jQuery("#li-qrcode-ios").hasClass("mui-active")) {
            return;
        }

        var downloadUrl = updateInfo.getQrcodeUrlIos();
        console.log("downloadUrl=" + downloadUrl);
        if(isValidString(downloadUrl)) {
            qrcode(downloadUrl, "div-qrcode-ios");
        } else {
            mui.toast("当前没有IPhone版本信息");
            collapseMuiTableViewCell("li-qrcode-ios");
        }
    });

    function collapseMuiTableViewCell(id) {
        setTimeout(function() {
            document.getElementById(id).setAttribute('class', "mui-table-view-cell mui-collapse");
        }, 200);
    }

});