## Flow Text Split component
The component splits a string into parts seperated by another and emits the seperated parts of the string.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Split component
const component = new Component.Split();
```

*Provide required parameters*

```javascript
// the text to split
component.getProperty('Text').data = 'Going forth into the deep.';
// the text seperating parts
component.getProperty('Split').data = 'in';
```

*Listen in for port emit events*
```javascript
component.getPort('Done').onEmit(function() {
  // the result is an array of the seperated parts
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

This is a sample use of the Flow Text Split component. Check the [docs](./../docs/) on how to use other components