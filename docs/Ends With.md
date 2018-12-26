## Flow Text EndsWith component
The component checks a string ends with another and emits the result.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the EndsWith component
const component = new Component.EndsWith();
```

*Provide required parameters*

```javascript
// the text to check
component.getProperty('Text').data = 'Going forth into the deep.';
// the text ended with
component.getProperty('EndsWith').data = 'for';
```

*Listen in for port emit events*
```javascript
component.getPort('EndsWith').onEmit(function() {
  // text ends with the other
});

component.getPort('DoesNotEndWith').onEmit(function() {
  // text does not end with the other
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

This is a sample use of the Flow Text EndsWith component. Check the [docs](./../docs/) on how to use other components