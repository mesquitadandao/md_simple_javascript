module("uniq");

test("return Array 2,3", function() {
	var expected = [2,3]+'';
	equal([1,2,3,1].uniq()+'', expected, "when send in Array 1,2,3,1");
	equal([2,3].uniq()+'', expected, "when send in Array 2,3");
});

test("return Array 'b','B'", function() {
	var expected = ['b','B']+'';

	equal(['a','b','c','a','B','c'].uniq()+'', expected, "when send in Array 'a','b','c','a','B','c'");
	equal(['b','B'].uniq()+'', expected, "when send in Array 'b','B'");
});

test("return Array 'b',2,'B'", function() {
	var expected = ['b',2,'B']+'';

	equal(['a','b','c',2,'a','B','c'].uniq()+'', expected, "when send in Array 'a','b','c',2,'a','B','c'");
	equal(['b',2,'B'].uniq()+'', expected, "when send in Array 'b',2,'B'");
});