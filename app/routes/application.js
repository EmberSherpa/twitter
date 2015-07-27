import Ember from 'ember';

export default Ember.Route.extend({
  "current-user": Ember.inject.service('current-user'),
  afterModel() {
    this.fetchUser();
  },
  fetchUser(currentUser) {
    if (!currentUser) {
      currentUser = this.get('session.currentUser');
    }
    this.get('current-user').fetchModel(currentUser);
  },
  actions: {
    signInViaFirebase() {
      this.get('session').open('firebase', {
        authWith: 'twitter'
      })
      .then((user)=>{
        this.fetchUser(user.currentUser);
      });
    },
    signOut(){
      this.get('session').close('firebase')
        .then(()=>{
          this.get('current-user').resetModel();
          this.transitionTo('index');
        });
    }
  }
});
