BusinessHtmlUtils = (function() {
    var businessHtml = {};

    // 生产目标责任书
    businessHtml.generateMbzrsHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var fparty = data.fparty;
        var sparty = data.sparty;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>甲方名称 :</td>";
        html += "<td class='td_name'>" + fparty + "</td></tr>";
        html += "<tr> <td class='tr_name'>乙方名称 :</td>";
        html += "<td class='td_name'>" + sparty + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>签订时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全目标考核
    businessHtml.generateMbkhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>考核标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>考核类型 :</td>";
        html += "<td class='td_name'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>考核时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 特殊作业台账
    businessHtml.generateZytzHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>作业名称：";
        html += "<span class='span-qymc'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>作业类型:</td>";
        html += "<td class='td_name' id='category'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>公司名称 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>签订时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";

        html += "</div>";
        html += "</li>";

        return html;
    };

    // 特殊作业审批记录
    businessHtml.generateSpjlHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>记录名称：";
        html += "<span class='span-qymc'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>作业类型:</td>";
        html += "<td class='td_name' id='category'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>审批时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";

        html += "</div>";
        html += "</li>";

        return html;
    };

    // 领导干部带班
    businessHtml.generateGbdbHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span class='span-qymc'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>计划类型:</td>";
        html += "<td class='td_name' id='category'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>执行时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";

        html += "</div>";
        html += "</li>";

        return html;
    };

    // 年度安全生产工作计划
    businessHtml.generateGzjhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        //      var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;
        var html = "";

        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        //      html += "<tr> <td class='tr_name'>计划类型 :</td>";
        //      html += "<td class='td_name'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>组织部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>签发时间 :</td>";
        html += "<td class='td_name'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "<div id='xq-button' class='mui-button-row'>";

        html += "</div>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全生产责任制定期考核
    businessHtml.generateDqkhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var deptName = data.deptName;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";

        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>考核标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>考核部门 :</td>";
        html += "<td class='td_name'>" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>考核时间 :</td>";
        html += "<td class='td_name'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间:</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "<div id='xq-button' class='mui-button-row'>";
        html += "</div>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安委会记录
    businessHtml.generateAwhjlHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;
        var html = "";

        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>会议标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>会议时间 :</td>";
        html += "<td class='td_name'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间:</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "<div id='xq-button' class='mui-button-row'>";
        html += "</div>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全生产制度与规程
    businessHtml.generateZdgcHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>规章标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>所属单位 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>签发时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全生产教育培训计划
    businessHtml.generatePxjhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var remindCycle = data.remindCycle;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>项目名称：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期:</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别:</td>";
        html += "<td class='td_name' id='corp'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注:</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' id='corp'>" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 应急预案与演练计划
    businessHtml.generateYajhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>计划类型:</td>";
        html += "<td class='td_name' id='corp'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>执行时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全检查计划
    businessHtml.generateJcjhHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>计划类型:</td>";
        html += "<td class='td_name' id='corp'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>执行时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";
        return html;
    };

    // 安全费用使用标准和提取台账
    businessHtml.generateBztzHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var data = delnull(info);

        var id = data.id;
        var name = data.name;
        var type = data.type;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>计划类型:</td>";
        html += "<td class='td_name' id='corp'>" + type + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门 :</td>";
        html += "<td class='td_name'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>执行时间:</td>";
        html += "<td class='td_name' id='corp'>" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 特种操作人员
    businessHtml.generateCzryHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var business = delnull(info);

        var id = business.id;
        var name = business.name;
        var IDCard = business.IDCard;
        var type = business.type;
        var category = business.category;
        var corpName = business.corpName;
        var corpId = business.Corpid;
        var deptName = business.deptName;
        var deptId = business.Deptid;
        var project = business.project;
        var cNumber = business.cNumber;
        var dertifiDept = business.dertifiDept;
        var startTime = business.startTime;
        var endTime = business.endTime;
        var reStudyTime = business.reStudyTime;
        var exchangeTime = business.exchangeTime;
        var Userid = business.Userid;
        var realName = business.realName;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/xm.png'>人员名称：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_names'>类别 :</td>";
        html += "<td class='td_name'>" + type + "</td></tr>";
        html += "<tr><td class='tr_names '>分类 :</td>";
        html += "<td class='td_name '>" + category + "</td></tr>";
        html += "<tr><td class='tr_names '>身份证号码 :</td>";
        html += "<td class='td_name '>" + IDCard + "</td></tr>";
        html += "<tr> <td class='tr_name'>单位/集团 :</td>";
        html += "<td class='td_name' id='corp'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name' id='dept'>" + deptName + "</td></tr>";
        html += "<tr><td class='tr_names '>项目 :</td>";
        html += "<td class='td_name '>" + project + "</td></tr>";
        html += "<tr><td class='tr_names'>证件号码 :</td>";
        html += "<td class='td_name' id='cnum'>" + IDCard + "</td></tr>";
        html += "<tr> <td class='tr_names'>发证部门 :</td>";
        html += "<td class='td_name' id='ddept'>" + dertifiDept + "</td></tr>";
        html += "<tr> <td class='tr_names'>有效期开始 :</td>";
        html += "<td class='td_name' id='starttime'>" + startTime + "</td></tr>";
        html += "<tr><td class='tr_names'>有效期结束 :</td>";
        html += "<td class='td_name' id='endtime'>" + endTime + "</td></tr>";
        html += "<tr> <td class='tr_names'>再教育提醒 :</td>";
        html += "<td class='td_name' id='sbr'>" + reStudyTime + "</td></tr>";
        html += "<tr><td class='tr_names'>换证提醒 :</td>";
        html += "<td class='td_name' id='bz'>" + exchangeTime + "</td></tr>";
        html += "<tr><td class='tr_names'>登记人 :</td>";
        html += "<td class='td_name' id='djr'>" + realName + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全管理网络
    businessHtml.generateAqglwlHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error - illegal params");
            return "";
        }
        var business = delnull(info);

        var id = business.id;
        var name = business.name;
        var corpName = business.corpName;
        var corpId = business.Corpid;
        var deptName = business.deptName;
        var deptId = business.Deptid;
        var username = business.realName;
        var userId = business.Userid;
        var remark = business.Remark;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/xm.png'>名称：";
        html += "<span id='pxname'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>单位/集团 :</td>";
        html += "<td class='td_name' id='corp'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name' id='dept'>" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>登记人 :</td>";
        html += "<td class='td_name' id='sbr'>" + username + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name' id='bz'>" + remark + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 特种设备
    businessHtml.generateTzsbHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var business = delnull(info);

        var id = business.id;
        var name = business.name;
        var type = business.type;
        var corpName = business.corpName;
        var corpId = business.Corpid;
        var deptName = business.deptName;
        var deptId = business.Deptid;
        var model = business.model;
        var cNumber = business.cNumber;
        var certifiDept = business.certifiDept;
        var checkTime = business.checkTime;
        var nextcheckTime = business.nextCheckTime;
        var nextTime = business.nextTime;
        var Userid = business.Userid;
        var realName = business.realName;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/qj.png'>设备名称：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_names'>设备类别 :</td>";
        html += "<td class='td_name'>" + type + "</td></tr>";
        html += "<tr><td class='tr_names '>设备型号 :</td>";
        html += "<td class='td_name '>" + model + "</td></tr>";
        html += "<tr> <td class='tr_name'>单位/集团 :</td>";
        html += "<td class='td_name' id='corp'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name' id='dept'>" + deptName + "</td></tr>";
        html += "<tr><td class='tr_names'>设备编号 :</td>";
        html += "<td class='td_name'>" + certifiDept + "</td></tr>";
        html += "<tr> <td class='tr_names'>检验单位 :</td>";
        html += "<td class='td_name'>" + cNumber + "</td></tr>";
        html += "<tr> <td class='tr_names'>检验日期 :</td>";
        html += "<td class='td_name'>" + checkTime + "</td></tr>";
        html += "<tr><td class='tr_names'>下次检验日期 :</td>";
        html += "<td class='td_name'>" + nextcheckTime + "</td></tr>";
        html += "<tr> <td class='tr_names'>提醒设置 :</td>";
        html += "<td class='td_name'>" + nextTime + "</td></tr>";
        html += "<tr><td class='tr_names'>登记人 :</td>";
        html += "<td class='td_name' id='djr'>" + realName + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 工艺流程
    businessHtml.generateGylcHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var business = delnull(info);

        var id = business.id;
        var name = business.name;
        var content = business.content;
        var corpName = business.corpName;
        var corpId = business.Corpid;
        var deptName = business.deptName;
        var deptId = business.Deptid;
        var username = business.realName;
        var userId = business.Userid;
        var remark = business.Remark;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/xm.png'>名称：";
        html += "<span id='pxname'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>详细内容 :</td>";
        html += "<td class='td_name' id='content'>" + content + "</td></tr>";
        html += "<tr> <td class='tr_name'>单位/集团 :</td>";
        html += "<td class='td_name' id='corp'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name' id='dept'>" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>登记人 :</td>";
        html += "<td class='td_name' id='sbr'>" + username + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name' id='bz'>" + remark + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 安全生产目标
    businessHtml.generateScmbHtml = function(index, info) {
        if(info == null || info == "") {
            console.log("error = illegal params");
            return "";
        }
        var business = delnull(info);

        var id = business.id;
        var name = business.name;
        var content = business.content;
        var corpName = business.corpName;
        var corpId = business.Corpid;
        var deptName = business.deptName;
        var deptId = business.Deptid;
        var username = business.realName;
        var userId = business.Userid;
        var remark = business.Remark;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/xm.png'>名称：";
        html += "<span id='pxname'>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>目标内容 :</td>";
        html += "<td class='td_name' id='content'>" + content + "</td></tr>";
        html += "<tr> <td class='tr_name'>单位/集团 :</td>";
        html += "<td class='td_name' id='corp'>" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门 :</td>";
        html += "<td class='td_name' id='dept'>" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>登记人 :</td>";
        html += "<td class='td_name' id='sbr'>" + username + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name' id='bz'>" + remark + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 风险管理培训记录
    businessHtml.generatePxjyHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 作业活动与设备清单
    businessHtml.generateSbqdHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 风险评价文件
    businessHtml.generatePjwjHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 风险评估与评审记录
    businessHtml.generatePsjlHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 重大风险清单
    businessHtml.generateFxqdHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 年度综合检维修计划
    businessHtml.generateJwxjhHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 检维修方案
    businessHtml.generateJwxfaHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 安全教育培训计划
    businessHtml.generateAqpxjhHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 安全培训教育档案
    businessHtml.generateAqpxdaHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 安全生产管理人员台账
    businessHtml.generateAqrytzHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 特种作业人员台账
    businessHtml.generateTzrytzHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;

    };

    // 职业危害防治计划
    businessHtml.generateZyfzjhHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 职业卫生档案
    businessHtml.generateZywsdaHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 健康监护档案
    businessHtml.generateJkdaHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>员工姓名：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    // 隐患治理台账
    businessHtml.generateYhzlHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var people = data.people;
        var corpName = data.corpName;
        var signTime = data.signTime;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>计划标题：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>负责人:</td>";
        html += "<td class='td_name'>" + people + "</td></tr>";
        html += "<tr> <td class='tr_name'>发布部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>治理期限:</td>";
        html += "<td class='td_name' >" + signTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };
    
    // 特种设备台账
    businessHtml.generateTzsbHtml = function(index, business) {
        if(business == null || business == "") {
            console.log("error = illegal params");
            return "";
        }

        var data = delnull(business);

        var id = data.id;
        var name = data.name;
        var remindCycle = transformRemindCycle(data.remindCycle);;
        var category = data.category;
        var remark = data.remark;
        var corpName = data.corpName;
        var deptName = data.deptName;
        var userName = data.userName;
        var createTime = data.createTime;
        var updateTime = data.updateTime;

        var html = "";
        html += "<li class='mui-table-view-cell mui-collapse'>";
        html += "<a class='mui-navigate-right'> <img src='../../../images/yj.png'>员工姓名：";
        html += "<span>" + name + "</span> </a>";
        html += "<div class='mui-collapse-content'>";
        html += "<table id='content' border='0'  width='100%'>";
        html += "<tr> <td class='tr_name'>提醒周期 :</td>";
        html += "<td class='td_name'>" + remindCycle + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属类别 :</td>";
        html += "<td class='td_name'>" + category + "</td></tr>";
        html += "<tr> <td class='tr_name'>备注 :</td>";
        html += "<td class='td_name'>" + remark + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属部门:</td>";
        html += "<td class='td_name' >" + corpName + "</td></tr>";
        html += "<tr> <td class='tr_name'>所属单位:</td>";
        html += "<td class='td_name' >" + deptName + "</td></tr>";
        html += "<tr> <td class='tr_name'>填报人:</td>";
        html += "<td class='td_name' >" + userName + "</td></tr>";
        html += "<tr> <td class='tr_name'>创建时间 :</td>";
        html += "<td class='td_name' id='dept'>" + createTime + "</td></tr>";
        html += "<tr> <td class='tr_name'>更新时间 :</td>";
        html += "<td class='td_name'>" + updateTime + "</td></tr>";

        html += "<tr><td style='text-align:right;' colspan='2'>";
        html += "<button style='border-color: #2fb2f0; color: #2fb2f0; vertical-align: middle; margin-bottom: 5px;' listItemId='" + id + "' index='" + index + "'>查看详情</button>";
        html += "</td></tr>";

        html += "</table>";
        html += "</div>";
        html += "</li>";

        return html;
    };

    function delnull(business) {
        for(var item in business) {
            var values = business[item];
            /*  if(values.indexOf("null") != -1) {
                  values = "";
                  business[item] = "";
              }*/
            var items_value = formatString(values);
            business[item] = items_value;
            //  console.log(item + "："+ business[item]); // 获取属性值
        }
        return business;
    }

    return businessHtml;
})();