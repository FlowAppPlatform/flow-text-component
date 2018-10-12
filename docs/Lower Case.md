## Flow Text ToLowerCase component
The component converts a string to lower case and emits the converted lower case text.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the ToLowerCase component
const component = new Component.ToLowerCase();
```

*Provide required parameters*

```javascript
// the text to convert to lower case
component.getProperty('Text').data = 'Going forth into the deep.';
```

*Listen in for port emit events*
```javascript
component.getPort('Done').onEmit(function(){
  // the result is the converted lower case text
  let result = component.getPort('Done').getProperty('Result').data;
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text ToLowerCase component. Check the [docs](./../docs/) on how to use other components