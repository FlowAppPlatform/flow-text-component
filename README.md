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
// these are required for the Contains component
component.getProperty('Text').data = 'Going forth into the deep.';
component.getProperty('Contains').data = 'for';
```

*Then listen in for port emit events*
```javascript
component.getPort('Contains').onEmit(function() {
  // the text contains the other
});

component.getPort('DoesNotContain').onEmit(function() {
  // the text does not contain the other
});

// execute the component
component.execute();
```

#### Conclusion

This is a sample use of the Flow Text component. Check the [docs](./docs/) on how to use other components