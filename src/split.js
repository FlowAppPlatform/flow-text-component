const Flow = require('flow-platform-sdk');

/*
 *
 * The component splits a string into bits seperated by another, returns an array of the bits
 *  
 */

class Split extends Flow.Component {
  constructor(id =null) {
    
    super(id);
    this.name = 'Split';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('Split', 'text');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'list'));

    this.addPort(done);

    this.attachTask(function() {
      
      let seperator = this.getProperty('Split').data;
      let text = this.getProperty('Text').data;
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = text.split(seperator);
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = Split;