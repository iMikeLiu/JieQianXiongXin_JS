
jqxx_SuiJi=(function ()
{
	seed = new Date().getTime();
	return function(max, min) {
		 max = max || 1;
		 min = min || 0;
		 seed = (seed * 9301 + 49297) % 233280;
		 var rnd = seed / 233280.0;
		 return min + rnd * (max - min);
	};
})();
jqxx_SuiJiZhengShu=(function ()
{
	seed = new Date().getTime();
	return function(max, min) {
		 max = max || 1;
		 min = min || 0;
		 seed = (seed * 9301 + 49297) % 233280;
		 var rnd = seed / 233280.0;
		 return Math.floor(min + rnd * (max - min));
	};
})();
