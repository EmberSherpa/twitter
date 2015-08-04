import Ember from 'ember';

export default Ember.Controller.extend({
  category: '',
  user: '',
  tweetText: '',
  url: '',
  categories: ['Post', 'Video', 'Addon', 'Announcement'],
  hashtagList: ['#emberjs', '#javascript'],
  categoryComp: Ember.computed('model.category', 'category', {
    get() {
      let currentCategory = this.get('category');
      let modelCategory = this.get('model.category');
      if(currentCategory){
        return `${currentCategory}`;
      }
      else{
        return `${modelCategory}`;
      }
    }
  }),
  userComp: Ember.computed('user', 'model.user', {
    get(){
      let currentUser = this.get('user');
      let modelUser = this.get('model.user');
      if(currentUser){
        return `${currentUser}`;
      }
      else{
        return `${modelUser}`;
      }

    }
  }),
  urlComp: Ember.computed('url', 'model.url', {
    get(){
      let currentUrl = this.get('url');
      let modelUrl = this.get('model.url');
      if(currentUrl){
        return `${currentUrl}`;
      }
      else{
        return `${modelUrl}`;
      }

    }
  }),
  tweetTextComp: Ember.computed('tweetText', 'model.tweetText', {
    get(){
      let currentTweetText = this.get('tweetText');
      let modelTweetText = this.get('model.tweetText');
      if(currentTweetText){
        return `${currentTweetText}`;
      }
      else{
        return `${modelTweetText}`;
      }

    }
  }),
  checkboxes: Ember.computed.map('hashtagList', function(hashtag){
    return Ember.ObjectProxy.create({
      content: hashtag,
      checked: false
    });
  }),
  selectedHashtags: Ember.computed.filterBy('checkboxes', 'checked', true),
  hashtags: Ember.computed.mapBy('selectedHashtags', 'content'),
  hashtagsComp: Ember.computed('hashtags', 'model.hashtags', {
    get(){
      let currentHashtags = this.get('hashtags');
      let modelHashtags = this.get('model.hashtags');
      if(currentHashtags){
        return `${modelHashtags}`;
      }
      else{
        return `${modelHashtags}`;
      }

    }
  }),
  preview: Ember.computed(
    'categoryComp',
    'tweetTextComp',
    'urlComp',
    'userComp',
    'hashtagsComp.[]', function(){
      let category = this.get('categoryComp');
      let tweetText = this.get('tweetTextComp');
      let url = this.get('urlComp');
      let user = this.get('userComp');
      let hashtags = this.get('hashtagsComp');

      return `${category}: ${tweetText} ${url} ${user} ${hashtags}`;
    }),
    actions:{
      cancelEditing(){
        this.transitionToRoute('index');
      },
      saveTweet(){
        var tweet = this.get('model');
        tweet.set('category', this.get('categoryComp'));
        tweet.set('user', this.get('userComp'));
        tweet.set('tweetText', this.get('tweetTextComp'));
        tweet.set('url', this.get('urlComp'));
        tweet.set('hashtag', this.get('hashtagsComp'));
        tweet.set('postedBy', this.get('session.currentUser.username'));
        tweet.save();
        this.transitionToRoute('index');
      }
    }

  });
