function jqxx_CunChuShuJu(data)
{
	localStorage.setItem("data",data);
	jqxx_log.log("storage","写数据成功，数据是"+data);
}
function jqxx_DuQuShuJu()
{
	jqxx_log.log("storage","返回数据成功，数据是"+localStorage.getItem("data"));
	return localStorage.getItem("data");
}
function jqxx_CunChu(dataName,data)
{
	localStorage.setItem(dataName,data);
	jqxx_log.log("storage","写数据成功，数据是"+data);
}
function jqxx_DuQu(dataName)
{
	jqxx_log.log("storage","返回数据成功，数据是"+localStorage.getItem(dataName));
	return localStorage.getItem(dataName);
}
function jqxx_CunChuLieBiao(name)
{
	if(name==="")alert("脚本名称不能为空！");
	else
	{
	var list=jqxx_DeDaoLieBiao();
	if(list===null)list=[];
	list.push(name);
	jqxx_CunChu("__GlobalList",JSON.stringify(list));
	}
}
function jqxx_ShanChuLieBiao(name)
{
	var list=jqxx_DeDaoLieBiao();
	jqxx_log.log("storage","预备删除"+name);
	if(list===null)list=[];
	for(i=0;i<list.length;i++)
	{
		jqxx_log.log("storage","搜索"+list[i]+"成功");
		if(list[i]===name)
		{
			list.splice(i,1);
			jqxx_log.log("storage","删除"+name+"成功");

		}
	}
	jqxx_log.log("storage","JSON化\n"+JSON.stringify(list));
	jqxx_CunChu(name,null);
	jqxx_CunChu("__GlobalList",JSON.stringify(list));
}
function jqxx_DeDaoLieBiao()
{
	return JSON.parse(jqxx_DuQu("__GlobalList")==""?"[]":jqxx_DuQu("__GlobalList"));
}