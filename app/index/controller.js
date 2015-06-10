import Ember from 'ember';

export default Ember.Controller.extend({
  tweettype: '',
  twitteruser: '',
  tweetinput: '',
  tweetlink: '',
  hashtagCheckbox: Ember.computed.map('model.hashtags', function(hashtag, index){
    return Ember.ObjectProxy.create({
      content: hashtag,
      checked: true
    });
  }),
  proxiedCheckBoxes: Ember.computed.mapBy('hashtagCheckbox', 'content'),
  tweetpreview: Ember.computed('proxiedCheckBoxes,tweettype,tweetinput,tweethashtags,tweetlink,twitteruser', function(){
    return this.get('tweettype')+': '+this.get('tweetinput')
    +' '+this.get('tweetlink')+' '+this.get('twitteruser')
    +' '+this.get('proxiedCheckBoxes');
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
        tweetlink: this.get('tweetlink'),
        hashtags: this.get('proxiedCheckBoxes')
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
