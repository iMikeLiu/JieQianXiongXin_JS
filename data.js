/*function jqxx_DanWeiZhi(ZuHe)
{
	this.ChangDu=ZhuHe[0][0];
	this.ChangDuBeiShu=ZuHe[0][1];
	this.ZhiLiang=ZuHe[1][0];
	this.ShiJian=ZuHe[1][1];
	this.DianLiu=ZuHe;
	this.WenDu=WenDu;
	this.WuZhiDeLiang=WuZhiDeLiang;
	this.FaGuangQiangDu=FaGuangQiangDu;
	};
}*/
//TO-DO:完成单位制构造器
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
function jqxx_YouXiShuJu()//year,repeat,credit,save,money,people,cover,hospital,school,policestation,borrowinterest,house,saveinterest,yourhospital,yourschool,yourpolicestation,GDP,tax
{
	//向后兼容V1.0 V1.1 C语言版
	this.year=1989;//年份
	this.repeat=-1;//重复
	this.credit=0;//欠款 元
	this.save=0;//存款 元
	this.money=0;//现金 元
	this.people=0;//人口 人
	this.cover=jqxx_SuiJi(1000,100)//面积
	this.hospital=jqxx_SuiJi(1000,100)//医院
	this.school=jqxx_SuiJi(1000,100)//学校
	this.policestation=jqxx_SuiJi(1000,100)//警察局
	this.borrowinterest=jqxx_SuiJi(1000,100)//借钱利息
	this.house=jqxx_SuiJi(1000,100)//住宅楼个数
	this.business=jqxx_SuiJi(1000,100)//商务区个数
	this.saveinterest=0//存钱利息
	this.yourhospital=0//你的医院
	this.yourschool=0//你的学校
	this.yourpolicestation=0//你的警察局
	this.GDP=0//生产总值
	this.tax=0//税
	this.happiness=0//幸福指数
}
