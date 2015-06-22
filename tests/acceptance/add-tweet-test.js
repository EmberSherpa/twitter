import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'twitter/tests/helpers/start-app';

var application;

module('Acceptance | add tweet', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /add and adding a tweet', function(assert) {
  visit('/add');
  click('.btn.btn-primary.Post');
  fillIn('.form-control.textarea', 'This is a test tweet');
  fillIn('.form-control.user', '@zinyando');
  fillIn('.form-control.url', 'http://localhost:4200/');


  andThen(function() {
    assert.equal(currentURL(), '/add');
  });
});
