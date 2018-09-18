Utility functions, classes, and extensions
============================================

![version](https://img.shields.io/badge/Version-1.0-blue.svg)

> A group of useful utilities. Import them all or include them as you need.

# Install & Use 

`npm install blackstone-util`

```js
// all functions
var util = require('blackstone-util')

// single function
import plural from 'blackstone-util'
```

# Array Additions

The array additions modify the stock array object so you must opt in to them by importing them separately.

```js
require('util/array')

var a = []
a.pushUniq(1)
a.pushUniq(1)
console.log(a) // [1]
```

# Classes

## `ISBN('isbn')`

```js
import ISBN from 'blackstone-util'

let isbn = new ISBN('978-1-5385-0785-8')
isbn.isValid
isbn.to13
isbn.to10 
isbn.formatted

// or static
ISBN.isValid('978-1-5385-0785-8')
```

# Changelog

### v1.1.0
- `num` in plural() can be an object/array and the number will be retrieved