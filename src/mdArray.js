Array.prototype.uniq = function(){
	var uniqueness = [];
	for(var i = 0; i < this.length; i++){
		var element = this[i];
		if (this.indexOf(element) === this.lastIndexOf(element) || uniqueness.indexOf(element) === -1){
			uniqueness.push(this[i]);
		}
	}
	return uniqueness;
};