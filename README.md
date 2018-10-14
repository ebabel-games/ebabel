# ebabel
[![Build Status](https://travis-ci.org/ebabel-games/ebabel.svg?branch=master)](https://travis-ci.org/ebabel-games/ebabel)

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



<a name="audio"></a>

## audio(input) ⇒ <code>Object</code>
`ebabelAudio`Play music or positional sound.

**Kind**: global function  
**Returns**: <code>Object</code> - Multiple objects and properties: camera, url, listener, sound, and audioLoader.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Object with properties to specify theme music parameters. |
| input.THREE | <code>Object</code> | Library THREE.js |
| input.camera | <code>Object</code> | THREE.js camera instance. |
| input.volume | <code>number</code> | Loudness of the music, ranges from 0 to 1. |
| input.url | <code>string</code> | Path to the theme music file. |
| input.distance | <code>number</code> | If this is set we are using positional audio. Distance at which the sound is audible. |
| input.name | <code>string</code> | Unique name to identify the theme music and listener in THREE.js camera children. |
| input.loop | <code>boolean</code> | Play theme music in a loop. False by default. |
| input.autostart | <code>boolean</code> | Stars playing the music as soon as it loads. False by default. |



## Constants

<dl>
<dt><a href="#mockEG">mockEG</a></dt>
<dd><p><code>EG</code>
Mock EG (eBabel Games) for unit testing purposes.</p>
</dd>
<dt><a href="#mockTHREE">mockTHREE</a></dt>
<dd><p><code>mockTHREE</code>
Mock THREE.js for unit testing purposes.</p>
</dd>
<dt><a href="#mockTHREEx">mockTHREEx</a></dt>
<dd><p><code>mockTHREEx</code>
Mock THREEx.js for unit testing purposes.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#hexStringToInt">hexStringToInt(input)</a> ⇒ <code>number</code></dt>
<dd><p><code>hexStringToInt</code>
Convert string hex to integer.</p>
</dd>
</dl>

<a name="mockEG"></a>

## mockEG
`EG`Mock EG (eBabel Games) for unit testing purposes.

**Kind**: global constant  
<a name="mockTHREE"></a>

## mockTHREE
`mockTHREE`Mock THREE.js for unit testing purposes.

**Kind**: global constant  
<a name="mockTHREEx"></a>

## mockTHREEx
`mockTHREEx`Mock THREEx.js for unit testing purposes.

**Kind**: global constant  
<a name="hexStringToInt"></a>

## hexStringToInt(input) ⇒ <code>number</code>
`hexStringToInt`Convert string hex to integer.

**Kind**: global function  
**Returns**: <code>number</code> - Integer conversion.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | Input hexadecimal color in string format, i.e. #ff0099 |



<a name="light"></a>

## light(input) ⇒ <code>Object</code>
`light`
Setup a THREE.js PointLight and add it to the scene.

**Kind**: global function  
**Returns**: <code>Object</code> - THREE.PointLight instance.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Parameters and dependencies. |
| input.THREE | <code>Object</code> | Core library of THREE.js |
| input.scene | <code>Object</code> | Scene object where the light will be added. |
| input.color | <code>hex</code> | Dominant color of the light in hexadecima format. Defaults to pure white 0xffffff. |
| input.position | <code>Array</code> | 3D coordinates of where the light should be placed. Defaults to [1, 250, 1]. |
| input.name | <code>String</code> | Name of the light. Defaults to 'main-light'. |



<a name="textSprite"></a>

## textSprite(input) ⇒ <code>Object</code>
`ebabelTextSprite`Create a 2D text sprite that can be added to any THREE.js mesh.

**Kind**: global function  
**Returns**: <code>Object</code> - THREE.js sprite that can be added to a mesh.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Collection of input properties. |
| input.THREE | <code>Object</code> | Library THREE.js object. |
| input.canvas | <code>Object</code> | DOM canvas, i.e. document.createElement('canvas') |
| input.text | <code>string</code> | String of text to display above a sprite. |



## Functions

<dl>
<dt><a href="#updatePlayerPositionRotation">updatePlayerPositionRotation(camera, dataStore)</a></dt>
<dd><p><code>updatePlayerPositionRotation</code>
Update the position and rotation of the current player camera.</p>
</dd>
<dt><a href="#keyboardControls">keyboardControls(dataStore)</a></dt>
<dd><p><code>keyboardControls</code>
Update the position and rotation of the current player camera based on keyboard keys pressed up or down.</p>
</dd>
</dl>

<a name="updatePlayerPositionRotation"></a>

## updatePlayerPositionRotation(camera, dataStore)
`updatePlayerPositionRotation`Update the position and rotation of the current player camera.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| camera | <code>Object</code> | THREE.js camera. |
| dataStore | <code>Object</code> | Central store of state data. |

<a name="keyboardControls"></a>

## keyboardControls(dataStore)
`keyboardControls`Update the position and rotation of the current player camera based on keyboard keys pressed up or down.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dataStore | <code>Object</code> | Central store of state data. |



## Functions

<dl>
<dt><a href="#skybox">skybox(input)</a> ⇒ <code>Object</code></dt>
<dd><p><code>Skybox</code>
Setup a skybox mesh and add it to the scene.</p>
</dd>
<dt><a href="#userData">userData(size, position)</a></dt>
<dd><p><code>userData</code>
Setup skybox default userData.</p>
</dd>
</dl>

<a name="skybox"></a>

## skybox(input) ⇒ <code>Object</code>
`Skybox`
Setup a skybox mesh and add it to the scene.

**Kind**: global function  
**Returns**: <code>Object</code> - Skybox mesh.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Parameters and dependencies. |
| input.THREE | <code>Object</code> | Core library of THREE.js |
| input.scene | <code>Object</code> | Scene object where the skybox will be added. |
| input.directions | <code>Array</code> | Array of image paths for all skybox sides, by directions. |
| input.size | <code>Number</code> | Size of the skybox. Defaults to 10000. |
| input.position | <code>Array</code> | Position of the skybox as 3D coordinates. Defaults to [0, 0, 0]. |

<a name="userData"></a>

## userData(size, position)
`userData`
Setup skybox default userData.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>Number</code> | Length of each side of the skybox cube. |
| position | <code>Array</code> | Coordinates where the skybox is to be positioned: Array of 3 numbers. |



## Functions

<dl>
<dt><a href="#countArrayElements">countArrayElements(input)</a></dt>
<dd><p><code>countArrayElements</code>
Returns an object that counts how many times each element is present in a given array.</p>
</dd>
<dt><a href="#deepCopy">deepCopy(input)</a> ⇒ <code>Object</code></dt>
<dd><p><code>deepCopy</code>
Make a deep copy of an object, i.e. breaks the pointers, so that updating the copy will not change the original.</p>
</dd>
<dt><a href="#dice">dice()</a> ⇒ <code>number</code></dt>
<dd><p><code>dice</code>
Throw 1 die.</p>
</dd>
<dt><a href="#distance">distance(i, j)</a> ⇒ <code>number</code></dt>
<dd><p><code>distance</code>
Calculate the distance in 3D space from point &quot;i&quot; x, y, and z coordinates to point &quot;j&quot; x, y, and z coordinates.</p>
</dd>
<dt><a href="#guid">guid()</a> ⇒ <code>string</code></dt>
<dd><p><code>guid</code>
Returns a globally unique id string following the standard guid format.</p>
</dd>
<dt><a href="#Ido">Ido()</a></dt>
<dd><p><code>Ido</code>
Returns a a string that commemorates how many days since Ido died.</p>
</dd>
<dt><a href="#positive">positive(input)</a> ⇒ <code>number</code></dt>
<dd><p><code>positive</code>
Computes the positive rounded up value of the input.</p>
</dd>
<dt><a href="#preventXss">preventXss(input)</a> ⇒ <code>string</code></dt>
<dd><p><code>preventXss</code>
Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.</p>
</dd>
<dt><a href="#randomList">randomList(input)</a> ⇒ <code>object</code></dt>
<dd><p><code>randomList</code>
Returns the subset of a list of x elements from a larger source list.</p>
</dd>
<dt><a href="#randomPosOrNeg">randomPosOrNeg(max)</a> ⇒ <code>number</code></dt>
<dd><p><code>randomPosOrNeg</code>
Calculates a positive or negative random number.</p>
</dd>
<dt><a href="#randomPosition">randomPosition(size)</a> ⇒ <code>array</code></dt>
<dd><p><code>randomPosition</code>
Calculate new coordinates in a 3D space randomly to generate a new position.</p>
</dd>
<dt><a href="#random">random(max, min)</a> ⇒ <code>number</code></dt>
<dd><p><code>random</code>
Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).</p>
</dd>
<dt><a href="#reducedDistance">reducedDistance(i, j, r)</a> ⇒ <code>array</code></dt>
<dd><p><code>reducedDistance</code>
Calculate new coordinates in a 3D space for point &quot;i&quot; in order
to get closer to point &quot;j&quot; reducing the distance between the two points by &quot;r&quot; amount.</p>
</dd>
<dt><a href="#trait">trait()</a> ⇒ <code>number</code></dt>
<dd><p><code>trait</code>
Throw 3 dices.</p>
</dd>
</dl>

<a name="countArrayElements"></a>

## countArrayElements(input)
`countArrayElements`
Returns an object that counts how many times each element is present in a given array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>array</code> | Array where element occurences need to be counted. |

<a name="deepCopy"></a>

## deepCopy(input) ⇒ <code>Object</code>
`deepCopy`
Make a deep copy of an object, i.e. breaks the pointers, so that updating the copy will not change the original.

**Kind**: global function  
**Returns**: <code>Object</code> - Copy of the input onject.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Object</code> | Original object that needs to be copied. |

<a name="dice"></a>

## dice() ⇒ <code>number</code>
`dice`
Throw 1 die.

**Kind**: global function  
**Returns**: <code>number</code> - Return a random integer from 1 to 6.  
<a name="distance"></a>

## distance(i, j) ⇒ <code>number</code>
`distance`
Calculate the distance in 3D space from point "i" x, y, and z coordinates to point "j" x, y, and z coordinates.

**Kind**: global function  
**Returns**: <code>number</code> - Distance between i and j.  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>array</code> | Array start position in 3D space e.g. [-10, 5.1, 3] |
| j | <code>array</code> | Array end position in 3D space e.g. [0, 15.1, -7] |

<a name="guid"></a>

## guid() ⇒ <code>string</code>
`guid`
Returns a globally unique id string following the standard guid format.

**Kind**: global function  
**Returns**: <code>string</code> - Guid of 36 characters, including hyphens.  
<a name="Ido"></a>

## Ido()
`Ido`
Returns a a string that commemorates how many days since Ido died.

**Kind**: global function  
<a name="positive"></a>

## positive(input) ⇒ <code>number</code>
`positive`
Computes the positive rounded up value of the input.

**Kind**: global function  
**Returns**: <code>number</code> - Positive value of the input number.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>number</code> | Number to be converted into positive. |

<a name="preventXss"></a>

## preventXss(input) ⇒ <code>string</code>
`preventXss`
Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.

**Kind**: global function  
**Returns**: <code>string</code> - Cleaned string that shouldn't run any javascript code if displayed on a webpage.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags. |

<a name="randomList"></a>

## randomList(input) ⇒ <code>object</code>
`randomList`
Returns the subset of a list of x elements from a larger source list.

**Kind**: global function  
**Returns**: <code>object</code> - 2 arrays in an object: list and rest.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>object</code> | Input properties: source and max. |
| input.source | <code>array</code> | The source property is the array from which a max number of elements will be randomly selected. |
| input.max | <code>number</code> | Number of elements that will be randomly selected from input.source |

<a name="randomPosOrNeg"></a>

## randomPosOrNeg(max) ⇒ <code>number</code>
`randomPosOrNeg`
Calculates a positive or negative random number.

**Kind**: global function  
**Returns**: <code>number</code> - Positive or negative number randomly generated.  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | Maximum value that can be generated. |

<a name="randomPosition"></a>

## randomPosition(size) ⇒ <code>array</code>
`randomPosition`
Calculate new coordinates in a 3D space randomly to generate a new position.

**Kind**: global function  
**Returns**: <code>array</code> - Array of generated position coordinates.  

| Param | Type | Description |
| --- | --- | --- |
| size | <code>array</code> | Array of 3 numbers for the width, height and depth, respectively. |

<a name="random"></a>

## random(max, min) ⇒ <code>number</code>
`random`
Returns a random integer number from 1 to 100 or from min to max (min is non-inclusive).

**Kind**: global function  
**Returns**: <code>number</code> - Integer between min and max (inclusively)  

| Param | Type | Description |
| --- | --- | --- |
| max | <code>number</code> | the maximum to be returned, should be an integer |
| min | <code>number</code> | the minimum to be returned, should be an integer |

<a name="reducedDistance"></a>

## reducedDistance(i, j, r) ⇒ <code>array</code>
`reducedDistance`
Calculate new coordinates in a 3D space for point "i" in order
to get closer to point "j" reducing the distance between the two points by "r" amount.

**Kind**: global function  
**Returns**: <code>array</code> - Array of coordinates the i position should get to in order to get closer to j.  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>array</code> | Array of 3 numbers for the coordinates x, y, z of the source point. |
| j | <code>array</code> | Array of 3 numbers for the coordicates x, y, z of the target point. |
| r | <code>number</code> | Number by which the distance between i and j needs to be reduced. |

<a name="trait"></a>

## trait() ⇒ <code>number</code>
`trait`
Throw 3 dices.

**Kind**: global function  
**Returns**: <code>number</code> - Return a random integer from 3 to 18.  


<a name="boundingBox"></a>

## boundingBox(THREE, mesh)
`boundingBox`
Calculate a 3D bounding box for a THREE.js mesh.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| THREE | <code>object</code> | Core library of THREE.js |
| mesh | <code>string</code> | 3D THREE.js object for a mesh that needs a bounding box calculated. |



