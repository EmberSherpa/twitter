import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.authenticatedRoute('add');
  this.authenticatedRoute('users');
  this.authenticatedRoute('edit', { path: '/:tweet_id/edit' });
});
