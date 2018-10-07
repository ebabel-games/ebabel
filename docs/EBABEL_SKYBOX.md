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

