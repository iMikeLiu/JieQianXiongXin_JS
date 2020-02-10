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
	jqxx_log.log("dom","借钱成功");
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
	jqxx_log.log("dom","还钱成功");
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
	jqxx_log.log("dom","取钱成功");
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
	jqxx_log.log("dom","存钱成功");
	if(parseFloat(cunqian)!==0)
		jqxx_repeat();
}
function jqxx_SuDu(x)
{
		jqxx_speed.innerHTML=x+"x";
		jqxx.ShiJian=jqxx.BeiSu[x];
		setTimeout(jqxx_repeat,jqxx.ShiJian);
		jqxx_log.log("dom","调速成功！当前为"+x+"倍速");
}
function jqxx_KaiShi(year)
{
	jqxx_CunChuShuJu(JSON.stringify({ShuJu:new jqxx_ShuJuGouZao(parseInt(year))}));
	jqxx_TiaoZhuan("index.html")
}
function jqxx_MoChu()
{
	var t=prompt("请在下方框内输入以下内容，要完全一致。\n我同意抹除所有游戏数据。");	
	if(t==="我同意抹除所有游戏数据。")
	{
		jqxx_CunChuShuJu("");
		jqxx_TiaoZhuan("index.html");
	}
}
function jqxx_JiaoBen()
{
	jqxx_TiaoZhuan("script.html");
}

function jqxx_ShangChuanJiaoBen(f,name)
{
	var fr=new FileReader();
	fr.readAsText(f);
	fr.onload=function(){
		jqxx_CunChuLieBiao(f.name);
		jqxx_CunChu(f.name,fr.result);
	}
	
}
function jqxx_DuQuJiaoBen(dataName)
{
	
	return jqxx_DuQu(dataName);
}
function jqxx_CunChuJiaoBen(data,dataName)
{
	jqxx_CunChuLieBiao(dataName);
	jqxx_CunChu(dataName,data);
}
function jqxx_QiHuo()
{
	jqxx_TiaoZhuan("qihuo.html");
}
function jqxx_DeDaoPinYin(data)
{
	const PinYin={
		原油:"YuanYou",
		煤:"Mei",
		花生:"HuaSheng",
		大豆:"DaDou",
		黄金:"HuangJin",
		铜:"Tong",
		铝:"Lv",
		眼镜:"YanJing",
		时间:"ShiJian"
	}
	return PinYin[data]
}
function jqxx_GouMaiQiHuo(count)
{
	var val=jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][1];
	var own=jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][0];
	if(val*count>jqxx.ShuJu.money)
	{
		alert("金钱不足！");
	}
	else
	{
		jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][0]+=count;
		jqxx.ShuJu.money-=val*count;
	}
	jqxx_repeat();
}
function jqxx_PaoShouQiHuo(count)
{
	var val=jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][1];
	var own=jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][0];
	if(count>own)
	{
		alert("期货不足！");
	}
	else
	{
		jqxx.ShuJu.QiHuo[jqxx_DeDaoPinYin(jqxx_QiHuoXuanZe.selectedOptions[0].innerHTML)][0]-=count;
		jqxx.ShuJu.money+=val*count;
	}	
	jqxx_repeat();
}
function jqxx_ZhuYe()
{
	jqxx_TiaoZhuan("index.html")
}
function jqxx_XiaZaiJiaoBen(url,dataName)
{
	jqxx_ajax({url:url,type:"get",success:function(data){
		jqxx_CunChuJiaoBen(data,dataName)
	}})
}
