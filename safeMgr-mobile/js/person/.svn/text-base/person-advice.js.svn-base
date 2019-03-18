mui.init({
    gestureConfig: {
        tap: true, //默认为true
        doubletap: true, //默认为false
        longtap: true, //默认为false
        swipe: true, //默认为true
        drag: true, //默认为true
        hold: true, //默认为false，不监听
        release: true //默认为false，不监听
    }
});

mui('.mui-scroll-wrapper').scroll();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    var starIndex = "";

    // ------------------拍照 BEGIN------------------
    function addFeedbackInfo(data) {
        console.log("addFeedbackInfo begin");
        var result = data.result;
        var description = document.getElementById('description').value.trim(); // TODO 去掉前后空格
        var contact = document.getElementById('contact').value;

        var jsonObj = new Object();
        jsonObj["contact"] = contact;
        jsonObj["degree"] = starIndex;
        jsonObj["description"] = description;

        var jsonStrRisk = JSON.stringify(jsonObj);

        // 图片录入
        var attachList = "";
        var serverFiles = [];
        var localFiles = [];
        serverFiles = result.data.newFileNames;
        localFiles = result.data.originFileNames;

        if(serverFiles.length > 0) {
            for(var i = 0; i < serverFiles.length; i++) {
                valueArray = new Array();
                var tmpName = localFiles[i];
                var tmpDescription = serverFiles[i];

                console.log("tmpName=" + tmpName + " tmpDescription=" + tmpDescription);
                // 图片格式有很多，后缀也不同，比如：jpg，png等，此处默认都是图片
                idArray = new Array();
                idArray.push("name", "description");
                valueArray.push(tmpName, tmpDescription);
                var tmpJsonStr = JsonOperate.singleJsonStr(idArray, valueArray);
                attachList += tmpJsonStr;

                if(i < serverFiles.length - 1) {
                    attachList += ",";
                }
            }
        }
        attachList = "[" + attachList + "]";

        var jsonStr = "{\"feedBack\":" + jsonStrRisk + ",\"attachments\":" + attachList + "}";
        var promise = workflow.addFeedback(jsonStr);
        return promise;
    }
    // ------------------拍照 END------------------

    // 是否允许上报
    function isPermitReport() {
        var description = document.getElementById('description').value;
        // 如果用户反馈的描述、图片、声音都没有，则禁止上报
        var imageFiles = CameraUtils.getImageFiles();
        if((description == null || description.trim() == "") && imageFiles.length == 0) {
            return false;
        } else {
            return true;
        }
    }

    //上传图片
    function uploadFiles() {
        console.log("uploadFiles begin");
        var dtd = jQuery.Deferred();
        var uploader = UploadUtils.createUpload(function(code, result) {
            if(code == 0 &&
                result != null && result != "" &&
                result.hasOwnProperty("status") && result.status == "000000") {
                // 文件上传成功
                dtd.resolve({
                    code: code,
                    result: result
                });
            } else {
                // 文件上传失败
                dtd.reject({
                    code: code,
                    result: result
                });
            }
        });

        // 添加上传图片文件
        var imageFiles = CameraUtils.getImageFiles();
        mui.each(imageFiles, function(index, element) {
            var f = imageFiles[index];
            console.log("addFile=" + JSON.stringify(f));
            uploader.addFile(f.path, {
                // key: f.name // 文件键名
            });
        });

        // 开始上传任务
        uploader.start();
        return dtd.promise();
    }

    //提交
    document.getElementById('submit').addEventListener('tap', function(event) {
        var contact = document.getElementById('contact');

        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }

        if((contact.value != '' && contact.value.length < 11)) {
            return mui.toast('联系方式不符合规范');
        }

        if(!isPermitReport()) {
            mui.alert("请输入问题描述、图片，至少一项!");
            return;
        }

        // 上传数据
        plus.nativeUI.showWaiting("正在上传请稍后...");
        // 注意：链式调用传值
        jQuery.when(uploadFiles()).then(addFeedbackInfo)
            .done(function(data) {
                // console.log("all done");
                mui.toast("提交成功");
                mui.back();
            })
            .fail(function(data) {
                console.log("fail=" + data);
                var code = data.code;
                var result = data.result;
                ResultUtils.handleCommonMsg(code, result);
            })
            .always(function() {
                plus.nativeUI.closeWaiting();
            });
    }, false);

    //应用评分
    mui('.icons').on('tap', 'i', function() {
        var index = parseInt(this.getAttribute("data-index"));
        var parent = this.parentNode;
        var children = parent.children;
        if(this.classList.contains("mui-icon-star")) {
            for(var i = 0; i < index; i++) {
                children[i].classList.remove('mui-icon-star');
                children[i].classList.add('mui-icon-star-filled');
            }
        } else {
            for(var i = index; i < 5; i++) {
                children[i].classList.add('mui-icon-star')
                children[i].classList.remove('mui-icon-star-filled')
            }
        }

        starIndex = index;
    });

    // 选择快捷输入
    mui('.mui-popover').on('tap', 'li', function(e) {
        document.getElementById("description").value = document.getElementById("description").value + " " + this.children[0].innerHTML;
        mui('.mui-popover').popover('toggle');
    });

    // 添加图片占位符
    CameraUtils.newPlaceholder();

});