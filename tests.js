const assert = require('assert');
const Component = require('./index');

describe(`Component Tests
`, function() {
  it('Component should emit Contains', function(done) {
    const component = new Component.Contains();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Contains').data = 'We';
    component.getPort('Contains').onEmit(function() {
      done();
    });
    component.getPort('DoesNotContain').onEmit(function() {
      done(new Error('Does not contain emitted'));
    });
    component.execute();
  });
  it('Component should emit DoesNotEndWith', function(done) {
    const component = new Component.EndsWith();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('EndsWith').data = 'Wee';
    component.getPort('EndsWith').onEmit(function() {
      done(new Error('Ends with emitted'));
    });
    component.getPort('DoesNotEndWith').onEmit(function() {
      done();
    });
    component.execute();
  });
  it('Component should emit StartsWith', function(done) {
    const component = new Component.StartsWith();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('StartsWith').data = 'We';
    component.getPort('StartsWith').onEmit(function() {
      done();
    });
    component.getPort('DoesNotStartWith').onEmit(function() {
      done(new Error('Does not start with emitted'));
    });
    component.execute();
  });
  it('Component should emit `we chat`', function(done) {
    const component = new Component.ToLowerCase();
    component.getProperty('Text').data = 'We Chat';
    component.getPort('Done').onEmit(function() {
      assert.equal(
        component.getPort('Done').getProperty('Result').data,
        'we chat'
      );
      done();
    });
    component.execute();
  });
  it('Component should emit `WE CHAT`', function(done) {
    const component = new Component.ToUpperCase();
    component.getProperty('Text').data = 'We Chat';
    component.getPort('Done').onEmit(function() {
      assert.equal(
        component.getPort('Done').getProperty('Result').data,
        'WE CHAT'
      );
      done();
    });
    component.execute();
  });
  it(`Component should emit '["W","C"]'`, function(done) {
    const component = new Component.Matches();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Match').data = /[A-Z]/g;
    component.getPort('Done').onEmit(function() {
      assert.deepEqual(
        component.getPort('Done').getProperty('Result').data,
        [ 'W', 'C' ]
      );
      done();
    });
    component.execute();
  });
  it(`Component should emit '3'`, function(done) {
    const component = new Component.Search();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Search').data = /[Ch]/g;
    component.getPort('Done').onEmit(function() {
      assert.equal(
        component.getPort('Done').getProperty('Result').data,
        3
      );
      done();
    });
    component.execute();
  });
  it(`Component should emit 'We Lout'`, function(done) {
    const component = new Component.Replace();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Replace').data = /Chat/gi;
    component.getProperty('Replacement').data = 'Lout';
    component.getPort('Done').onEmit(function() {
      assert.equal(
        component.getPort('Done').getProperty('Result').data,
        'We Lout'
      );
      done();
    });
    component.execute();
  });
  it(`Component should emit '["We","hat"]'`, function(done) {
    const component = new Component.Split();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('Split').data = ' C';
    component.getPort('Done').onEmit(function() {
      assert.deepEqual(
        component.getPort('Done').getProperty('Result').data,
        ['We','hat']
      );
      done();
    });
    component.execute();
  });
  it(`Component should emit ' Cha'`, function(done) {
    const component = new Component.Slice();
    component.getProperty('Text').data = 'We Chat';
    component.getProperty('StartIndex').data = 2;
    component.getProperty('EndIndex').data = 5;
    component.getPort('Done').onEmit(function() {
      assert.equal(
        component.getPort('Done').getProperty('Result').data,
        ' Ch'
      );
      done();
    });
    component.execute();
  });
});