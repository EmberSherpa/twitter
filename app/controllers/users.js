import Ember from 'ember';

export default Ember.Controller.extend({
  username: '',

  checkboxes: Ember.computed.map('model.roles', function(role){
    return Ember.ObjectProxy.create({
      content: role,
      checked: false
    });
  }),
  selectedRole: Ember.computed.filterBy('checkboxes', 'checked', true),
  role: Ember.computed.mapBy('selectedRole', 'content'),

  actions:{
    saveUser(){
      var newUser = this.store.createRecord('user', {
        username: this.get('username'),
        role: this.get('role')
      });
      newUser.save();
      this.setProperties({
        username: ''
      });
    }
  }
});
