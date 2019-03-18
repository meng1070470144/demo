DownloadUtils = (function() {
    var download = {};

    var localData = new LocalData();

    download.downloadFile = function(url, filePath, callback) {
        // TODO 同步/异步
        console.log("downloadFile url=" + url);
        var dtask = plus.downloader.createDownload(url, {
            method: "GET",
            filename: "_downloads/" + filePath, // filePath 保存路径
            priority: 100, // 优先级
            timeout: TIME_OUT_DOWNLOAD_UNIT_SECOND, // 超时时间
            retry: 1, // 重试次数
            retryInterval: 10 // 重试间隔时间
        }, function(download, status) {
            // 下载完成 
            // download: 下载任务对象
            // status: HTTP传输协议状态码，如果未获取传输状态则其值则为0，如下载成功其值通常为200
            // TODO 201: 请求已经被实现，而且有一个新的资源已经依据请求的需要而建立，且其 URI已经随Location头信息返回
            if(status == 200 || status == 201) {
                // console.log("getAllResponseHeaders=" + dtask.getAllResponseHeaders()); // 获取下载请求响应头数据
                console.log("Download success=" + download.filename);
                // TODO
                callback(0, download.filename);
            } else {
                console.error("Download failed=" + status);
                callback(-1);
            }
        });
        dtask.setRequestHeader("Cookie", "easyWeb-sso_token=" + localData.getToken());
        dtask.addEventListener("statechanged", function onStateChanged(download, status) {
            // console.log("onStateChanged state=" + download.state + " status=" + status);
            if(download.state == 4 && status == 200) {
                // 下载完成 
                console.log("Download success=" + download.getFileName());
            }
        }, false);
        dtask.start();
    };

    return download;

})();