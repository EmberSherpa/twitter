import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFirebase() {
      this.get('session').open('firebase', {
        authWith: 'twitter'
      });
    },

    signOut(){
      this.get('session').close('firebase');
      this.transitionTo('index');
    }
  }
});
