## Flow Text StartsWith component
The component checks a string starts with another. Emits true if the string starts with another, otherwise it emits false.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the StartsWith component
const component = new Component.StartsWith();
```

*Provide required parameters*

```javascript
// the text to check
component.getProperty('Text').data = 'Going forth into the deep.';
// the text started with
component.getProperty('StartsWith').data = 'for';
```

*Listen in for port emit events*
```javascript
component.getPort('StartsWith').onEmit(function() {
  // text starts with the other
});

component.getPort('DoesNotStartWith').onEmit(function() {
  // text does not start with the other
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text StartsWith component. Check the [docs](./../docs/) on how to use other components