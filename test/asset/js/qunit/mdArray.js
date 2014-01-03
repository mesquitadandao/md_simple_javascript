module('uniq');

test('return Array 1,2,3', function() {
	var expected = [1,2,3]+"";
	equal([1,2,3,1].uniq()+"", expected, 'when send in Array 1,2,3,1');
	equal([1,2,3].uniq()+"", expected, 'when send in Array 1,2,3');
});

test('return Array "a","b","c","B"', function() {
	var expected = ["a","b","c","B"]+"";

	equal(["a","b","c","a","B","c"].uniq()+"", expected, 'when send in Array "a","b","c","a","B","c"');
	equal(["a","b","c","B"].uniq()+"", expected, 'when send in Array "a","b","c","B"');
});

test('return Array "a","b","c",2,"B"', function() {
	var expected = ["a","b","c",2,"B"]+"";

	equal(["a","b","c",2,"a","B","c"].uniq()+"", expected, 'when send in Array "a","b","c",2,"a","B","c"');
	equal(["a","b","c",2,"B"].uniq()+"", expected, 'when send in Array "a","b","c",2,"B"');
});