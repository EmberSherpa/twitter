import Ember from 'ember';

export default Ember.Controller.extend({
  category: '',
  user: '',
  tweetText: '',
  url: '',

  checkboxes: Ember.computed.map('model.hashtags', function(hashtag){
    return Ember.ObjectProxy.create({
      content: hashtag,
      checked: false
    });
  }),

  selectedHashtags: Ember.computed.filterBy('checkboxes', 'checked', true),
  hashtags: Ember.computed.mapBy('selectedHashtags', 'content'),

  preview: Ember.computed(
    'category',
    'tweetText',
    'url',
    'user',
    'hashtags.[]', function(){
      let category = this.get('category');
      let tweetText = this.get('tweetText');
      let url = this.get('url');
      let user = this.get('user');
      let hashtags = this.get('hashtags').join(' ');

      return `${category}: ${tweetText} ${url} ${user} ${hashtags}`;
  }),

  actions:{
    setTweetCategory(category) {
      this.set('category', category);
    },
    saveTweet(){
      var newTweet = this.store.createRecord('tweet', {
        category: this.get('category'),
        user: this.get('user'),
        tweetText: this.get('tweetText'),
        url: this.get('url'),
        hashtags: this.get('hashtags')
      });
      newTweet.save();
      this.setProperties({
        category: '',
        user: '',
        tweetText: '',
        url: ''
      });
    }
  }
});
