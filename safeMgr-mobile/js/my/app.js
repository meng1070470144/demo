(function($, owner) {
    /**
     * 获取应用本地配置
     **/
    owner.setSettings = function(settings) {
        settings = settings || {};
        localStorage.setItem('$settings', JSON.stringify(settings));
    }

    /**
     * 设置应用本地配置
     **/
    owner.getSettings = function() {
        var settingsText = localStorage.getItem('$settings') || "{}";
        return JSON.parse(settingsText);
    }

}(mui, window.app = {}));