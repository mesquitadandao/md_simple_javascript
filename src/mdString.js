String.prototype.gsub = function(finder, replace){
	var regularExpression = {
		String: function(){
			return new RegExp(finder, "g"); 
		},
		RegExp: function(index, element){
			return new RegExp(finder.source, "g"); ; 
		}
	};
	var finderRegular = regularExpression[finder.constructor.name]();
	return this.replace(finderRegular, replace);
};