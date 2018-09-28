# ebabel
Library of re-useable game modules to build web browser HTML5 games.

## Use for your own game

### Install as dependency for your own game

Bower
```
bower install --save ebabel
```

or, npm
```
npm install --save ebabel
```

### Usage in your own game

See [demos](demo/index.html) for how to use this library.

This library can be used in ES5 or ES6+

#### randomNumber
```
// ES5
<script src="dist/ebabel.min.js.gz"></script>
<script>
  var result = window['ebabel'].randomNumber(6).toInt()
</script>
```

```
// ES6+
import { randomNumber } from 'ebabel';

const result = randomNumber(6).toInt();
```

### License
This code is free to use for all purposes. For more details, see [GNU General Public License, version 3](LICENSE).


## Develop the library itself

For more details, see [Contributing guidelines](CONTRIBUTING.md)
