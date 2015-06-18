'use strict';

describe('TodoAppApp', function () {
  var React = require('react/addons');
  var TodoAppApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    TodoAppApp = require('components/TodoAppApp.js');
    component = React.createElement(TodoAppApp);
  });

  it('should create a new instance of TodoAppApp', function () {
    expect(component).toBeDefined();
  });
});
