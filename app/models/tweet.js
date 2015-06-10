import DS from 'ember-data';

export default DS.Model.extend({
  tweettype: DS.attr('string'),
  twitteruser: DS.attr('string'),
  tweetinput: DS.attr('string'),
  tweetlink: DS.attr('string'),
  hashtags: DS.attr('string')
});
