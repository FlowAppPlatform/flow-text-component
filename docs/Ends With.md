## Flow Text EndsWith component
The component checks a string ends with another. Emits true if the string ends with another, otherwise it emits false.

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
component.getProperty('TextEndedWith').data = 'for';
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result should be true or false depending on whether the text ends with the other
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

This is a sample use of the Flow Text EndsWith component. Check the [docs](./../docs/) on how to use other components