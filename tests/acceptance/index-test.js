import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'twitter/tests/helpers/start-app';
import TestAdapter from '../helpers/test-adapter';
import {stubResolver} from '../helpers/container';
import {storePush} from '../helpers/test-adapter';
import DS from 'ember-data';

var application;

module('Acceptance | index', {
  beforeEach: function() {
    application = startApp({}, function(app){
      stubResolver(app, 'adapter:application', TestAdapter);
    });
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  storePush(application, {
    data: [
      {id: 1, type: "tweet", attributes: { tweetText: "First tweet", category: "Post", url: "http://localhost:4200/add", user: "@anon", hashtags: "#emberjs" }},
      {id: 2, type: "tweet", attributes: { tweetText: "Another great tweet", category: "Announcement", url: "http://localhost:4200/add", user: "@anon", hashtags: "#emberjs" }},
      {id: 3, type: "tweet", attributes: { tweetText: "Awesome tweet number 3",  category: "Addon", url: "http://localhost:4200/add", user: "@anon", hashtags: "#emberjs" }}
    ]
  });
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/');
    // APPROVE button visible
    // DELETE button visible
    // TWEET Text
    assert.equal($('.tweet').length, 3, "Three tweets are displayed");
  });
});
