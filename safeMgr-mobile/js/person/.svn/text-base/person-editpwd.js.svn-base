mui.init();

var localData = new LocalData();
var adminServer = new AdminServer();

mui.plusReady(function() {
    plus.screen.lockOrientation("portrait-primary");

    document.getElementById('confirmModify').addEventListener('tap', function() {
        if(!Network.isConnected()) {
            mui.toast("没有连上网络!");
            return;
        }

        console.log("modify password");
        var savePassword = localData.getPwd();
        var oldPassword = document.getElementById('oldPassword').value;
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        //      console.log("savePassword=" + savePassword + " oldPassword=" + oldPassword);
        //      console.log("newPassword=" + newPassword + " confirmPassword=" + confirmPassword);
        if(savePassword != oldPassword) {
            mui.alert("当前密码输入有误，请重新输入!");
            // TODO 清空
            return;
        }
        if(newPassword == null || newPassword == "" || confirmPassword == null || confirmPassword == "") {
            mui.alert("新密码不能为空，请重新输入!");
            return;
        }
        if(newPassword != confirmPassword) {
            mui.alert("两次输入新密码不一致，请重新输入!");
            return;
        }

        var idArray = new Array("name", "pwd");
        var valueArray = new Array();
        var name = localData.getName();
        valueArray.push(name, newPassword);
        var jsonStr = JsonOperate.singleJsonStr(idArray, valueArray);
        plus.nativeUI.showWaiting("正在请求，请稍候");
        var promise = adminServer.updatePassWord(jsonStr);
        promise.done(function(data) {
            // 保存新密码
            localData.savePwd(newPassword);
            mui.alert("修改密码成功");
            // 关闭修改密码界面
            var curr = plus.webview.currentWebview();
            curr.close();
            plus.webview.open('person-safe.html');
        });
        promise.fail(function(data) {
            var code = data.code;
            var result = data.result;
            ResultUtils.handleCommonMsg(code, result);
        });
        promise.always(function() {
            plus.nativeUI.closeWaiting();
        });
    }, false);

});