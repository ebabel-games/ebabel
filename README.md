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



<a name="distance"></a>

## distance(i, j) ⇒ <code>number</code>
`distance`Calculate the distance in 3D space from point "i" x, y, and z coordinates to point "j" x, y, and z coordinates.

**Kind**: global function  
**Returns**: <code>number</code> - Distance between i and j.  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>array</code> | Array start position in 3D space e.g. [-10, 5.1, 3] |
| j | <code>array</code> | Array end position in 3D space e.g. [0, 15.1, -7] |



<a name="Ido"></a>

## Ido()
`Ido`Returns a a string that commemorates how many days since Ido died.

**Kind**: global function  


<a name="guid"></a>

## guid() ⇒ <code>string</code>
`guid`Returns a globally unique id string following the standard guid format.

**Kind**: global function  
**Returns**: <code>string</code> - Guid of 36 characters, including hyphens.  


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



<a name="random"></a>

## random(max, min) ⇒ <code>number</code>
`random`Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).

**Kind**: global function  
**Returns**: <code>number</code> - Integer between min and max (inclusively)  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | the maximum to be returned, should be an integer |
| min | <code>number</code> | the minimum to be returned, should be an integer |



## Constants

<dl>
<dt><a href="#mockTHREEx">mockTHREEx</a></dt>
<dd><p><code>mockTHREEx</code>
Mock THREEx.js for unit testing purposes.</p>
</dd>
<dt><a href="#mockTHREE">mockTHREE</a></dt>
<dd><p><code>mockTHREE</code>
Mock THREE.js for unit testing purposes.</p>
</dd>
<dt><a href="#mockDataStore">mockDataStore</a></dt>
<dd><p><code>dataStore</code>
Mock dataStore for unit testing purposes.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#hexStringToInt">hexStringToInt(input)</a> ⇒ <code>number</code></dt>
<dd><p><code>hexStringToInt</code>
Convert string hex to integer.</p>
</dd>
</dl>

<a name="mockTHREEx"></a>

## mockTHREEx
`mockTHREEx`Mock THREEx.js for unit testing purposes.

**Kind**: global constant  
<a name="mockTHREE"></a>

## mockTHREE
`mockTHREE`Mock THREE.js for unit testing purposes.

**Kind**: global constant  
<a name="mockDataStore"></a>

## mockDataStore
`dataStore`Mock dataStore for unit testing purposes.

**Kind**: global constant  
<a name="hexStringToInt"></a>

## hexStringToInt(input) ⇒ <code>number</code>
`hexStringToInt`Convert string hex to integer.

**Kind**: global function  
**Returns**: <code>number</code> - Integer conversion.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Input hexadecimal color in string format, i.e. #ff0099 |



<a name="countArrayElements"></a>

## countArrayElements(input)
`countArrayElements`Returns an object that counts how many times each element is present in a given array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>array</code> | Array where element occurences need to be counted. |





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



<a name="randomList"></a>

## randomList(input) ⇒ <code>object</code>
`randomList`Returns the subset of a list of x elements from a larger source list.

**Kind**: global function  
**Returns**: <code>object</code> - 2 arrays in an object: list and rest.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Input properties: source and max. |
| input.source | <code>array</code> | The source property is the array from which a max number of elements will be randomly selected. |
| input.max | <code>number</code> | Number of elements that will be randomly selected from input.source |



<a name="preventXss"></a>

## preventXss(input) ⇒ <code>string</code>
`preventXss`Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.

**Kind**: global function  
**Returns**: <code>string</code> - Cleaned string that shouldn't run any javascript code if displayed on a webpage.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags. |



