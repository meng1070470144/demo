
(function($, owner) {


    /**
     * 保存imgsrc
     */
    owner.saveImgtx = function(src) {
       // alert("src:"+src);
        localStorage.setItem("imgsrc", src);
    };

    /**
     * 获取imgsrc
     **/
    owner.getImgtx = function() {
        return localStorage.getItem("imgsrc");
    };

}(mui, window.personlist = {}));