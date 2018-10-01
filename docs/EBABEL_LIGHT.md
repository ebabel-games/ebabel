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

