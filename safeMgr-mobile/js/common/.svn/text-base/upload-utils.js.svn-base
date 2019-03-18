UploadUtils = (function() {
    var upload = {};
    
    var localData = new LocalData();

    upload.createUpload = function(callback) {
        // TODO 同步/异步
        console.log("createUpload");
        var url = Address.getBaseServerUrl() + "/upload/upload.action";
        console.log("createUpload url=" + url);
        var uploader = plus.uploader.createUpload(url, {
            method: 'POST',
            blocksize: 102400, // 上传任务每次上传的文件块大小，默认值，设置值小于等于0则表示不分块上传
            priority: 100, // 上传任务的优先级
            timeout: TIME_OUT_UPLOAD_UNIT_SECOND, // 上传任务超时时间，单位为s(秒)
            retry: 1, // 上传任务重试次数
            retryInterval: 5 // 上传任务重试间隔时间，单位为s(秒)
        }, function(upload, status) {
            console.log("upload files status=" + status);
            if(status == 200) {
                console.log("upload result=" + upload.responseText);
                // callback(0, upload.responseText);
                var result = eval('(' + upload.responseText + ')');
                if(result == null || result == "" ||
                    !result.hasOwnProperty("status") || result.status != "000000") {
                    console.log("upload response is empty");
                    callback(requestConstants.FAIL, result);
                    return;
                }
                callback(requestConstants.OK, result);
            } else {
                callback(-2, status);
            }
        });
        // TODO 文档上，setRequestHeader，不支持设置Cookie
        uploader.setRequestHeader('Cookie', "easyWeb-sso_token=" + localData.getToken());
        return uploader;
    };

    return upload;

})();