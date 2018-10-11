const assert = require('assert');
const Component = require('./index');

describe(`Component Tests
`, function() {
  it('Component should emit True', function(done) {
    const component = new Component.Contains();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('TextContained').data = 'We';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        true
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it('Component should emit False', function(done) {
    const component = new Component.EndsWith();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('TextEndedWith').data = 'Wee';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        false
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it('Component should emit True', function(done) {
    const component = new Component.StartsWith();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('TextStartedWith').data = 'We';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        true
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it('Component should emit `we chat`', function(done) {
    const component = new Component.ToLowerCase();
    component.getProperty('Text').data = 'We Chat';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        'we chat'
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it('Component should emit `WE CHAT`', function(done) {
    const component = new Component.ToUpperCase();
    component.getProperty('Text').data = 'We Chat';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        'WE CHAT'
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it(`Component should emit '["W","C"]'`, function(done) {
    const component = new Component.Matches();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('TextSearchedFor').data = /[A-Z]/g;
    component.getPort('Success').onEmit(function() {
      assert.deepEqual(
        component.getPort('Success').getProperty('Data').data,
        [ 'W', 'C' ]
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it(`Component should emit '3'`, function(done) {
    const component = new Component.Search();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('TextSearchedFor').data = /[Ch]/g;
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        3
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it(`Component should emit 'We Lout'`, function(done) {
    const component = new Component.Replace();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Regex').data = /Chat/gi;
    component.getProperty('Replacement').data = 'Lout';
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        'We Lout'
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it(`Component should emit '["We","hat"]'`, function(done) {
    const component = new Component.Split();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Seperator').data = ' C';
    component.getPort('Success').onEmit(function() {
      assert.deepEqual(
        component.getPort('Success').getProperty('Data').data,
        ['We','hat']
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
  it(`Component should emit ' Cha'`, function(done) {
    const component = new Component.Slice();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('StartIndex').data = 2;
    component.getProperty('EndIndex').data = 5;
    component.getPort('Success').onEmit(function() {
      assert.equal(
        component.getPort('Success').getProperty('Data').data,
        ' Ch'
      );
      done();
    });
    component.getPort('Error').onEmit(function() {
      done(new Error('Error occurred'));
    });
    component.execute();
  });
});