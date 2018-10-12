## Flow Text Search component
The component searches a string using a regular expression and emits the index of the first match found.

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
component.getProperty('Search').data = /into/gi;
```

*Listen in for port emit events*
```javascript
component.getPort('Done').onEmit(function() {
  // the result is an array of the matches
  let result = component.getPort('Done').getProperty('Result').data;
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text Search component. Check the [docs](./../docs/) on how to use other components