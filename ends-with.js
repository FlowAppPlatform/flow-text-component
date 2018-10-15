const Flow = require('flow-platform-sdk');

/*
 *
 * The component checks whether a string ends with another and emits the result
 *  
 */

class EndsWith extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Ends With';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('EndsWith', 'text');
    text.required = true;
    this.addProperty(text);

    this.addPort(new Flow.Port('EndsWith'));
    this.addPort(new Flow.Port('DoesNotEndWith'));

    this.attachTask(function() {

      let textEndedWith = this.getProperty('EndsWith').data;
      let text = this.getProperty('Text').data;
      
      let port = this.getPort(text.endsWith(textEndedWith) ? 'EndsWith' : 'DoesNotEndWith');
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = EndsWith;