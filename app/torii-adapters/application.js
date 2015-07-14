import Ember from 'ember';

export default Ember.Object.extend({
  store: Ember.inject.service(),
  open(authentication){
    return {
      provider: authentication.provider,
      currentUser: authentication[authentication.provider]
    };
  },
  fetch() {
    let store = this.get('store');
    let adapter = store.adapterFor('application');
    let firebase = adapter.get('firebase');
    return new Ember.RSVP.Promise((resolve, reject)=>{
      let auth = firebase.getAuth();
      if (auth == null) {
        reject("No session available");
      } else {
        resolve(this.open(auth));
      }
    }, "Firebase Torii Adapter#fetch Firebase session");
  }
});
