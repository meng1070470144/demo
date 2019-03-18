mui.init();

var localData = new LocalData();
var adminServer = new AdminServer();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    // 初始化
    document.getElementById('span-realname').innerText = localData.getRealName();
    document.getElementById('span-corp').innerText = localData.getCorpName();
    document.getElementById('span-dept').innerText = localData.getDeptName();
    document.getElementById('span-roles').innerText = localData.getRoles();
    var tel = formatString(localData.getTel());
    document.getElementById('span-tel').innerText = tel;

    document.getElementById("head-img").addEventListener('tap', function(e) {
        e.stopPropagation();
    });

    mui.back = function() {
        console.log("person account page back");
        // 触发主界面刷新
        var mainPage = plus.webview.getWebviewById('main.html');
        mui.fire(mainPage, 'refresh-head-image', {});
        mui.currentWebview.close();
    };

    //更换头像
    mui(".mui-table-view-cell").on("tap", "#head", function(e) {
        if(mui.os.plus) {
            var a = [{
                title: "拍照"
            }, {
                title: "从手机相册选择"
            }];
            plus.nativeUI.actionSheet({
                title: "修改头像",
                cancel: "取消",
                buttons: a
            }, function(b) {
                switch(b.index) {
                    case 0:
                        break;
                    case 1:
                        getImage();
                        break;
                    case 2:
                        galleryImg();
                        break;
                    default:
                        break
                }
            })
        }
    });

    //拍照
    function getImage() {
        var c = plus.camera.getCamera();
        c.captureImage(function(e) {
            plus.io.resolveLocalFileSystemURL(e, function(entry) {
                var s = entry.toLocalURL() + "?version=" + new Date().getTime();
                personlist.saveImgtx(s);
                document.getElementById("head-img").src = s;
                //变更大图预览的src
                //目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
            }, function(error) {
                console.error("读取拍照文件错误：" + error.message);
            });
        }, function(error) {
            console.error("error" + error);
        }, {
            filename: "_doc/head.jpg"
        })
    }

    //从手机相册中取
    function galleryImg() {
        plus.gallery.pick(function(a) {
            plus.io.resolveLocalFileSystemURL(a, function(entry) {
                plus.io.resolveLocalFileSystemURL("_doc/", function(root) {
                    root.getFile("head.jpg", {}, function(file) {
                        //文件已存在
                        file.remove(function() {
                            console.log("file remove success");
                            entry.copyTo(root, 'head.jpg', function(e) {
                                    var e = e.fullPath + "?version=" + new Date().getTime();
                                    personlist.saveImgtx(e);
                                    document.getElementById("head-img").src = e;
                                    //变更大图预览的src
                                    //目前仅有一张图片，暂时如此处理，后续需要通过标准组件实现
                                },
                                function(error) {
                                    console.error('copy image fail:' + error.message);
                                });
                        }, function(error) {
                            console.error("delete image fail:" + error.message);
                        });
                    }, function() {
                        //文件不存在
                        entry.copyTo(root, 'head.jpg', function(e) {
                                var path = e.fullPath + "?version=" + new Date().getTime();
                                personlist.saveImgtx(path);
                                document.getElementById("head-img").src = path;
                            },
                            function(error) {
                                console.error('copy image fail:' + error.message);
                            });
                    });
                }, function(error) {
                    console.error("get _www folder fail");
                })
            }, function(error) {
                console.error("读取拍照文件错误：" + error.message);
            });
        }, function(a) {}, {
            filter: "image"
        })
    };

    //初始化头像
    function defaultImg() {
        if(mui.os.plus) {
            plus.io.resolveLocalFileSystemURL("_doc/head.jpg", function(entry) {
                var s = entry.fullPath + "?version=" + new Date().getTime();
                // alert("初始化加载:" + personlist.getImgtx());
                if(personlist.getImgtx() == null) {
                    document.getElementById("head-img").src = '../../images/main-user.png';
                } else {
                    document.getElementById("head-img").src = s;
                    personlist.saveImgtx(s);
                }
            }, function(e) {
                document.getElementById("head-img").src = '../../images/main-user.png';
                personlist.saveImgtx("../images/main-user.png");
            })
        } else {
            document.getElementById("head-img").src = '../../images/main-user.png';
            personlist.saveImgtx("../images/main-user.png");
        }
    }

    if(mui.os.stream) {
        document.getElementById("check_update").display = "none";
    }

    setTimeout(function() {
        defaultImg();
    }, 500);

});