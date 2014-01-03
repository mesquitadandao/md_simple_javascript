;$(function(){
	var $demoUniq = $("#demo-uniq");
	
	$("#apply-uniq").on("click", function(){
		var text = $demoUniq.val();
		$demoUniq.val(text.split(',').uniq());
	})

	var $demoGsub = $("#demo-gsub");
	var $searchGsub = $("#search-gsub");
	var $replacementGsub = $("#replacement-gsub");

	$("#apply-gsub").on("click", function(){
		var text = $demoGsub.val();
		var search = $searchGsub.val();
		var replacement = $replacementGsub.val();
		$demoGsub.val(text.gsub(search, replacement));
	})
});