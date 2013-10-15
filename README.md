binary-search-bounds
====================
Binary search on arrays.

## API

```javascript
var bounds = require("binary-search-bounds")
```

### `bounds.leastLower(array, y[, cmp, lo, hi])`
Returns the index of the first item in the array `<=` y

### `bounds.greatestLower(array, y[, cmp, lo, hi])`
Returns the index of the first item in the array `<` y

### `bounds.leastUpper(array, y[, cmp, lo, hi])`
Returns the index of the last item in the array `>` y

### `bounds.greatestUpper(array, y[, cmp, lo, hi])`
Returns the index of the last item in the array `>=` y

## Credits
(c) 2013 Mikola Lysenko. MIT License