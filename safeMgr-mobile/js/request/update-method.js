function UpdateMethod() {

    // 版本更新
    this.queryVersionByPhone = function(jsonStr) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/rest/version/queryVersionByPhone.action";
        Network.ajaxOperatePost(actionName, jsonStr, function(code, result) {
            console.log("updateInfo result=" + JSON.stringify(result));
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                console.error("getRiskCountByReportType response is empty");
                dtd.reject({
                    code: requestConstants.FAIL,
                    result: result
                });
                return;
            }
            dtd.resolve({
                code: requestConstants.OK,
                result: result
            });
        });
        return dtd.promise();
    };

}