# ebabel-library
Library of re-useable game functions to build web browser HTML5 games.

## Use for your own game

### Install as dependency for your own game

Bower
```
bower install --save ebabel-library
```

or, npm
```
npm install --save ebabel-library
```

### Usage in your own game

See [demos](demo/index.html) for how to use this library.

This library can be used in ES5 or ES6+

#### randomNumber
```
// ES5
<script src="dist/ebabel-library.min.js"></script>
<script>
  var result = window['ebabel-library'].randomNumber(6).toInt()
</script>
```

```
// ES6+
import { randomNumber } from 'ebabel-library';

const result = randomNumber(6).toInt();
```

### License
This code is free to use for all purposes. For more details, see [GNU General Public License, version 3](LICENSE).


## Develop the library itself from source code

Fork the repository and once you have made your code changes, raise a pull request! Thanks in advance for any and all contributions.

### Build from source
```
npm install
npm run build
```

The build is for both development and production.

It's possible to only build development with `npm run build-dev` or production (no mapfile) with `npm run build-prod`.

There is another build command to analyze the production package and check which parts of the code weighs more than other parts with `npm run build-analyze`. This will open localhost:8888 where code parts can be checked.

### Unit tests
```
npm test
```

### Lint
```
npm run lint
```

### Generate source code documentation
```
npm run doc
```

Browse the html files from the generated `out` directory.

### Design principles
This library has no dependencies when executed in a browser. It's written with plain javascript and meant to be easily used in the context of a modern, standard compliant web browser.

Each function does just one thing and tries to do it well. 

Each function is indenpendent from other functions.

### Quotes

"Do one thing and do it well", [Sitepoint](https://www.sitepoint.com/design-and-build-your-own-javascript-library/).

"Do more with less", [Chimeremeze Ukah](https://www.codementor.io/chimeremezeukah/build-a-reusable-javascript-library-du1086d7l).

### npm and bower registries

Pushing a new tag is enough to update the bower registry, only the initial setup was required.

For npm, run `npm publish` to push a new tag version.
