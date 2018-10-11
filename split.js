const Flow = require('flow-platform-sdk');

/*
 *
 * The component splits a string into bits seperated by another, returns an array of the bits
 *  
 */

class Split extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Split';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('Seperator', 'text');
    text.required = true;
    this.addProperty(text);

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'list');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function() {
      let port = this.getPort('Success');
      try {
        let seperator = this.getProperty('Seperator').data;
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.split(seperator);
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot split text';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = Split;