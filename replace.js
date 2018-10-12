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
    text = new Flow.Property('Replace', 'object');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'text'));

    this.addPort(done);

    this.attachTask(function() {
      
      let text = this.getProperty('Text').data;
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = text.replace(
        this.getProperty('Replace').data,
        this.getProperty('Replacement').data
      );
      port.emit();

      this.taskComplete();

    });

  }
}

module.exports = Replace;