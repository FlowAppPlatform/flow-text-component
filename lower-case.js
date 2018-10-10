const Flow = require('flow-platform-sdk');

/*
 *
 * The class converts a string to lowercase
 *  
 */

class toLowerCase extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'To lower case';

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
        let text = this.getProperty('Text').data.toLocaleLowerCase();
        port.getProperty('Data').data = text;
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot convert text to lower case';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = toLowerCase;