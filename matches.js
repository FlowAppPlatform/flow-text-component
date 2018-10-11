const Flow = require('flow-platform-sdk');

/*
 *
 * The component searches a string using a regular expression, returns an array of the matches
 *  
 */

class Matches extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Matches';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    // a regular expression object
    text = new Flow.Property('TextSearchedFor', 'object');
    text.required = true;
    this.addProperty(text);

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'list');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function() {
      let port = this.getPort('Success');
      try {
        let textMatchesedFor = this.getProperty('TextSearchedFor').data;
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.match(textMatchesedFor);
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'No matches found or an error occured while performing the search';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = Matches;