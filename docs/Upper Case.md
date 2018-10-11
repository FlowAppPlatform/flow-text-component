## Flow Text ToUpperCase component
The component converts a string to upper case. Emits the converted upper case text.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the ToUpperCase component
const component = new Component.ToUpperCase();
```

*Provide required parameters*

```javascript
// the text to convert to upper case
component.getProperty('Text').data = 'Going forth into the deep.';
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result is the converted upper case text
  let result = component.getPort('Success').getProperty('Data').data;
});

component.getPort('Error').onEmit(function(){
  // an error occured
  let err = component.getPort('Error').getProperty('Data').data;
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text ToUpperCase component. Check the [docs](./../docs/) on how to use other components