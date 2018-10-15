const Flow = require('flow-platform-sdk');

/*
 *
 * The component converts a string to upper case
 *  
 */

class ToUpperCase extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'To upper case';

    const text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'text'));

    this.addPort(done);

    this.attachTask(function() {
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = this.getProperty('Text').data.toLocaleUpperCase();
      port.emit();

      this.taskComplete();

    });

  }
}

module.exports = ToUpperCase;