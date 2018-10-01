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

