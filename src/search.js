const Flow = require('flow-platform-sdk');

/*
 *
 * The component searches a string using a regular expression, returns index of the first match or -1 if not found
 *  
 */

class Search extends Flow.Component {
  constructor(id =null) {
    
    super(id);
    this.name = 'Search';

    let text = new Flow.Property('Text', 'text');
    text.required = true;
    this.addProperty(text);

    // a regular expression object
    text = new Flow.Property('Search', 'object');
    text.required = true;
    this.addProperty(text);

    const done = new Flow.Port('Done');
    done.addProperty(new Flow.Property('Result', 'number'));

    this.addPort(done);

    this.attachTask(function() {
      
      let textSearchedFor = this.getProperty('Search').data;
      let text = this.getProperty('Text').data;
      
      let port = this.getPort('Done');
      port.getProperty('Result').data = text.search(textSearchedFor);
      port.emit();
      
      this.taskComplete();

    });

  }
}

module.exports = Search;