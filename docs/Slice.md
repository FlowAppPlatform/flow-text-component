## Flow Text Slice component
The component retrieves a portion of a string between two indices. Emits the portion of the string between the indices.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Slice component
const component = new Component.Slice();
```

*Provide required parameters*

```javascript
// the text to retrieve a portion from
component.getProperty('Text').data = 'Going forth into the deep.';
// the index to start at
component.getProperty('StartIndex').data = 3;
// the index to end at
component.getProperty('EndIndex').data = 13;
```

*Listen in for port emit events*
```javascript
component.getPort('Done').onEmit(function() {
  // the result is the portion of the string between the indices
  let result = component.getPort('Done').getProperty('Result').data;
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text Slice component. Check the [docs](./../docs/) on how to use other components