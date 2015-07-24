import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      categories: ['Post', 'Video', 'Addon', 'Announcement'],
      hashtags: ['#emberjs', '#javascript']
    };
  }
});
