MD Simple JavaScript
====================


An extension methods to simplify javascript.


Test
--------------------

- QUnit 1.12.0

Implemented Methods
--------------------

--------------------

### Array

> **NOTE:** Methods to simplify the handling of javascript array.

**uniq()** Simplify uniqueness. Exemple:

```
/** return Array [1,2,3] **/
[1,2,3,1].uniq();
[1,2,3].uniq();

/** return Array ["a","b","c","B"] **/
["a","b","c","a","B","c"].uniq();
["a","b","c","B"].uniq();

/** return Array ["a","b","c",2,"B"] **/
["a","b","c",2,"a","B","c"].uniq();
["a","b","c",2,"B"].uniq();
```

### String

> **NOTE:** Methods to simplify the handling of javascript string.

**gsub(search, replacement)** Simplify replacement. Exemple:

```
/** return String "Hell0 W0rd" **/
"Hello Word".gsub("o", 0);
"Hello Word".gsub(/o/, 0);

/** return String "Hello 0rd" **/
"Hello Word".gsub("Wo", 0);
"Hello Word".gsub(/Wo/, 0);

/** return String "Hello Word" **/
"Hello Word".gsub("O", 0);
"Hello Word".gsub(/O/, 0);
"Hello Word".gsub("wO", 0);
"Hello Word".gsub(/wO/, 0);
```

--------------------

@Last Release <a href="http://mesquitadandao.github.io/md_simple_javascript" target="_blank">DM Simple JavaScript (Download and Demo)</a>.

@License <a href="http://choosealicense.com/licenses/unlicense" target="_blank">Public Domain (Unlicense)</a>.

@Author <a href="http://mesquitadandao.github.io" target="_blank">Mesquita Dandão</a>.
