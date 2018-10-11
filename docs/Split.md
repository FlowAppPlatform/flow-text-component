## Flow Text Split component
The component splits a string into parts seperated by another. Emits the seperated parts of the string.

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
component.getProperty('Seperator').data = 'in';
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result is an array of the seperated parts
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

This is a sample use of the Flow Text Split component. Check the [docs](./../docs/) on how to use other components