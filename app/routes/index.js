import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('tweet');
  },
  actions: {
    editTweet(tweet) {
      console.log('edit tweet');
    }
  }
});
