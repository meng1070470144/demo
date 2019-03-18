mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            auto: true,
            callback: pulldownRefresh
        }
    }
});

function pulldownRefresh() {
    if(!Network.isConnected()) {
        mui.toast("没有连上网络!");
        mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        return;
    }

    jQuery.when()
        .done(function(data) {
            console.log("all done");
            mui.toast("刷新成功");
        })
        .fail(function(data) {
            mui.toast("刷新失败");
        })
        .always(function() {
            console.log("always end pull down to refresh");
            mui('#pullrefresh').pullRefresh().endPulldownToRefresh(false);
        });
}

mui.plusReady(function() {
    var self = plus.webview.currentWebview();

});