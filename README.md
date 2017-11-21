# ebabel-library
Library of re-useable game functions to build web browser HTML5 games.

Current status: not ready to be used yet, this code is being developed.

## Use for your own game

### Install as dependency for your own game
```
bower install ebabel-eu/ebabel-library
```

### Usage in your own game

See [demo/index.html](demos) for how to use this library.

#### randomNumber
```
<script src="dist/ebabel-library.js"></script>

<script>
  
</script>
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

### Unit tests
```
npm test
```

### Design principles
This library has no dependencies when executed in a browser. It's written with plain javascript and meant to be easily used in the context of a modern, standard compliant web browser.

Each function does just one thing and tries to do it well. 

Each function is indenpendent from other functions.

### Quotes

"Do one thing and do it well", [Sitepoint](https://www.sitepoint.com/design-and-build-your-own-javascript-library/).

"Do more with less", [Chimeremeze Ukah](https://www.codementor.io/chimeremezeukah/build-a-reusable-javascript-library-du1086d7l).
