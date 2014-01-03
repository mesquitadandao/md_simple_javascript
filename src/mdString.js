String.prototype.gsub = function(search, replacement){
	var regularExpression = {
		String: function(){
			return new RegExp(search, "g"); 
		},
		RegExp: function(index, element){
			return new RegExp(search.source, "g"); ; 
		}
	};
	var searchRegular = regularExpression[search.constructor.name]();
	return this.replace(searchRegular, replacement);
};