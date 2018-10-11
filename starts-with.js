const Flow = require('flow-platform-sdk');

/*
 *
 * The component checks whether a string starts with another, returns boolean
 *  
 */

class StartsWith extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Starts With';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('TextStartedWith', 'text');
    text.required = true;
    this.addProperty(text);

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'boolean');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function() {
      let port = this.getPort('Success');
      try {
        let textStartedWith = this.getProperty('TextStartedWith').data;
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.startsWith(textStartedWith);
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot check text started with in text';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = StartsWith;