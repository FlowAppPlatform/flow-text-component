## Flow Text Search component
The component searches a string using a regular expression. Emits the index of the first match found.

*Use the component as below*

```javascript
// require the text component
const Component = require('flow-text-component');

// create instance of the Search component
const component = new Component.Search();
```

*Provide required parameters*

```javascript
// the text to search
component.getProperty('Text').data = 'Going forth into the deep.';
// the regular expression to match
component.getProperty('TextSearchedFor').data = /into/gi;
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

This is a sample use of the Flow Text Search component. Check the [docs](./../docs/) on how to use other components