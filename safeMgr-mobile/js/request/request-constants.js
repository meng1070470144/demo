(function($, owner) {

    // TODO
    owner.OK = 0;
    owner.SUCCESS = 0; // 请求成功
    owner.FAIL = -1; // 业务失败，在success回调函数中
    owner.ERROR = -2; // 请求失败，在error回调函数中

}(mui, window.requestConstants = {}));