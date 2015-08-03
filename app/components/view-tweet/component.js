import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    approveTweet(tweet){
      var tweet = this.get('tweet');
      tweet.toggleProperty('approved');
      tweet.save();
    },
    deleteTweet(tweet){
      var tweet = this.get('tweet');
      tweet.deleteRecord();
      tweet.save()
    },
    editTweet(tweet){
      this.sendAction('edit', tweet);
    }
  }
});
