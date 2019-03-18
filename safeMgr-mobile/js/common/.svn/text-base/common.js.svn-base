String.prototype.startWith = function(str) {
    var reg = new RegExp("^" + str);
    return reg.test(this);
}

String.prototype.endWith = function(str) {
    var reg = new RegExp(str + "$");
    return reg.test(this);
}

/**
 * 字符串占位
 * 使用方法："name={0}, age={1}".format("Tom", "28");
 */
String.prototype.format = function() {
    if(arguments.length == 0) {
        return this;
    }

    var param = arguments[0];
    var s = this;
    if(typeof(param) == 'object') {
        for(var key in param) {
            s = s.replace(new RegExp("\\{" + key + "\\}", "g"), param[key]);
        }
    } else {
        for(var i = 0; i < arguments.length; i++) {
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        }
    }
    return s;
}

if(typeof String.prototype.trim != 'function') {
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    };
}

Array.prototype.unique = function(arr) {
    var result = [],
        hash = {};
    for(var i = 0, elem;
        (elem = arr[i]) != null; i++) {
        if(!hash[elem]) {
            result.push(elem);
            hash[elem] = true;
        }
    }
    return result;
}
/*
 * MAP对象，实现MAP功能
 *
 * 接口：
 * size()     获取MAP元素个数
 * isEmpty()    判断MAP是否为空
 * clear()     删除MAP所有元素
 * put(key, value)   向MAP中增加元素（key, value) 
 * remove(key)    删除指定KEY的元素，成功返回True，失败返回False
 * get(key)    获取指定KEY的元素值VALUE，失败返回NULL
 * element(index)   获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
 * containsKey(key)  判断MAP中是否含有指定KEY的元素
 * containsValue(value) 判断MAP中是否含有指定VALUE的元素
 * values()    获取MAP中所有VALUE的数组（ARRAY）
 * keys()     获取MAP中所有KEY的数组（ARRAY）
 *
 * 例子：
 * var map = new Map();
 *
 * map.put("key", "value");
 * var val = map.get("key")
 * ……
 *
 */

Address = (function() {
    var ret = {};
    ret.PROTOCOL = "http";

    //  ret.BASE_URL = "60.171.114.164";

    ret.SERVER_DOMAIN = "192.168.1.102";
    ret.SERVER_PORT = "8084";

    // REST服务器根地址
    ret.BASE_SERVER_URL = ret.PROTOCOL + "://" + ret.SERVER_DOMAIN + ":" + ret.SERVER_PORT;

    ret.setProtocol = function(value) {
        localStorage.setItem("protocol", value);
    };
    ret.getProtocol = function() {
        var value = localStorage.getItem("protocol");
        return value === undefined || value == null ? ret.PROTOCOL : value;
    };

    ret.setServerDomain = function(value) {
        localStorage.setItem("server-domain", value);
    };
    ret.getServerDomain = function() {
        var value = localStorage.getItem("server-domain");
        return value === undefined || value == null ? ret.SERVER_DOMAIN : value;
    };

    ret.setServerPort = function(value) {
        localStorage.setItem("server-port", value);
    };
    ret.getServerPort = function() {
        var value = localStorage.getItem("server-port");
        return value === undefined || value == null ? ret.SERVER_PORT : value;
    };

    ret.getBaseServerUrl = function() {
        var protocol = ret.getProtocol();
        var domain = ret.getServerDomain();
        var port = ret.getServerPort();
        return protocol + "://" + domain + ":" + port;
    };

    return ret;
})();

function Map() {
    this.elements = new Array();

    //获取MAP元素个数
    this.size = function() {
        return this.elements.length;
    }

    //判断MAP是否为空
    this.isEmpty = function() {
        return(this.elements.length < 1);
    }

    //删除MAP所有元素
    this.clear = function() {
        this.elements = new Array();
    }

    //向MAP中增加元素（key, value) 
    this.put = function(_key, _value) {
        this.elements.push({
            key: _key,
            value: _value
        });
    }

    //删除指定KEY的元素，成功返回True，失败返回False
    this.remove = function(_key) {
        var bln = false;
        try {
            for(i = 0; i < this.elements.length; i++) {
                if(this.elements[i].key == _key) {
                    this.elements.splice(i, 1);
                    return true;
                }
            }
        } catch(e) {
            bln = false;
        }
        return bln;
    }

    //获取指定KEY的元素值VALUE，失败返回NULL
    this.get = function(_key) {
        try {
            for(i = 0; i < this.elements.length; i++) {
                if(this.elements[i].key == _key) {
                    return this.elements[i].value;
                }
            }
        } catch(e) {
            return null;
        }
    }

    //获取指定索引的元素（使用element.key，element.value获取KEY和VALUE），失败返回NULL
    this.element = function(_index) {
        if(_index < 0 || _index >= this.elements.length) {
            return null;
        }
        return this.elements[_index];
    }

    //判断MAP中是否含有指定KEY的元素
    this.containsKey = function(_key) {
        var bln = false;
        try {
            for(i = 0; i < this.elements.length; i++) {
                if(this.elements[i].key == _key) {
                    bln = true;
                }
            }
        } catch(e) {
            bln = false;
        }
        return bln;
    }

    //判断MAP中是否含有指定VALUE的元素
    this.containsValue = function(_value) {
        var bln = false;
        try {
            for(i = 0; i < this.elements.length; i++) {
                if(this.elements[i].value == _value) {
                    bln = true;
                }
            }
        } catch(e) {
            bln = false;
        }
        return bln;
    }

    //获取MAP中所有VALUE的数组（ARRAY）
    this.values = function() {
        var arr = new Array();
        for(i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].value);
        }
        return arr;
    }

    //获取MAP中所有KEY的数组（ARRAY）
    this.keys = function() {
        var arr = new Array();
        for(i = 0; i < this.elements.length; i++) {
            arr.push(this.elements[i].key);
        }
        return arr;
    }

}

/* 
 *  方法:Array.remove(dx) 通过遍历,重构数组 
 *  功能:删除数组元素. 
 *  参数:dx删除元素的下标. 
 */
Array.prototype.remove = function(dx) {
    if(isNaN(dx) || dx > this.length) {
        return false;
    }
    for(var i = 0, n = 0; i < this.length; i++) {
        if(this[i] != this[dx]) {
            this[n++] = this[i];
        }
    }
    this.length -= 1;
}

//公共操作类
var Common = (function() {
    var c = {};

    //获取对象数目
    c.getObjCount = function(obj) {
        var count = 0;
        if(!JudgeObj.isArray(obj) && JudgeObj.isObject(obj)) {
            for(i in obj) {
                if(obj[i] != null && typeof(obj[i]) != "undefined")
                    count++;
            }
        }
        return count;
    };

    //判断浏览器(IE8.0及以上版本，或者其他四类浏览器)
    c.checkOs = function() {
        var os = Common.getOs();
        var ret = "OPERATE_SUCCESS_INFO";
        if(os != "Firefox") {

            var version = navigator.appVersion.split(";");
            version = version[1].replace(/[ ]/g, "");
            if(version == "MSIE6.0" || version == "MSIE7.0") {
                ret = "OS_OLDVER_ERROR";
            }
        }
        return ret;
    };
    //判断浏览器
    c.getOs = function() {
        var OsObject = "";
        if(navigator.userAgent.indexOf("MSIE") > 0) {
            return "MSIE";
        }
        if(isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
            return "Firefox";
        }
        if(isSafari = navigator.userAgent.indexOf("Safari") > 0) {
            return "Safari";
        }
        if(isCamino = navigator.userAgent.indexOf("Camino") > 0) {
            return "Camino";
        }
        if(isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
            return "Gecko";
        }
        return "";

    }
    //判断浏览器是否支持localStorage
    c.checkStorage = function() {
        var ret = "OPERATE_SUCCESS_INFO";
        if(!window.localStorage)
            ret = "OS_LOCALSTORAGE_ERROR";
        return ret;
    };

    //获取客户端当前时间 格式1980-09-09 19:09
    c.getCurTime = function(d) {
        var ret = d.getFullYear() + "-"
        ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-"
        ret += ("00" + d.getDate()).slice(-2) + " "
        ret += ("00" + d.getHours()).slice(-2) + ":"
        ret += ("00" + d.getMinutes()).slice(-2) + ":"
        ret += ("00" + d.getSeconds()).slice(-2);
        return ret;
    };

    c.getCurTimeStr = function() {
        var d = new Date();
        var ret = d.getFullYear() + "-";
        ret += ("00" + (d.getMonth() + 1)).slice(-2) + "-";
        ret += ("00" + d.getDate()).slice(-2) + " ";
        ret += ("00" + d.getHours()).slice(-2) + ":";
        ret += ("00" + d.getMinutes()).slice(-2) + ":";
        ret += ("00" + d.getSeconds()).slice(-2) + ":";
        ret += ("00" + d.getMilliseconds()).slice(-3);
        return ret;
    };

    /**
     * 计算两日期时间差
     * @param   interval 计算类型：D是按照天、H是按照小时、M是按照分钟、S是按照秒、T是按照毫秒
     * @param  date1 起始日期  格式为年月格式 为2012-06-20
     * @param  date2 结束日期 格式为年月格式 为2012-06-20
     * @return 
     */
    c.countTimeLength = function(date1, date2, interval) {
        var objInterval = {
            'D': 1000 * 60 * 60 * 24,
            'H': 1000 * 60 * 60,
            'M': 1000 * 60,
            'S': 1000,
            'T': 1
        };
        interval = StrOperate.makeStr(interval, "S");
        interval = interval.toUpperCase();
        var dt1 = Date.parse(date1.replace(/-/g, "/"));
        var dt2 = Date.parse(date2.replace(/-/g, "/"));
        try {
            return((dt2 - dt1) / objInterval[interval]).toFixed(2); //保留两位小数点
        } catch(e) {
            return e.message;
        }
    };

    /*
     * 计算倒计时
     * @param {Object} count 倒计时秒数
     * timeObj 倒计时标签对象
     */
    c.timerCount = function(count, timeObj) {
        window.setInterval(function() {
            var day = 0,
                hour = 0,
                minute = 0,
                second = 0; //时间默认值		
            if(count > 0) {
                day = Math.floor(count / (60 * 60 * 24));
                hour = Math.floor(count / (60 * 60)) - (day * 24);
                minute = Math.floor(count / 60) - (day * 24 * 60) - (hour * 60);
                second = Math.floor(count) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if(minute <= 9) minute = '0' + minute;
            if(second <= 9) second = '0' + second;
            var html = "";
            timeObj.empty();
            html += day + '天' + hour + '时' + minute + '分' + second + '秒';
            timeObj.append(html);
            count--;
        }, 1000);
    };

    //显示服务器时间
    c.dispServerTime = function(curTimeStr, timeObj) {
        var str = curTimeStr.replace(/-/g, "/");
        var t = new Date(str);
        var hour = t.getHours(); //获取当前小时数(0-23)
        var minute = t.getMinutes(); //获取当前分钟数(0-59)
        var second = t.getSeconds(); //获取当前秒数(0-59)
        window.setInterval(function() {
            if(second == 60) {
                second = 0;
                minute++;
            }
            if(minute == 60) {
                minute = 0;
                hour++;
            }
            if(hour == 24) {
                hour = 0;
                day++;
            }

            //if (minute <= 9) minute = '0' + minute;
            if(second <= 9) second = '0' + second;
            var html = "";
            timeObj.empty();
            html += "<span>服务器时间：";
            html += hour + '时' + minute + '分' + second + '秒';
            timeObj.append(html);
            second++;
        }, 1000);
    };
    //获取AJAX返回MAP的数值
    c.getAjaxMapValue = function(ajaxMap, key) {
        if(typeof(ajaxMap) == "undefined")
            return null;
        var b = ajaxMap.hasOwnProperty(key);
        if(b)
            return ajaxMap[key];
        else
            return null;
    }
    return c;
})();

//js javascript 类型判断 如 判断是否为数组，判断是否为对象
var JudgeObj = (function() {
    var judge = {};
    //判断是否为数组
    judge.isArray = function(source) {
        return '[object Array]' == Object.prototype.toString.call(source);
    };
    //判断是否为分页对象
    judge.isPager = function(source) {
        var b1 = source.hasOwnProperty('total');
        var b2 = source.hasOwnProperty('rows');
        if(!b1 || !b2)
            return false;
        return JudgeObj.isArray(source.rows);
    };
    //判断是否是Result对象
    judge.isResult = function(source) {
        var b1 = source.hasOwnProperty('status');
        var b2 = source.hasOwnProperty('msg');
        var b3 = source.hasOwnProperty('data');
        if(!b1 || !b2 || !b3)
            return false;
        var status = source.status;
        var msg = source.msg;
        b1 = JudgeObj.isNumber(status);
        b2 = JudgeObj.isString(msg);
        b3 = JudgeObj.isObject(source);
        if(!b1 || !b2 || !b3)
            return false;
        return true;
    };
    //判断是否为日期对象
    judge.isDate = function(o) {
        // return o instanceof Date;
        return {}.toString.call(o) === "[object Date]" && o.toString() !== 'Invalid Date' && !isNaN(o);
    };
    //判断是否为Element对象
    judge.isElement = function(source) {
        return !!(source && source.nodeName && source.nodeType == 1);
    };
    //判断目标参数是否为function或Function实例
    judge.isFunction = function(source) {
        // chrome下,'function' == typeof /a/ 为true.
        return '[object Function]' == Object.prototype.toString.call(source);
    };
    //判断目标参数是否number类型或Number对象
    judge.isNumber = function(source) {
        return '[object Number]' == Object.prototype.toString.call(source) && isFinite(source);
    };
    //判断目标参数是否为Object对象
    judge.isObject = function(source) {
        return 'function' == typeof source || !!(source && 'object' == typeof source);
    };
    //判断目标参数是否string类型或String对象
    judge.isString = function(source) {
        return '[object String]' == Object.prototype.toString.call(source);
    };
    //判断目标参数是否Boolean对象
    judge.isBoolean = function(o) {
        return typeof o === 'boolean';
    };
    /***** 判断是否为json对象 ******** */
    judge.isJson = function(str) {
        try {
            var obj = JSON.parse(str);
        } catch(err) {
            return false;
        }
        return true;
    }

    return judge;
})();

//字符串操作类
var StrOperate = (function() {
    var s = {};
    //去掉空格
    s.trim = function(baseStr) {
        return baseStr.replace(/(^\s*)|(\s*$)/g, "");
    };
    s.lTrim = function(baseStr) {
        //删除左边的空格  
        return baseStr.replace(/(^\s*)/g, "");
    };
    //删除右边空格
    s.rTrim = function(baseStr) {
        return baseStr.replace(/(\s*$)/g, "");
    };
    //对于null或者undefined处理,一律变为空
    s.makeStr = function(baseStr, replacedStr) {
        if(typeof(baseStr) == "undefined" || baseStr == null) {
            if(typeof(replacedStr) == "undefined" || typeof(replacedStr) == null)
                return "";
            else
                return replacedStr;

        }
        return baseStr;
    };
    s.strReplace = function(oldStr, replaceStr, str) {
        var reg = new RegExp(oldStr, "g"); //创建正则RegExp对象
        var stringObj = str;
        var newStr = stringObj.replace(reg, replaceStr);
        return newStr;
    };
    //判断是否为数字
    s.isDigit = function(s) {
        var r, re;
        re = /\d*/i; //\d表示数字,*表示匹配多个数字
        r = s.match(re);
        return(r == s) ? 1 : 0;
    };
    //str=1,2,4,5   subStr=4  包含字符串
    s.isContainStr = function(str, subStr) {
        var b = false;
        str = str.toString();
        var strArray = str.split(",");
        if(strArray.length == 0) return false;
        for(var i = 0; i < strArray.length; i++) {
            if(strArray[i] == subStr) {
                b = true;
                break;
            }
        }
        return b;
    };
    //给字符串数组加上单引号,返回逗号分割字符串
    s.strPlusQuotes = function(array) {
        var str = "";
        for(var i = 0; i < array.length; i++) {
            str += array[i];
            if(i < array.length - 1)
                str += ",";
        }
        return str;
    }
    return s;

})();

//json操作类
var JsonOperate = (function() {
    var json = {};
    //连接成JSON字符串
    json.singleJsonStr = function(idArray, valueArray) {
        if(idArray.length != valueArray.length) {
            return "";
        }
        var data = "{";
        for(var i = 0; i < idArray.length; i++) {
            data = data + "\"" + idArray[i] + "\":";
            var tmpValue = valueArray[i];
            //不是数字
            //			if (isNaN(tmpValue)) {
            //				tmpValue = tmpValue.replace(new RegExp("\r\n", "gm"), "");
            //			}
            //字符
            data = data + "\"" + tmpValue + "\"";
            if(i < idArray.length - 1)
                data = data + ",";
        }
        data = data + "}";
        return data;
    };

    json.singleJsonStrWithRight = function(idArray, valueArray) {
        if(idArray.length != valueArray.length) {
            return "";
        }
        var data = "{";
        for(var i = 0; i < idArray.length; i++) {
            data = data + "\"" + idArray[i] + "\":";
            var tmpValue = valueArray[i];
            //不是数字
            if(isNaN(tmpValue)) {
                tmpValue = tmpValue.replace(new RegExp("\r\n", "gm"), "");
            }
            //字符
            data = data + "\"" + tmpValue + "\"";
            if(i < idArray.length - 1)
                data = data + ",";
        }
        var userName = Right.getLoginUserName();
        data += ",\"loginUserName\":\"" + userName + "\"";
        data = data + "}";
        return data;
    }

    return json;
})();

//键盘操作类
var Keyboard = (function() {
    var keyboard = {};
    //禁止退格键作用  //处理键盘事件 禁止后退键（Backspace）密码或单行、多行文本框除外 
    keyboard.banBackSpace = function(e) {
        var ev = e || window.event; //获取event对象   
        var obj = ev.target || ev.srcElement; //获取事件源     
        var t = obj.type || obj.getAttribute('type'); //获取事件源类型     
        //获取作为判断条件的事件类型 
        var vReadOnly = obj.readOnly;
        var vDisabled = obj.disabled;
        //处理undefined值情况 
        vReadOnly = (vReadOnly == undefined) ? false : vReadOnly;
        vDisabled = (vDisabled == undefined) ? true : vDisabled;
        //当敲Backspace键时，事件源类型为密码或单行、多行文本的，  
        //并且readOnly属性为true或disabled属性为true的，则退格键失效  
        var flag1 = ev.keyCode == 8 && (t == "password" || t == "text" || t == "textarea") && (vReadOnly == true || vDisabled == true);
        //当敲Backspace键时，事件源类型非密码或单行、多行文本的，则退格键失效    
        var flag2 = ev.keyCode == 8 && t != "password" && t != "text" && t != "textarea";
        //判断    
        if(flag2 || flag1)
            event.returnValue = false; //这里如果写 return false 无法实现效果 
    };
    keyboard.banBackSpaceEvent = function() {
        //禁止退格键 作用于Firefox、Opera 
        document.onkeypress = Keyboard.banBackSpace;
        //禁止退格键 作用于IE、Chrome
        document.onkeydown = Keyboard.banBackSpace;
    };

    //绑定键盘事件
    keyboard.keydownEvent = function(obj, keyCode, fn, args) {
        obj.bind('keydown', function(e) {
            var key = e.which;
            if(key == keyCode) {
                if(typeof(args) == "undefined")
                    fn();
                else
                    fn.apply(this, args);
            }
        });
    };
    return keyboard;
})();

//localStorage存储类  用于存储临时变量
var LocalStorage = (function() {
    var s = {};
    s.setItem = function(item, obj) {
        if(obj == null || obj == "")
            return;
        var newStr = obj;
        if(JudgeObj.isArray(obj) || JudgeObj.isObject(obj))
            //转换为STRING
            newStr = JSON.stringify(obj);
        window.localStorage.setItem(item, newStr);
    };
    s.getItem = function(item) {
        var str = window.localStorage.getItem(item);
        var newObj = str;
        //是JSON格式自动转换为对象
        if(JudgeObj.isJson(str)) {
            //转换为对象
            newObj = eval('(' + str + ')');
        }
        return newObj;
    };
    s.clear = function() {
        window.localStorage.clear();
    };
    //删除某个ITEM 以逗号隔开，或者为数组
    s.remove = function(item) {
        //判断是否是字符串
        var b = JudgeObj.isString(item);
        if(b) {
            //是否有逗号
            if(item.indexOf(",") > 0) {
                var array = item.split(",");
                for(var i = 0; i < array.length; i++)
                    window.localStorage.removeItem(array[i]);
            } else
                window.localStorage.removeItem(item);
        } else {
            b = JudgeObj.isArray(item);
            if(b) {
                for(var i = 0; i < item.length; i++)
                    window.localStorage.removeItem(item[i]);
            }
        }
    }
    return s;
})();

// 张庄矿部门ID
var ZZK_AHK_DEPT_ID = "402891815fe6810b015febb490ab0015";

var workflowListMap = new Map();
workflowListMap.put("judge", {
    menuName: "上报筛查",
    listTitle: "上报筛查列表",
    nodeId: "00000000000000000000000000000000",
    itemUrl: "judge-item.html"
});
workflowListMap.put("evaluate", {
    menuName: "评估定级",
    listTitle: "评估定级列表",
    nodeId: "412818815cab9246015cab9289360000",
    itemUrl: "evaluate-item.html"
});
workflowListMap.put("workshop-dispose", {
    menuName: "车间处理",
    listTitle: "车间处理列表",
    nodeId: "412818815caba1a4015caba2190a0001",
    itemUrl: "workshop-dispose-item.html"
});
workflowListMap.put("workshop-check", {
    menuName: "车间验收",
    listTitle: "车间验收列表",
    nodeId: "412818815caba66f015caba6aadf0000",
    nodeIdZZK: "412818815caba66f015caba6aadf000z", // 张庄矿车间验收
    itemUrl: "workshop-check-item.html"
});
workflowListMap.put("dispose-ahk", {
    menuName: "隐患处理",
    listTitle: "隐患处理列表",
    nodeId: "412818815caba3a5015caba3e2ee0000",
    itemUrl: "dispose-ahk-item.html"
});
workflowListMap.put("leader-approve", {
    menuName: "领导审核",
    listTitle: "领导审核列表",
    nodeId: "412818815cb0d3c0015cb0d425c10000",
    itemUrl: "leader-approve-item.html"
});
workflowListMap.put("group-dispose", {
    menuName: "集团处理",
    listTitle: "集团处理列表",
    nodeId: "412818815cb0d63a015cb0d6640b0000",
    itemUrl: "group-dispose-item.html"
});
workflowListMap.put("department-rectify", {
    menuName: "部门整改",
    listTitle: "部门整改列表",
    nodeId: "412818815cb0d981015cb0d9ec980000",
    itemUrl: "department-rectify-item.html"
});
workflowListMap.put("mine-check", {
    menuName: "矿山验收",
    listTitle: "矿山验收列表",
    nodeId: "412818815cb0db2d015cb0db80970000",
    itemUrl: "mine-check-item.html"
});

var nodeMap = new Map();
nodeMap.put("00000000000000000000000000000000", {
    menuName: "上报筛查",
    tranId: "00000000000000000000000000000000"
});
nodeMap.put("412818815cab9246015cab9289360000", {
    menuName: "评估定级",
    tranId: "412818815cb1000c015cb1002eb90000"
});
nodeMap.put("412818815caba1a4015caba2190a0001", {
    menuName: "车间处理",
    tranId: ""
});
nodeMap.put("412818815caba66f015caba6aadf0000", {
    menuName: "车间验收",
    tranId: ""
});
nodeMap.put("412818815caba66f015caba6aadf000z", { // 注意：张庄矿特殊处理
    menuName: "车间验收",
    tranId: ""
});
nodeMap.put("412818815caba3a5015caba3e2ee0000", {
    menuName: "隐患处理",
    tranId: ""
});
nodeMap.put("412818815cb0d3c0015cb0d425c10000", {
    menuName: "领导审核",
    tranId: ""
});
nodeMap.put("412818815cb0d63a015cb0d6640b0000", {
    menuName: "集团处理",
    tranId: "412818815cb10111015cb101340b0000"
});
nodeMap.put("412818815cb0d981015cb0d9ec980000", {
    menuName: "部门整改",
    tranId: "412818815cb101cc015cb101ffeb0000"
});
nodeMap.put("412818815cb0db2d015cb0db80970000", {
    menuName: "矿山验收",
    tranId: ""
});

// 默认超时时间，单位毫秒
var TIME_OUT_DEFAULT_UNIT_MS = 20 * 1000;
// 上传超时时间，单位秒
var TIME_OUT_UPLOAD_UNIT_SECOND = 30;
// 下载超时时间，单位秒
var TIME_OUT_DOWNLOAD_UNIT_SECOND = 120;

// 列表界面，单次请求隐患条目数量
var LIST_PAGE_SIZE = 2;

function getDeviceInfo() {
    // 返回格式：机型 系统 版本  比如：“iPhone7 iOS 11.2.1” “H60-L01 Android 4.4.2”
    return plus.device.model + " " + plus.os.name + " " + plus.os.version;
};

// 把字符串undefined、null转换为空字符串，用于界面展示
function formatString(str) {
    return str === undefined || str == null || str == "null" || str == "\"null\"" ? "" : str;
};

// TODO 优化,类型判断
function isValidString(str) {
    return !isInvalidString(str);
};

function isInvalidString(str) {
    return typeof(str) == "undefined" || str == null || str == "undefined" || str == "null" || str == "\"null\"" || str.length <= 0;
};

// TODO 优化
function getRejectPromise() {
    var dtd = jQuery.Deferred();
    dtd.reject(null);
    return dtd.promise();
};

//比较日期值
function compareDate(curDate, forDate) {
    var time = forDate.getTime() - curDate.getTime();
    var timenum = Math.floor(time / (24 * 60 * 60 * 1000));
    return timenum;
};

function getRadioValueByName(name) {
    var result = jQuery("input:radio[name='" + name + "']:checked").val();
    return result;
};

function transformRemindCycle(key) {
    if(key === "Y") {
        return "年";
    } else {
        return key;
    }
};