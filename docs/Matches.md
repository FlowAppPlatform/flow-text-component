## Flow Text Matches component
The component finds matches to a regular expression in a string. Emits an array of the matches found.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Matches component
const component = new Component.Matches();
```

*Provide required parameters*

```javascript
// the text to search
component.getProperty('Text').data = 'Going forth into the deep.';
// the regular expression to match
component.getProperty('TextSearchedFor').data = /[A-Z]/g;
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result is an array of the matches
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

This is a sample use of the Flow Text Matches component. Check the [docs](./../docs/) on how to use other components