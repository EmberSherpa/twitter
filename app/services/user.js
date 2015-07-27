import Ember from 'ember';

export default Ember.Service.extend({
  role: Ember.computed('session.currentUser.username', 'store', {
    get() {
    var username = this.get('session.currentUser.username');
    var user = this.store.query('user', {username: username});
    return user.get('role');
    }
  })
});
