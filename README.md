# ebabel
[![Coverage Status](https://coveralls.io/repos/github/ebabel-eu/ebabel/badge.svg?branch=master)](https://coveralls.io/github/ebabel-eu/ebabel?branch=master)
Library of re-useable game modules to build web browser HTML5 games.

## Install
```
npm install --save ebabel
```

## Usage
This library is to be used with ES6+

```
const { random, guid } = require('ebabel');

const diceResult = random(6);
const id = guid();
```

Some modules use THREE.js to create 3D game elements, like a Skybox and a Light.

```
const { light, skybox } = require('ebabel');

light({ THREE, scene });
skybox({ THREE, scene });
```

## Develop the library itself
For more details, see [Contributing guidelines](CONTRIBUTING.md)
