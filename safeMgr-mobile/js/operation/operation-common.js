(function($, owner) {

    acommon.createHtml = function(result, flag) {
        var ret = result;
        var total = parseInt(ret.data.length);
        var html = "";
        var listHtml = "";
        for(var i = 0; i < total; i++) {
            if(flag == "mbzrs") {
                html += BusinessHtmlUtils.generateMbzrsHtml(i, ret.data[i]);
            } else if(flag == "mbkh") {
                html += BusinessHtmlUtils.generateMbkhHtml(i, ret.data[i]);
            } else if(flag == "zytz") {
                html += BusinessHtmlUtils.generateZytzHtml(i, ret.data[i]);
            } else if(flag == "spjl") {
                html += BusinessHtmlUtils.generateSpjlHtml(i, ret.data[i]);
            } else if(flag == "gbdb") {
                html += BusinessHtmlUtils.generateGbdbHtml(i, ret.data[i]);
            } else if(flag == "gzjh") {
                html += BusinessHtmlUtils.generateGzjhHtml(i, ret.data[i]);
            } else if(flag == "dqkh") {
                html += BusinessHtmlUtils.generateDqkhHtml(i, ret.data[i]);
            } else if(flag == "awhjl") {
                html += BusinessHtmlUtils.generateAwhjlHtml(i, ret.data[i]);
            } else if(flag == "zdgc") {
                html += BusinessHtmlUtils.generateZdgcHtml(i, ret.data[i]);
            } else if(flag == "pxjh") {
                html += BusinessHtmlUtils.generatePxjhHtml(i, ret.data[i]);
            } else if(flag == "yajh") {
                html += BusinessHtmlUtils.generateYajhHtml(i, ret.data[i]);
            } else if(flag == "jcjh") {
                html += BusinessHtmlUtils.generateJcjhHtml(i, ret.data[i]);
            } else if(flag == "bztz") {
                html += BusinessHtmlUtils.generateBztzHtml(i, ret.data[i]);
            } else if(flag == "pxjy") {
                html += BusinessHtmlUtils.generatePxjyHtml(i, ret.data[i]);
            } else if(flag == "sbqd") {
                html += BusinessHtmlUtils.generateSbqdHtml(i, ret.data[i]);
            } else if(flag == "pjwj") {
                html += BusinessHtmlUtils.generatePjwjHtml(i, ret.data[i]);
            } else if(flag == "psjl") {
                html += BusinessHtmlUtils.generatePsjlHtml(i, ret.data[i]);
            } else if(flag == "fxqd") {
                html += BusinessHtmlUtils.generateFxqdHtml(i, ret.data[i]);
            } else if(flag == "jwxjh") {
                html += BusinessHtmlUtils.generateJwxjhHtml(i, ret.data[i]);
            } else if(flag == "jwxfa") {
                html += BusinessHtmlUtils.generateJwxfaHtml(i, ret.data[i]);
            } else if(flag == "aqpxjh") {
                html += BusinessHtmlUtils.generateAqpxjhHtml(i, ret.data[i]);
            } else if(flag == "aqpxda") {
                html += BusinessHtmlUtils.generateAqpxdaHtml(i, ret.data[i]);
            } else if(flag == "aqrytz") {
                html += BusinessHtmlUtils.generateAqrytzHtml(i, ret.data[i]);
            } else if(flag == "tzrytz") {
                html += BusinessHtmlUtils.generateTzrytzHtml(i, ret.data[i]);
            } else if(flag == "zyfzjh") {
                html += BusinessHtmlUtils.generateZyfzjhHtml(i, ret.data[i]);
            } else if(flag == "zywsda") {
                html += BusinessHtmlUtils.generateZywsdaHtml(i, ret.data[i]);
            } else if(flag == "jkda") {
                html += BusinessHtmlUtils.generateJkdaHtml(i, ret.data[i]);
            } else if(flag == "yhzl") {
                html += BusinessHtmlUtils.generateYhzlHtml(i, ret.data[i]);
            } else if(flag == "tzsb") {
                html += BusinessHtmlUtils.generateTzsbHtml(i, ret.data[i]);
            }
        }
        jQuery('#content').show();
        jQuery("#content").append(html);

        this.refreshEvent(flag);
    }

    acommon.refreshEvent = function(flag) {
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

    acommon.handleContent = function(content) {
        console.log("handleContent content=" + content);
        if(content === "success") {
            // jQuery("#pullrefresh").show();
            jQuery("#div-error").hide();
            return;
        }
        // 显示提示信息
        showTipMessage(content);
        // 显示提示界面
        var str = document.getElementById('content').innerText;
        console.log("str=" + str);
        console.log("str type=" + (typeof str));
        if(str === undefined || str === null || str === "") {
            showTipView(content);
        }
    };

    acommon.collapseHandlerList = function() {
        document.getElementById('li-search-panel').setAttribute('class', "mui-table-view-cell mui-collapse");
    }

    function showTipMessage(content) {
        jQuery("#content").hide();
        if(content == "no-network") {
            mui.toast("当前没有网络!");
        } else if(content == "empty") {
            mui.toast("查询没有记录!");
        }
    };

    function showTipView(content) {
        console.log("showTipView content=" + content);
        jQuery("#div-error").show();
        jQuery("#content").hide();

        if(content === "no-network") {
            document.getElementById('span-error').innerText = "当前没有网络!";
            document.getElementById('img-error').src = "../../../images/query-error.png";
        } else if(content === "error") {
            document.getElementById('span-error').innerText = "查询数据异常!";
            document.getElementById('img-error').src = "../../../images/query-error.png";
        } else if(content === "empty") {
            jQuery("#content").empty();
            document.getElementById('span-error').innerText = "查询没有记录!";
            document.getElementById('img-error').src = "../../../images/query-empty.png";
        }
    };

}(mui, window.acommon = {}));

function delnull(business) {
    for(var item in business) {
        var values = business[item];
        /*  if(values.indexOf("null") != -1) {
              values = "";
              business[item] = "";
          }*/
        var items_value = formatString(values);
        business[item] = items_value;
        // console.log(item + "：" + business[item]); //获取属性值
    }
    return business;
}