import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(category){
      this.sendAction('action', category);
    }
  }
});
