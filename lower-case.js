const Flow = require('flow-platform-sdk');

/*
 *
 * The component converts a string to lower case
 *  
 */

class ToLowerCase extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'To lower case';

    const text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'text'));

    this.addPort(done);
    
    this.attachTask(function() {
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = this.getProperty('Text').data.toLocaleLowerCase();
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = ToLowerCase;