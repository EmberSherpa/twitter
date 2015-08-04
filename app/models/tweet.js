import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.attr('string'),
  user: DS.attr('string'),
  tweetText: DS.attr('string'),
  url: DS.attr('string'),
  hashtags: DS.attr('string'),
  postedBy: DS.attr('string'),
  approved: DS.attr('boolean', {defaultValue: false})
});
