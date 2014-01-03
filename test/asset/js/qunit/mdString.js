module('gsub');

test('return String "Hell0 W0rd"', function() {
	var origin = "Hello Word";
	var expected = "Hell0 W0rd";

	equal(origin.gsub("o", 0), expected, 'when passing ("o", 0) in String "Hello Word"');
	equal(origin.gsub(/o/, 0), expected, 'when passing (/o/, 0) in String "Hello Word"');
});

test('return String "Hello 0rd"', function() {
	var origin = "Hello Word";
	var expected = "Hello 0rd";

	equal(origin.gsub("Wo", 0), expected, 'when passing ("Wo", 0) in String "Hello Word"');
	equal(origin.gsub(/Wo/, 0), expected, 'when passing (/Wo/, 0) in String "Hello Word"');
});

test('return String "Hello Word"', function() {
	var origin = "Hello Word";
	var expected = "Hello Word";

	equal(origin.gsub("O", 0), expected, 'when passing ("O", 0) in String "Hello Word"');
	equal(origin.gsub(/O/, 0), expected, 'when passing (/O/, 0) in String "Hello Word"');
	equal(origin.gsub("wO", 0), expected, 'when passing ("wO", 0) in String "Hello Word"');
	equal(origin.gsub(/wO/, 0), expected, 'when passing (/wO/, 0) in String "Hello Word"');
});