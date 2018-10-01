# ebabel
[![Build Status](https://travis-ci.org/ebabel-eu/ebabel.svg?branch=master)](https://travis-ci.org/ebabel-eu/ebabel)

Library of re-useable game modules to build web browser HTML5 games.

## Install
```
npm install --save ebabel
```

## Generate this README.md document
```
npm run readme
```

## Contribute to ebabel game modules
First of all, thank you! Please see the [contributing guidelines](CONTRIBUTING.md) so we can start working together effectively.



<a name="boundingBox"></a>

## boundingBox(THREE, mesh)
`boundingBox`Calculate a 3D bounding box for a THREE.js mesh.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| THREE | <code>object</code> | Core library of THREE.js |
| mesh | <code>string</code> | 3D THREE.js object for a mesh that needs a bounding box calculated. |



<a name="countArrayElements"></a>

## countArrayElements(input)
`countArrayElements`Returns an object that counts how many times each element is present in a given array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>array</code> | Array where element occurences need to be counted. |



<a name="distance"></a>

## distance(i, j) ⇒ <code>number</code>
`distance`Calculate the distance in 3D space from point "i" x, y, and z coordinates to point "j" x, y, and z coordinates.

**Kind**: global function  
**Returns**: <code>number</code> - Distance between i and j.  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>array</code> | Array start position in 3D space e.g. [-10, 5.1, 3] |
| j | <code>array</code> | Array end position in 3D space e.g. [0, 15.1, -7] |



<a name="guid"></a>

## guid()
`guid`Returns a globally unique id string following the standard guid format.

**Kind**: global function  


<a name="Ido"></a>

## Ido()
`Ido`Returns a a string that commemorates how many days since Ido died.

**Kind**: global function  


<a name="light"></a>

## light(input) ⇒ <code>object</code>
`light`Setup a THREE.js PointLight and add it to the scene.

**Kind**: global function  
**Returns**: <code>object</code> - THREE.PointLight instance.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Parameters and dependencies. |
| input.THREE | <code>object</code> | Core library of THREE.js |
| input.scene | <code>object</code> | Scene object where the light will be added. |
| input.color | <code>hex</code> | Dominant color of the light in hexadecima format. Defaults to pure white 0xffffff. |
| input.position | <code>array</code> | 3D coordinates of where the light should be placed. Defaults to [1, 250, 1]. |
| input.name | <code>string</code> | Name of the light. Defaults to 'main-light'. |



<a name="preventXss"></a>

## preventXss(input)
`preventXss`Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags. |



<a name="random"></a>

## random(max, min) ⇒ <code>number</code>
`random`Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).

**Kind**: global function  
**Returns**: <code>number</code> - Integer between min and max (inclusively)  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | the maximum to be returned, should be an integer |
| min | <code>number</code> | the minimum to be returned, should be an integer |



<a name="randomList"></a>

## randomList(input)
`randomList`Returns the subset of a list of x elements from a larger source list.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Object with 2 properties: source and max. The source property is the array from which a max number of elements will be randomly selected. |



<a name="skybox"></a>

## skybox(input) ⇒ <code>object</code>
`Skybox`Setup a skybox mesh and add it to the scene.

**Kind**: global function  
**Returns**: <code>object</code> - Skybox mesh.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Parameters and dependencies. |
| input.THREE | <code>object</code> | Core library of THREE.js |
| input.scene | <code>object</code> | Scene object where the skybox will be added. |
| input.directions | <code>array</code> | Array of image paths for all skybox sides, by directions. |
| input.size | <code>number</code> | Size of the skybox. Defaults to 10000. |
| input.position | <code>array</code> | Position of the skybox as 3D coordinates. Defaults to [0, 0, 0]. |



