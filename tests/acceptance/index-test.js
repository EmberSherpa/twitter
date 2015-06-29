import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'twitter/tests/helpers/start-app';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  mockAdapter({
    tweets: [
      {id: 1, title: "First tweet"},
      {id: 2, title: "Another great tweet"},
      {id: 3, title: "Awesome tweet number 3"}
    ]
  });
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
    assert.equal($('.tweet').length, 3, "Three tweets are displayed");
  });
  return pauseTest();
});
