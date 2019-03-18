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
        var promise = business.getInfoForMbzrs(jsonStr);
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

            createHtml(result, flag);
            acommon.handleContent("success");
            refreshEvent(flag);
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

    function createHtml(result, flag) {
        var ret = result;
        var total = parseInt(ret.data.length);
        var html = "";
        var listHtml = "";
        for(var i = 0; i < total; i++) {
            html += generateMbzrsHtml(i, ret.data[i]);
        }
        jQuery('#content').show();
        jQuery("#content").append(html);
    }

    function generateMbzrsHtml(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var mbzrs = delnull(business);

        var id = mbzrs.id;
        var name = mbzrs.name;
        var fparty = mbzrs.fparty;
        var sparty = mbzrs.sparty;
        var corpName = mbzrs.corpName;
        var signTime = mbzrs.signTime;
        var createTime = mbzrs.createTime;
        var updateTime = mbzrs.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>责任书名称：";
        html += "<span>" + name + "</span> </a>";
        html += " <div class='mui-collapse-content'>";
        html += " <table id='content' border='0'  width='100%'>";
        html += " <tr> <td class='tr_name'>甲方 :</td>";
        html += " <td class='td_name'>" + fparty + "</td></tr>";
        html += " <tr> <td class='tr_name'>乙方 :</td>";
        html += " <td class='td_name'>" + sparty + "</td></tr>";
        html += " <tr> <td class='tr_name'>发布部门 :</td>";
        html += " <td class='td_name'>" + corpName + "</td></tr>";
        html += " <tr> <td class='tr_name'>执行时间:</td>";
        html += " <td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += " <tr> <td class='tr_name'>创建时间 :</td>";
        html += " <td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += " <tr> <td class='tr_name'>更新时间 :</td>";
        html += " <td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        console.log("html=" + html);

        return html;
    };

    function refreshEvent(flag) {
        jQuery("button[listItemId]").click(function() {
            var listItemId = this.getAttribute("listItemId");
            var index = this.getAttribute("index");
            console.log("parent listItemId=" + listItemId + " index=" + index);
            mui.openWindow({
                url: "../check-detail.html",
                id: '',
                extras: {
                    // 注意：不能使用id，因为id是extras中的保留key
                    listItemId: listItemId,
                    flag: flag
                },
                show: {
                    aniShow: 'pop-in'
                },
                waiting: {
                    autoShow: false
                }
            });
        });
    }

    /**
     * 目标责任书
     */
    queryBusinessSearch("mbzrs", true);

    // 查询
    document.getElementById('confirm').addEventListener('tap', function() {
        acommon.collapseHandlerList(); //收缩查询条件
        queryBusinessSearch("mbzrs", true);
    }, false);

    // 刷新
    document.getElementById('button-refresh').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryBusinessSearch("mbzrs", true);
    }, false);

});