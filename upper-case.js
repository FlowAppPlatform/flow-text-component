const Flow = require('flow-platform-sdk');

/*
 *
 * The component converts a string to upper case
 *  
 */

class toUpperCase extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'To upper case';

    const text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'text');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function() {
      let port = this.getPort('Success');
      try {
        let text = this.getProperty('Text').data.toLocaleUpperCase();
        port.getProperty('Data').data = text;
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot convert text to upper case';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = toUpperCase;