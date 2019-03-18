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
        //      var url = Address.getBaseServerUrl();
        //      var actionName = url + "/rest/material/queryByPhone.action";
        // 发送请求
        plus.nativeUI.showWaiting("获取数据，请等待...");
        var promise = business.getInfoForZytz(jsonStr);
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

    //跳转详情页面
    //  nexthtml = function(flag) {
    //      mui("#content").on("tap", "button", function() {
    //          //获取点击tr的id
    //          var id_value = this.getAttribute("id");
    //          console.log("id_value:" + id_value);
    //          console.log("id_value flag:" + flag);
    //
    //          //打开详情页面
    //          mui.openWindow({
    //              url: 'operate-detail.html',
    //              extras: {
    //                  //自定义扩展参数，可以用来处理页面间传值
    //                  siteId: id_value,
    //                  flags: flag
    //              },
    //          })
    //      });
    //
    //  }

    /**
     * 安全生产责任制定期考核
     */
    queryBusinessSearch("zytz", true);

    // 查询
    document.getElementById('confirm').addEventListener('tap', function() {
        acommon.collapseHandlerList(); //收缩查询条件
        queryBusinessSearch("zytz", true);
    }, false);

    // 刷新
    document.getElementById('button-refresh').addEventListener('tap', function() {
        acommon.collapseHandlerList();
        queryBusinessSearch("zytz", true);
    }, false);

    //跳转地图
    //  document.getElementById("map").addEventListener('tap', function(event) {
    //      mui.openWindow({
    //          url: '../../page/operation-control/operation-map.html',
    //          id: '',
    //          extras: {},
    //          preload: false,
    //          show: {
    //              aniShow: 'pop-in'
    //          },
    //          waiting: {
    //              autoShow: true,
    //              title: '正在加载....'
    //          }
    //      });
    //  });

});