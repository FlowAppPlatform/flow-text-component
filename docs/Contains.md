## Flow Text Contains component
The component checks if a string contains another.

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
component.getProperty('TextContained').data = 'for';
```

*Then listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result should be true or false depending on whether the text contains the other
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

This is a sample use of the Flow Text Contains component. Check the [docs](./../docs/) on how to use other components