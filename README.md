# Flow Text component
A component for common operations on strings designed using Flow SDK. The component is available in the npm registry.

*To use the component, install the package in your NodeJS project*

```
npm install flow-text-component --save
```

*Use the component as below*

```javascript
// require the component
const Component = require('flow-text-component');

// create instance of the Contains component for example
const component = new Component.Contains();
```

*Provide required parameters*

```javascript
component.getProperty('Text').data = 'Going forth into the deep.';
component.getProperty('TextContained').data = 'for';
```

*Then listen in for port emit events*
```javascript
component.getPort('Success').onEmit(function(){
  // operation occured succesfully
  // the result should be true for this case
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

This is a sample use of the Flow Text component. Check the [docs](./docs/) on how to use other components