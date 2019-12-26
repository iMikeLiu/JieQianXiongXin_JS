var jqxx={};
jqxx.ShuJu=new jqxx_YouXiShuJu();

jqxx_repeat=function(){
	if(jqxx.ShuJu.date.getMonth()===12)
	{
		jqxx.ShuJu.date.setFullYear(jqxx.ShuJu.date.getFullYear()+1);
		jqxx.ShuJu.date.setMonth(1);
	}
	else
	{
		jqxx.ShuJu.date.setMonth(jqxx.ShuJu.date.getMonth()+1);
	}
	jqxx.ShuJu.credit+=jqxx_BaoLiuXiaoShu(jqxx.ShuJu.credit*jqxx.ShuJu.borrowinterest*0.01,3);
	jqxx.ShuJu.save+=jqxx_BaoLiuXiaoShu(jqxx.ShuJu.save*jqxx.ShuJu.saveinterest*0.01,3);
	现金.innerHTML=jqxx_BaoLiuXiaoShu(jqxx.ShuJu.money,2);
	借款.innerHTML=jqxx_BaoLiuXiaoShu(jqxx.ShuJu.credit,2);
	存款.innerHTML=jqxx_BaoLiuXiaoShu(jqxx.ShuJu.save,2);
	借款利息.innerHTML=jqxx.ShuJu.borrowinterest+"%";
	存款利息.innerHTML=jqxx.ShuJu.saveinterest+"%";
	人口.innerHTML=jqxx.ShuJu.people;
	面积.innerHTML=(jqxx.ShuJu.cover/1000000).toFixed(2)+"平方千米";
	时间.innerHTML=jqxx.ShuJu.date.getFullYear()+"年"+jqxx.ShuJu.date.getMonth()+"月";
}
