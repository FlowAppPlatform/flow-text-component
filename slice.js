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

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'text');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function () {
      let port = this.getPort('Success');
      try {
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.slice(
          this.getProperty('StartIndex').data,
          this.getProperty('EndIndex').data
        );
      } catch (err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Cannot slice text';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = Slice;