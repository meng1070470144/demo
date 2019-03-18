(function($, owner) {

    var forceUpdate = "";

    /*升级 */
    owner.updateInfos = function(version, platform, flag) {
        // 注意：IOS平台，应用内不允许包含检查更新功能
        if(mui.os.ios) {
            return;
        }

        console.log("updateInfos begin");
        if(!Network.isConnected()) {
            // 主动查询提示，否则不提示
            if(flag) {
                mui.alert("没有连上网络！");
            }
            return;
        }

        // TODO
        //      if(flag) {
        //          plus.nativeUI.showWaiting("正在请求，请稍候!");
        //      }
        
        var updateMethod = new UpdateMethod();

        var jsonObj = new Object();
        jsonObj["version"] = version;
        jsonObj["platform"] = platform;
        var jsonStr = JSON.stringify(jsonObj);
        jQuery.when(updateMethod.queryVersionByPhone(jsonStr))
            .done(function(data) {
                console.log("query update done");
                var result = data.result;

                if(result.data.length <= 0) {
                    if(flag) {
                        mui.toast("当前已是最新版本!");
                    }
                    return;
                }

                // 升级标志
                var needUpdate = result.data[0].needUpdate;
                console.log("needUpdate=" + needUpdate);
                // 强制升级标志
                forceUpdate = result.data[0].forceUpdate;
                // 平台标志
                var platform = result.data[0].platform;
                // 升级类型
                var type = result.data[0].type;
                var version = result.data[0].version;
                var durl = result.data[0].url;
                var fileName = result.data[0].fileName;
                // 
                var qrcodeUrlAndroid = result.data[0].qrcodeUrlAndroid;
                var qrcodeUrlIos = result.data[0].qrcodeUrlIos;
                owner.saveQrcodeUrlAndroid(qrcodeUrlAndroid);
                owner.saveQrcodeUrlIos(qrcodeUrlIos);
                // 是否需要升级
                if(needUpdate == "1") {
                    if(platform == "ios" && type == "ipa") {
                        installIpaInIos(durl);
                    }
                    if(platform == "android" && type == "apk") {
                        var cs_update = "safety_manager_" + version + ".apk";
                        installApkInAndriod(durl, cs_update);
                    }
                    if(type == "wgt") {
                        var cs_update = "safety_manager_" + version + ".wgt";
                        wgtDownload(durl, cs_update);
                    }
                } else {
                    if(flag) {
                        mui.toast('当前已是最新版本!')
                    }
                }
            })
            .fail(function(data) {
                console.error("query update fail");
                if(flag) {
                    var code = data.code;
                    var result = data.result;
                    ResultUtils.handleCommonMsg(code, result);
                }
            })
            .always(function() {
                //              if(flag) {
                //                  plus.nativeUI.closeWaiting();
                //              }
            });
    };

    function installIpaInIos(durl) {
        if(forceUpdate == "1") {
            // 打开应用在appstore位置
            plus.runtime.openURL(durl);
            return;
        } else {
            var btnArray = ['暂不更新', '更新'];
            mui.confirm('有新版本，是否更新？', '隐患排查平台', btnArray, function(e) {
                if(e.index == 1) {
                    plus.runtime.openURL(durl);
                    return;
                }
            });
        }
    };

    function installApkInAndriod(durl, updateinfo) {
        console.log("durl=" + durl);
        var btnArray = ['暂不更新', '更新'];
        mui.confirm('有新版本，是否更新？', '隐患排查平台', btnArray, function(e) {
            if(e.index == 1) {
                // 下载新版本
                plus.nativeUI.showWaiting("正在下载新版本,请稍后...");
                // 加载进度条
                var container = mui("#scroll-board p");
                if(container.progressbar({
                        progress: 0
                    }).show()) {
                    simulateLoading(container, 0);
                }

                // 下载文件
                DownloadUtils.downloadFile(durl, updateinfo, function(code, localFilePath) {
                    console.log("download code=" + code + " apklocalFilePath=" + localFilePath);
                    if(code == 0) {
                        // 下载成功
                        plus.nativeUI.closeWaiting();
                        mui(container).progressbar().hide();
                        plus.runtime.install(localFilePath);
                    } else {
                        plus.nativeUI.closeWaiting();
                        mui(container).progressbar().hide();
                        mui.alert("下载失败");
                        return;
                    }
                });
            } else {
                if(forceUpdate == "1") {
                    mui.toast("需要下载新版本才可使用"); //mui.alert速度太快，用户看不到显示
                    plus.runtime.quit();
                } else {
                    plus.nativeUI.closeWaiting();
                    // mui(container).progressbar().hide();
                    mui.toast("您已取消更新！");
                }
            }
        });
    };

    function wgtDownload(durl, updateinfo) {
        console.log("durl:" + durl);
        var btnArray = ['暂不更新', '更新'];
        mui.confirm('有新版本，是否更新？', '隐患排查平台', btnArray, function(e) {
            if(e.index == 1) {
                plus.nativeUI.showWaiting("正在更新资源,请稍后...");
                //加载进度条
                var container = mui("#scroll-board p");
                if(container.progressbar({
                        progress: 0
                    }).show()) {
                    simulateLoading(container, 0);
                }

                //下载文件
                DownloadUtils.downloadFile(durl, updateinfo, function(code, localFilePath) {
                    console.log("download code=" + code + " localFilePath=" + localFilePath);
                    if(code == 0) {
                        plus.nativeUI.closeWaiting();
                        mui(container).progressbar().hide();
                        installWgt(localFilePath); // 安装wgt包  
                        return;
                    } else {
                        plus.nativeUI.closeWaiting();
                        mui(container).progressbar().hide();
                        mui.alert("下载失败");
                        return;
                    }
                });
            } else {
                if(forceUpdate == "1") {
                    mui.toast("请更新后，才可使用！");
                    plus.runtime.quit();
                } else {
                    plus.nativeUI.closeWaiting();
                    mui(container).progressbar().hide();
                    mui.toast("您已取消更新！");
                }
            }
        });
    };

    // 更新应用资源
    function installWgt(path) {
        plus.nativeUI.showWaiting("安装wgt文件...");
        plus.runtime.install(path, {}, function() {
            plus.nativeUI.closeWaiting();
            console.log("安装wgt文件成功！");
            mui.alert("应用资源更新完成！", function() {
                plus.runtime.restart();
            });
        }, function(e) {
            plus.nativeUI.closeWaiting();
            console.error("安装wgt文件失败[" + e.code + "]：" + e.message);
            mui.alert("安装wgt文件失败[" + e.code + "]：" + e.message);
        });
    };

    // 加载进度条
    function simulateLoading(container, progress) {
        if(typeof container === 'number') {
            alert(container);
            progress = container;
            container = 'body';
        }
        setTimeout(function() {
            progress += Math.random() * 2;
            mui(container).progressbar().setProgress(progress);
            if(progress < 90) {
                simulateLoading(container, progress);
            } else {
                plus.nativeUI.closeWaiting();
                return;
            }
        }, Math.random() * 200 + 200);
    };

    owner.saveQrcodeUrlAndroid = function(url) {
        localStorage.setItem("qrcode-url-android", url);
    };
    owner.getQrcodeUrlAndroid = function() {
        return localStorage.getItem("qrcode-url-android");
    };

    owner.saveQrcodeUrlIos = function(url) {
        localStorage.setItem("qrcode-url-ios", url);
    };
    owner.getQrcodeUrlIos = function() {
        return localStorage.getItem("qrcode-url-ios");
    };

}(mui, window.updateInfo = {}));