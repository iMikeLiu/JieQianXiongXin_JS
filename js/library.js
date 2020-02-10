function jqxx_ajax(options){
    var xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XMLHTTP");
    var str = "";
    for(var key in options.data){
        str+="&"+key+"="+options.data[key];
    }
    str = str.slice(1)
    if(options.type == "get"){
        var url = options.url+"?"+str;
        xhr.open("get",url);
        xhr.send();
		jqxx_log.log("ajax","GET成功");
    }else if(options.type == "post"){
        xhr.open("post",options.url);
        xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        xhr.send(str);
		jqxx_log.log("ajax","POST成功");
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
			jqxx_log.log("ajax","请求数据成功，数据是"+xhr.responseText);
            var d = xhr.responseText;
            options.success&&options.success(d)
        }else if(xhr.status != 200){
			jqxx_log.error("ajax","请求数据失败，错误码是"+xhr.status,"color:red");
            options.error&&options.error(xhr.status);
        }
    }
}
/*{
    type:"get/post",
    url:"请求的地址",
    data:{},
    success:function(data){
        console.log(data)
    }
}*/
function jqxx_TiaoZhuan(webpage)
{
	window.location.href=webpage;
}
function jqxx_ZhiXingSuoYouJiaoBen()
{
	jqxx_log.log("library","执行所有脚本开始！");
	var list=jqxx_DeDaoLieBiao();
	jqxx_log.log("library","得到列表："+list);
	for (var o in list)
	{
		jqxx_log.log("library","正在执行"+o);
		eval(jqxx_DuQu(list[o]));
	}
}
//从 seats_random 项目获取
//seats_random Copyright MikeLiu 2019-2020
//seats_random 遵循 GNU GPL 2.0 协议
function ml_creatOption(data,id,name)
{
	var tableData='<select id="'+id+'" name="'+name+'">';
	for(var i=0;i<data.length;i++)
	{
			tableData+="<option value="+'"'+i+'"'+">";
			tableData+=data[i];
			tableData+="</option>";
	}
	tableData+="</select>";
	return tableData;
}