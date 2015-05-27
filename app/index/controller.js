import Ember from 'ember';

export default Ember.Controller.extend({
  tweettype: '',
  twitteruser: '',
  tweetinput: '',
  tweetlink: '',
  emberjsCheckBox: true,
  javascriptCheckBox: false,
  tweetpreview: Ember.computed('tweettype,tweetinput,tweethashtags,tweetlink,twitteruser', function(){
    return this.get('tweettype')+': '+this.get('tweetinput')+' '+this.get('tweetlink')+' '+this.get('twitteruser');
  }),

  actions:{
    setTweetType(type) {
      this.set('tweettype', type);
    },
    saveTweet(){
      var newTweet = this.store.createRecord('tweet', {
        tweettype: this.get('tweettype'),
        twitteruser: this.get('twitteruser'),
        tweetinput: this.get('tweetinput'),
        tweetlink: this.get('tweetlink')
      });
      newTweet.save();
      this.setProperties({
        tweettype: '',
        twitteruser: '',
        tweetinput: '',
        tweetlink: ''
      });
    }
  }
});
