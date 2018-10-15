## Flow Text Contains component
The component checks if a string contains another and emits the result.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Contains component
const component = new Component.Contains();
```

*Provide required parameters*

```javascript
// the text to check
component.getProperty('Text').data = 'Going forth into the deep.';
// the text contained
component.getProperty('Contains').data = 'for';
```

*Listen in for port emit events*
```javascript
component.getPort('Contains').onEmit(function() {
  // the text contains the other
});

component.getPort('DoesNotContain').onEmit(function() {
  // the text does not contain the other
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text Contains component. Check the [docs](./../docs/) on how to use other components