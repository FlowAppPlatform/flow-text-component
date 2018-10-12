const Flow = require('flow-platform-sdk');

/*
 *
 * The component checks whether a string starts with another and emits the result
 *  
 */

class StartsWith extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Starts With';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    text = new Flow.Property('StartsWith', 'text');
    text.required = true;
    this.addProperty(text);

    this.addPort(new Flow.Port('StartsWith'));
    this.addPort(new Flow.Port('DoesNotStartWith'));

    this.attachTask(function() {
      
      let textStartedWith = this.getProperty('StartsWith').data;
      let text = this.getProperty('Text').data;
      
      let port = this.getPort(text.startsWith(textStartedWith) ? 'StartsWith' : 'DoesNotStartWith');
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = StartsWith;