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

