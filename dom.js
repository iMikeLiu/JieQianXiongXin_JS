function jqxx_JieQian()
{
	var jieqian=prompt("请输入要借的钱数：");
	if(jieqian===null)return;
	if(parseFloat(jieqian)===0)
	{
		return;
	}
	while(!parseFloat(jieqian))
	{
		jieqian=prompt("请输入要借的钱数：");
	}	
	
	jqxx.ShuJu.credit+=parseFloat(jieqian);
	jqxx.ShuJu.money+=parseFloat(jieqian);
	if(parseFloat(jieqian)!==0)
		jqxx_repeat();
}

function jqxx_HuanQian()
{
	var huanqian=prompt("请输入要还的钱数：");
	if(huanqian===null)return;
	if(parseFloat(huanqian)===0)
	{
		return;
	}
	while(!parseFloat(huanqian))
	{
		huanqian=prompt("请输入要还的钱数：");
	}	
	while(parseFloat(huanqian)>jqxx.ShuJu.credit||parseFloat(huanqian)>jqxx.ShuJu.money)
	{
		huanqian=prompt("请输入要还的钱数：");
	}
	jqxx.ShuJu.credit-=parseFloat(huanqian);
	jqxx.ShuJu.money-=parseFloat(huanqian);
		jqxx_repeat();
}
function jqxx_QuQian()
{
	var quqian=prompt("请输入要取的钱数：");
	if(quqian===null)return;
	if(parseFloat(quqian)===0)
	{
		return;
	}
	while(!parseFloat(quqian))
	{
		quqian=prompt("请输入要取的钱数：");
	}	
	while(parseFloat(quqian)>jqxx.ShuJu.save)
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
	if(cunqian===null)return;
	if(parseFloat(cunqian)===0)
	{
		return;
	}
	while(!parseFloat(cunqian))
	{
		cunqian=prompt("请输入要存的钱数：");
	}	
	while(parseFloat(cunqian)>jqxx.ShuJu.money)
	{
		cunqian=prompt("请输入要存的钱数：");
	}
	jqxx.ShuJu.money-=parseFloat(cunqian);
	jqxx.ShuJu.save+=parseFloat(cunqian);
	if(parseFloat(cunqian)!==0)
		jqxx_repeat();
}

