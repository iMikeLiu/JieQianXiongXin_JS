function jqxx_JinQian()
{
	
}
/*
function jqxx_DanWei()
{
	this.SI={
		ChangDu:["米",1],
		ZhiLiang:["千克",1],
		ShiJian:["秒",1],
		DianLiu:["安培",1],
		WenDu:["开尔文",1],
		WuZhiDeLiang:["摩尔",1],
		FaGuangQiangDu:["坎德拉",1]
		}
	return this;
}
*/
function jqxx_YouXiShuJu()//date,repeat,credit,save,money,people,cover,hospital,school,policestation,borrowinterest,house,saveinterest,yourhospital,yourschool,yourpolicestation,GDP,tax
{

	if(jqxx_DuQuShuJu()!=""&&jqxx_DuQuShuJu()!=null){jqxx_log.log("data","已存在数据"+jqxx_DuQuShuJu());var temp=JSON.parse(jqxx_DuQuShuJu()).ShuJu;temp.date=new Date(temp.date);return temp;}
	else{
		window.location.href="selection.html"
	}

}
function jqxx_ShuJuGouZao(year)
{
		this.date=new Date();//年份
	this.date.setFullYear(year-1);
	this.date.setMonth(12);
	this.credit=0;//欠款 元
	this.save=0;//存款 元
	this.money=0;//现金 元
	this.people=jqxx_SuiJiZhengShu(1e5,1e7);//人口 人
	this.cover=jqxx_SuiJiZhengShu(1.5e7,1.5e11)//面积
	this.hospital=jqxx_SuiJiZhengShu(1,10)//医院
	this.school=jqxx_SuiJiZhengShu(10,100)//学校
	this.policestation=jqxx_SuiJiZhengShu(1,10)//警察局
	this.borrowinterest=jqxx_SuiJi(0,5)//借钱利息
	this.house=jqxx_SuiJiZhengShu(10000,100000)//住宅楼个数
	this.business=jqxx_SuiJiZhengShu(10000,100000)//商务楼个数
	this.saveinterest=jqxx_SuiJi(0,3)
	while(this.saveinterest<this.borrowinterest)
	{
		this.saveinterest=jqxx_SuiJi(0,3)//存钱利息
	}
	
	this.yourhospital=0//你的医院
	this.yourschool=0//你的学校
	this.yourpolicestation=0//你的警察局
	this.GDP=jqxx_SuiJiZhengShu(1e7,1e9)//生产总值
	this.tax=jqxx_SuiJi(0,10)//税
	this.happiness=jqxx_SuiJi(0,50)//幸福指数
	this.QiHuo={
		YuanYou:[0,100],
		Mei:[0,80],
		HuaSheng:[0,30],
		DaDou:[0,20],
		HuangJin:[0,300],
		Tong:[0,100],
		Lv:[0,100],
		YanJing:[0,50]		
	}
//	this.borrowinterest=parseFloat(this.borrowinterest.toFixed(2));
//	this.saveinterest=parseFloat(this.saveinterest.toFixed(2));
	jqxx_log.log("data","数据初始化成功");
	return this;
}