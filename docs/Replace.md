## Flow Text Replace component
The component replaces parts of a string that match a regular expression with another. Emits the new string with replacements.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Replace component
const component = new Component.Replace();
```

*Provide required parameters*

```javascript
// the text to replace
component.getProperty('Text').data = 'Going forth into the deep.';
// the text to replace with
component.getProperty('Replacement').data = 'to';
// the regular expression to match
component.getProperty('Regex').data = /into/gi;
```

*Listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result is the new string with replacements
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

This is a sample use of the Flow Text Replace component. Check the [docs](./../docs/) on how to use other components