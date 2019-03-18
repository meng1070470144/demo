mui.init();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    /*数据条件*/
    queryBusinessSearch = function(flag, isClearList) {
        // 查询隐患列表
        if(!Network.isConnected()) {
            acommon.handleContent("no-network");
            return;
        }

        var searchName = document.getElementById('name-value').value;

        var jsonObj = new Object();
        if(searchName != null && searchName != "") {
            jsonObj["name"] = searchName;
        }

        var jsonStr = JSON.stringify(jsonObj);
        console.log("jsonStr=" + jsonStr);
        // 发送请求
        plus.nativeUI.showWaiting("获取数据，请等待...");
        var promise = business.getInfoForMbkh(jsonStr);
        promise.done(function(data) {
            console.log("getInfo done");
            var result = data.result;

            console.log("isClearList:" + isClearList);
            if(isClearList) {
                jQuery("#content").empty();
            }

            if(result.data.length <= 0) {
                acommon.handleContent("empty");
                return;
            }

            acommon.createHtml(result, flag);
            acommon.handleContent("success");
        });
        promise.fail(function(data) {
            var code = data.code;
            var result = data.result;
            ResultUtils.handleCommonMsg(code, result);
        })
        promise.always(function() {
            plus.nativeUI.closeWaiting();
        });
        return promise;
    };

    /**
     * 安全目标考核
     */
    queryBusinessSearch("mbkh", true);

    // 查询
    document.getElementById('confirm').addEventListener('tap', function() {
        acommon.collapseHandlerList(); //收缩查询条件
        queryBusinessSearch("mbkh", true);
    }, false);

    // 刷新
    document.getElementById('button-refresh').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryBusinessSearch("mbkh", true);
    }, false);

});