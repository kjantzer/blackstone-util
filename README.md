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

var a = [1, 2, 3]

a.pushUniq(4) // [1, 2, 3, 4]
a.pushUniq(4) // [1, 2, 3, 4]
a.sum() // 10
a.remove(2) // [1, 3, 4]
a.sum() // 8
a.toggle(2) // [1, 3, 4, 2]
a.toggle(2) // [1, 3, 4]
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

# Custom Elements

## Spinner `<circle-spinner>`

Create a waiting spinner with just an html tag

```js
require('spinner')()

// if you want it called something other than `circle-spinner`
require('spinner')('my-custom-spinner')
```

```html
<circle-spinner/>
<circle-spinner style="--size:.5em; color: white"/>
```

![preview](./screenshots/spinner.gif)

A custom css property is used to set the spinner height and width. You can adjust
it by changing `--size`

```css
circle-spinner.large {
	--size: 2em;
}
```

The color of the spinner inherits from the `color` property of the parent element 
it is appended to.

# Changelog

### next ver
- improved `sortString`; move articles (`The`, `A`, `An`) to end of string `Mountain, The`
- added basic localStorage handler: `store(key, val)`
- improved `smartSplit`
- `splitAndTrim` deprecated in favor of `smartSplit`
- add simple `round(num, decimals=2)` – supports decimals (up to 6)
- added `<circle-spinner/>` custom element (may end up moving a different package)
- added `array.pluck` and `array.sum`

### v1.1.0
- `num` in plural() can be an object/array and the number will be retrieved