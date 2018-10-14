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

