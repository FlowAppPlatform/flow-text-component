const Flow = require('flow-platform-sdk');

/*
 *
 * The component checks whether a string ends with another, returns boolean
 *  
 */

class EndsWith extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Ends With';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('TextEndedWith', 'text');
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
        let textEndedWith = this.getProperty('TextEndedWith').data;
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.endsWith(textEndedWith);
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot check text ended with in text';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = EndsWith;