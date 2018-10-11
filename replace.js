const Flow = require('flow-platform-sdk');

/*
 *
 * The component replaces bits of a string that match a regular expression, returns a new string with the replacements
 *  
 */

class Replace extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Replace';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('Replacement', 'text');
    text.required = true;
    this.addProperty(text);

    // a regular expression object
    text = new Flow.Property('Regex', 'object');
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
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.replace(
          this.getProperty('Regex').data,
          this.getProperty('Replacement').data
        );
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot replace bits in the text';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = Replace;