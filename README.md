DM Simple JavaScript
====================


An extension methods to simplify javascript.

--------------------


Test
--------------------

- QUnit 1.12.0

Implemented Methods
--------------------

### String

> **NOTE:** Methods to simplify the handling of javascript string.

**gsub(search, replacement)** Simplify replacement. Exemple:

```
/** return String Hell0 W0rd **/
"Hello Word".gsub("o", 0);
"Hello Word".gsub(/o/, 0);

/** return String Hello 0rd **/
"Hello Word".gsub("Wo", 0);
"Hello Word".gsub(/Wo/, 0);

/** return String Hello Word **/
"Hello Word".gsub("O", 0);
"Hello Word".gsub(/O/, 0);
"Hello Word".gsub("wO", 0);
"Hello Word".gsub(/wO/, 0);
```

### Array

> **NOTE:** Methods to simplify the handling of javascript array.

**uniq()** Simplify uniqueness. Exemple:

```
/** return Array 2,3 **/
[1,2,3,1].uniq();
[2,3].uniq();

/** return Array "b","B" **/
['a','b','c','a','B','c'].uniq();
['b','B'].uniq();

/** return Array "b",2,"B" **/
['a','b','c',2,'a','B','c'].uniq();
['b',2,'B'].uniq();
```

--------------------

@Demo [DM Simple JavaScript](http://mesquitadandao.github.io/dm_simple_javascript).

@License [Public Domain (Unlicense)](http://choosealicense.com/licenses/unlicense/).

@Author [Mesquita Dandão](http://mesquitadandao.github.io/).
