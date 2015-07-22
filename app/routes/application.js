import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signInViaFirebase() {
      this.get('session').open('firebase', {
        authWith: 'twitter'
      });
      this.controller.set('hasAuth', true);
      console.log(this.session.provider);
    },

    signOut(){
      this.get('session').close('firebase');
      this.controller.set('hasAuth', false);
      this.transitionTo('index');
    }
  }
});
