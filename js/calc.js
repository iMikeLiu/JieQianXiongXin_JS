
jqxx_SuiJi=(function ()
{
	seed = new Date().getTime();
	jqxx_log.log("calc","取随机种子成功，种子是："+seed);
	return function(min, max) {
		 max = max || 1;
		 min = min || 0;
		 seed = (seed * 9301 + 49297) % 233280;
		 var rnd = seed / 233280.0;
		 return jqxx_BaoLiuXiaoShu(min + rnd * (max - min),2);
	};
})();
jqxx_SuiJiZhengShu=(function ()
{
	seed = new Date().getTime();
	jqxx_log.log("calc","取随机整数种子成功，种子是："+seed);
	return function(min, max) {
		 max = max || 1;
		 min = min || 0;
		 seed = (seed * 9301 + 49297) % 233280;
		 var rnd = seed / 233280.0;
		 return Math.floor(min + rnd * (max - min));
	};
})();
function jqxx_BaoLiuXiaoShu(Shu,BaoLiu)
{
	jqxx_log.log("calc","保留小数计算成功");
	return parseFloat(Shu.toFixed(BaoLiu));
}