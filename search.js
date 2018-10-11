const Flow = require('flow-platform-sdk');

/*
 *
 * The component searches a string using a regular expression, returns index of the first match or -1 if not found
 *  
 */

class Search extends Flow.Component {
  constructor() {
    
    super();
    this.name = 'Search';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    // a regular expression object
    text = new Flow.Property('TextSearchedFor', 'object');
    text.required = true;
    this.addProperty(text);

    const success = new Flow.Port('Success');
    const error = new Flow.Port('Error');

    let data = new Flow.Property('Data', 'number');
    success.addProperty(data);

    data = new Flow.Property('Data', 'text');
    error.addProperty(data);

    this.addPort(success);
    this.addPort(error);

    // we perform operation here
    this.attachTask(function() {
      let port = this.getPort('Success');
      try {
        let textSearchedFor = this.getProperty('TextSearchedFor').data;
        let text = this.getProperty('Text').data;
        port.getProperty('Data').data = text.search(textSearchedFor);
      } catch(err) {
        port = this.getPort('Error');
        port.getProperty('Data').data = 'Error occured while performing the search';
      }
      port.emit();
      this.taskComplete();
    });

  }
}

module.exports = Search;