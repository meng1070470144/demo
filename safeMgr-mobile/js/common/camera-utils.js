CameraUtils = (function() {

    // TODO UI和业务分离
    var owner = {
        imageList: document.getElementById('image-list'),
        imageFiles: [], // 上传图片文件列表
        index: 1,
        size: null, // 上传文件总大小
        imageIndexIdNum: 0,
    };

    var addImageFile = function(path) {
        owner.imageFiles.push({
            name: "images" + owner.index,
            path: path,
            id: "img-" + owner.index
        });
        owner.index++;
    };

    var printFileList = function() {
        console.log("printFileList");
        for(var i = 0; i < owner.imageFiles.length; i++) {
            var file = owner.imageFiles[i];
            console.log("file=" + JSON.stringify(file));
        }
    };

    owner.getImageFiles = function() {
        return owner.imageFiles;
    }

    /**
     * 初始化图片域占位
     */
    owner.newPlaceholder = function() {
        // TODO 分离
        var fileInputArray = [].slice.call(document.getElementById('image-list').querySelectorAll('.file'));
        if(fileInputArray &&
            fileInputArray.length > 0 &&
            fileInputArray[fileInputArray.length - 1].parentNode.classList.contains('space')) {
            return;
        };

        owner.imageIndexIdNum++;

        var placeholder = document.createElement('div');
        placeholder.setAttribute('class', 'image-item space');

        // +号，添加图片
        var up = document.createElement("div");
        up.setAttribute('class', 'image-up');

        // 红色叉号，删除按钮
        var closeButton = document.createElement('div');
        closeButton.setAttribute('class', 'image-close');
        closeButton.innerHTML = 'X';
        closeButton.id = "img-" + owner.index;
        closeButton.addEventListener('tap', function(event) {
            setTimeout(function() {
                // 从上传文件中移出该图片文件
                for(var i = 0; i < owner.imageFiles.length; i++) {
                    console.log("closeButton.id=" + closeButton.id + " file id=" + owner.imageFiles[i].id);
                    if(owner.imageFiles[i].id == closeButton.id) {
                        owner.imageFiles.splice(i, 1);
                    }
                }
                // 从HTML中移出该图片缩略图
                owner.imageList.removeChild(placeholder);
                printFileList();
            }, 0);
            return false;
        }, false);

        // 点击事件
        var fileInput = document.createElement('div');
        fileInput.setAttribute('class', 'file');
        fileInput.setAttribute('id', 'image-' + owner.imageIndexIdNum);
        fileInput.addEventListener('tap', function(event) {
            var self = this;
            var index = (this.id).substr(-1);
            console.log("fileInput index=" + index);
            var btnArray = [{
                title: "拍照"
            }, {
                title: "从相册选择"
            }];
            plus.nativeUI.actionSheet({
                title: "选择照片",
                cancel: "取消",
                buttons: btnArray
            }, function(event) {
                var btnIndex = event.index; // 用户关闭时点击按钮的索引值
                console.log("actionSheet btnIndex=" + btnIndex);
                switch(btnIndex) {
                    case 0:
                        {
                            // 点击其他区域，取消
                            break;
                        }
                    case 1:
                        {
                            // 拍照
                            var camera = plus.camera.getCamera();
                            camera.captureImage(function(capturedFile) {
                                console.log("camara capturedFile=" + capturedFile + " convert=" + plus.io.convertLocalFileSystemURL(capturedFile));
                                var name = capturedFile.substr(capturedFile.lastIndexOf('/') + 1);

                                plus.zip.compressImage({
                                    src: "file://" + plus.io.convertLocalFileSystemURL(capturedFile), // 压缩转换原始图片的路径
                                    dst: '_doc/' + name, // 压缩转换目标图片的路径
                                    overwrite: true, // 覆盖生成新文件
                                    quality: 50 // 压缩图片的质量
                                }, function(zip) {
                                    // 
                                    owner.size += zip.size
                                    console.log("filesize=" + zip.size + ",totalsize=" + owner.size + " zip.target=" + zip.target);
                                    if(owner.size > (10 * 1024 * 1024)) {
                                        mui.toast('文件超大,请重新选择~');
                                        return;
                                    }
                                    if(!self.parentNode.classList.contains('space')) {
                                        // 已有图片，只需要替换原有的图片，不需要添加新的加号占位符
                                        console.log("splice index=" + index);
                                        // TODO
                                        owner.imageFiles.splice(index - 1, 1, {
                                            name: "images" + index,
                                            path: zip.target,
                                            id: "img-" + index
                                        });
                                    } else {
                                        placeholder.classList.remove('space');
                                        addImageFile(zip.target);
                                        // 后面添加新的加号占位符
                                        owner.newPlaceholder();
                                    }
                                    // 当前加号占位符，替换为压缩后的图片
                                    up.classList.remove('image-up');
                                    placeholder.style.backgroundImage = 'url(' + zip.target + ')';
                                    console.log("zip.target=" + zip.target);
                                    printFileList();
                                }, function(error) {
                                    console.error("压缩失败 error=" + error + " code=" + error.code + " message=" + error.message);
                                    mui.toast("压缩失败 error=" + error);
                                });
                            }, function(error) {
                                console.error("拍照失败 error=" + error + " code=" + error.code + " message=" + error.message);
                                mui.toast("拍照失败 error=" + error.message);
                            });
                            break;
                        }
                    case 2:
                        {
                            // 从相册选择图片
                            plus.gallery.pick(function(file) {
                                console.log("pick file=" + file);
                                var name = file.substr(file.lastIndexOf('/') + 1);
                                console.log("pick file name=" + name);

                                plus.zip.compressImage({
                                    src: file,
                                    dst: '_doc/' + name,
                                    overwrite: true,
                                    quality: 50
                                }, function(zip) {
                                    owner.size += zip.size
                                    console.log("filesize=" + zip.size + ",totalsize=" + owner.size);
                                    if(owner.size > (10 * 1024 * 1024)) {
                                        mui.toast('文件超大,请重新选择~');
                                        return;
                                    }
                                    if(!self.parentNode.classList.contains('space')) {
                                        // 已有图片，只需要替换原有的图片，不需要添加新的加号占位符
                                        console.log("splice index=" + index);
                                        // TODO
                                        owner.imageFiles.splice(index - 1, 1, {
                                            name: "images" + index,
                                            path: zip.target,
                                            id: "img-" + index
                                        });
                                    } else {
                                        // 后面添加新的加号占位符
                                        placeholder.classList.remove('space');
                                        addImageFile(zip.target);
                                        owner.newPlaceholder();
                                    }
                                    // 当前加号占位符，替换为压缩后的图片
                                    up.classList.remove('image-up');
                                    placeholder.style.backgroundImage = 'url(' + zip.target + ')';
                                    console.log(zip.target);
                                }, function(error) {
                                    console.error("compress error code=" + error.code + " message=" + error.message);
                                    mui.toast("压缩失败 code=" + error.code + " message=" + error.message);
                                });

                            }, function(error) {
                                console.error("pick error=" + error + " code=" + error.code + " message=" + error.message);
                                mui.toast("从相册选取图片失败 error=" + error + " message=" + error.message);
                            }, {
                                animation: true, // 是否显示系统相册文件选择界面的动画
                                filter: "image" // 相册中选择文件类型过滤器
                            });
                            break;
                        }
                }
            });
        }, false);

        placeholder.appendChild(closeButton);
        placeholder.appendChild(up);
        placeholder.appendChild(fileInput);
        owner.imageList.appendChild(placeholder);

        // console.log("imageList=" + document.getElementById('image-list').innerHTML);
    };

    return owner;

})();