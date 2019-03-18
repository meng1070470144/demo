function RestServer() {

    this.addFeedback = function(jsonStr) {
        var dtd = jQuery.Deferred();
        var actionName = Address.getBaseServerUrl() + "/rest/feedBack/addFeedBack.action";
        Network.ajaxOperatePost(actionName, jsonStr, function(code, result) {
            console.log("addFeedback result=" + JSON.stringify(result));
            if(code == requestConstants.ERROR) {
                dtd.reject({
                    code: requestConstants.ERROR,
                    result: result
                });
                return;
            }
            if(result == null || result == "" ||
                !result.hasOwnProperty("status") || result.status != "000000") {
                console.error("addFeedback response is empty");
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