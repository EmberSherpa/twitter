import DS from 'ember-data';

const falseReturn = function() { return false; };

export default DS.JSONAPIAdapter.extend({
  shouldReloadRecord: falseReturn,
  shouldBackgroundReloadRecord: falseReturn,
  shouldReloadAll: falseReturn,
  shouldBackgroundReloadAll: falseReturn
});

export function storePush(app, data) {
  app.instanceInitializer({
    name: 'storePush',
    initialize: function(instance) {
      Ember.run(function(){
        let store = instance.container.lookup('service:store');
        store.push(data);
      });
    }
  });
};
