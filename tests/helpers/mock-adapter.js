import Ember from 'ember';
import DS from 'ember-data';

Ember.Test.registerHelper('mockAdapter', function(app, payload){
  app.registry.unregister('adapter:application');
});
