Network = (function() {
    var net = {};

    var localData = new LocalData();

    net.isConnected = function() {
        var network = true;
        if(mui.os.plus) {
            if(plus.networkinfo.getCurrentType() == plus.networkinfo.CONNECTION_NONE) {
                network = false;
            }
        }
        return network;
    }

    net.ajaxOperateGet = function(url, callback) {
        console.log("url=" + url);
        console.log("easyWeb-sso_token=" + localData.getToken());

        mui.ajax(url, {
            async: true, // TODO false
            crossDomain: true,
            dataType: "json",
            type: "GET",
            timeout: TIME_OUT_DEFAULT_UNIT_MS,
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8',
                'Cookie': "easyWeb-sso_token=" + localData.getToken(),
            },
            success: function(result) {
                console.log("receive result=" + JSON.stringify(result));
                callback(requestConstants.SUCCESS, result);
            },
            error: function(xhr, type, errorThrown) {
                // TODO xhr, errorThrown
                //              console.log("post error, xhr=" + JSON.stringify(xhr)); // TypeError: Converting circular structure to JSON
                console.error("url=" + url + " get error, type=" + type + " errorThrown=" + errorThrown);
                callback(requestConstants.ERROR, type);
            }
        });
    }

    net.ajaxOperatePost = function(url, data, callback) {
        console.log("url=" + url);
        console.log("data=" + data);
        console.log("easyWeb-sso_token=" + localData.getToken());

        mui.ajax(url, {
            async: true,
            crossDomain: true,
            data: data,
            dataType: "json",
            type: "POST",
            timeout: TIME_OUT_DEFAULT_UNIT_MS,
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8',
                'Cookie': "easyWeb-sso_token=" + localData.getToken(),
            },
            success: function(result) {
                console.log("receive result=" + JSON.stringify(result));
                callback(requestConstants.SUCCESS, result);
            },
            error: function(xhr, type, errorThrown) {
                // TODO xhr, errorThrown
                //              console.log("post error, xhr=" + JSON.stringify(xhr)); // TypeError: Converting circular structure to JSON
                console.error("url=" + url + " post error, type=" + type + " errorThrown=" + errorThrown);
                callback(requestConstants.ERROR, type);
            }
        });

    }

    return net;
})();