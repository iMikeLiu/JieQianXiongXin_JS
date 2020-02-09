const jqxx_log={
	log:function(module,catalog,style){
		console.log(`%c[${module}] +OK ${catalog}`,(style===undefined)?(""):(style))
	},
	error:function(module,catalog,style){
		console.error(`%c[${module}] -ERR ${catalog}`,(style===undefined)?(""):(style))
	}
}