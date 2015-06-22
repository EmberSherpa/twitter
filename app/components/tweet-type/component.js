import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    submit(category){
      category.set('isActive', true);
      this.sendAction('action', category.name);
    }
  }
});
