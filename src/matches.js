const Flow = require('flow-platform-sdk');

/*
 *
 * The component searches a string using a regular expression, returns an array of the matches
 *  
 */

class Matches extends Flow.Component {
  constructor(id =null) {
    
    super(id);
    this.name = 'Matches';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    // a regular expression object
    text = new Flow.Property('Match', 'object');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'list'));

    this.addPort(done);

    this.attachTask(function() {
      
      let match = this.getProperty('Match').data;
      let text = this.getProperty('Text').data;
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = text.match(match);
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = Matches;