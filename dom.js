function jqxx_JieQian()
{
	var jieqian=prompt("请输入要借的钱数：");
	while(!parseFloat(jieqian))
	{
		jieqian=prompt("请输入要借的钱数：");
	}	
	jqxx.ShuJu.credit+=parseFloat(jieqian);
	if(parseFloat(jieqian)!==0)
		jqxx_repeat();
}

function jqxx_HuanQian()
{
	var huanqian=prompt("请输入要还的钱数：");
	if(parseFloat(huanqian)===0)
	{
		return;
	}
	while(!parseFloat(huanqian)||parseFloat(huanqian)>jqxx.ShuJu.credit||parseFloat(huanqian)>jqxx.ShuJu.money)
	{
		huanqian=prompt("请输入要还的钱数：");
	}	
	jqxx.ShuJu.credit-=parseFloat(huanqian);
		jqxx_repeat();
}
function jqxx_QuQian()
{
	var quqian=prompt("请输入要取的钱数：");
	if(parseFloat(quqian)===0)
	{
		return;
	}
	while(!parseFloat(quqian)||parseFloat(quqian)<=jqxx.ShuJu.save)
	{
		quqian=prompt("请输入要取的钱数：");
	}	
	jqxx.ShuJu.save-=parseFloat(quqian);
	jqxx.ShuJu.money+=parseFloat(quqian);
		jqxx_repeat();
}

function jqxx_CunQian()
{
	var cunqian=prompt("请输入要存的钱数：");
	while(!parseFloat(cunqian))
	{
		cunqian=prompt("请输入要存的钱数：");
	}	
	jqxx.ShuJu.save+=parseFloat(cunqian);
	if(parseFloat(cunqian)!==0)
		jqxx_repeat();
}

