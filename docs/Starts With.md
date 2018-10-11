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
component.getProperty('TextStartedWith').data = 'for';
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result should be true or false depending on whether the text starts with the other
  // this case should return false
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

This is a sample use of the Flow Text StartsWith component. Check the [docs](./../docs/) on how to use other components