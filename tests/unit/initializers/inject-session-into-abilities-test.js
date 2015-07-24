import Ember from 'ember';
import { initialize } from '../../../initializers/inject-session-into-abilities';
import { module, test } from 'qunit';

var container, application;

module('Unit | Initializer | inject session into abilities', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});