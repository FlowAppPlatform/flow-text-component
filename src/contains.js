const Flow = require('flow-platform-sdk');

/*
 *
 * The component checks whether a string contains another and emits the result
 *  
 */

class Contains extends Flow.Component {
  constructor(id =null) {
    
    super(id);
    this.name = 'Contains';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('Contains', 'text');
    text.required = true;
    this.addProperty(text);

    this.addPort(new Flow.Port('Contains'));
    this.addPort(new Flow.Port('DoesNotContain'));

    // we perform operation here
    this.attachTask(function() {
      
      const textContained = this.getProperty('Contains').data;
      const text = this.getProperty('Text').data;
      
      const port = this.getPort(text.includes(textContained) ? 'Contains' : 'DoesNotContain');
      port.emit();
      
      this.taskComplete();
      
    });

  }
}

module.exports = Contains;