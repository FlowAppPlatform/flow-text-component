## Flow Text Replace component
The component replaces parts of a string that match a regular expression with another. Emits the new string with replacements.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Replace component
const component = new Component.Replace();
```

*Provide required parameters*

```javascript
// the text to replace
component.getProperty('Text').data = 'Going forth into the deep.';
// the text to replace with
component.getProperty('Replacement').data = 'to';
// the regular expression to match
component.getProperty('Replace').data = /into/gi;
```

*Listen in for port emit events*
```javascript
component.getPort('Done').onEmit(function() {
  // the result is the new string with replacements
  let result = component.getPort('Done').getProperty('Result').data;
});
```

*Execute the component*
```javascript
// add the component to a graph before executing it
const Graph = require('flow-platform-sdk').Graph;
new Graph("graph-1").addComponent(component);

component.execute();
```

#### Conclusion

This is a sample use of the Flow Text Replace component. Check the [docs](./../docs/) on how to use other components