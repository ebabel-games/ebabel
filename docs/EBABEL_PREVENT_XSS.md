<a name="preventXss"></a>

## preventXss(input) ⇒ <code>string</code>
`preventXss`Processes an input string to prevent Cross Site Scripting injection attacks (XSS). Returns a safe version of that input.

**Kind**: global function  
**Returns**: <code>string</code> - Cleaned string that shouldn't run any javascript code if displayed on a webpage.  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The user input string that needs to be sanitized, to remove the possibility of injecting script of other html tags. |

