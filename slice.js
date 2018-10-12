const Flow = require('flow-platform-sdk');

/*
 *
 * The component returns a portion of a string specified by start and end indices
 *  
 */

class Slice extends Flow.Component {
  constructor() {

    super();
    this.name = 'Slice';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    let begin = new Flow.Property('StartIndex', 'number');
    begin.required = true;
    this.addProperty(begin);

    let end = new Flow.Property('EndIndex', 'number');
    end.required = true;
    this.addProperty(end);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'text'));

    this.addPort(done);

    // we perform operation here
    this.attachTask(function () {
      
      let text = this.getProperty('Text').data;
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = text.slice(
        this.getProperty('StartIndex').data,
        this.getProperty('EndIndex').data
      );
      port.emit();

      this.taskComplete();

    });

  }
}

module.exports = Slice;