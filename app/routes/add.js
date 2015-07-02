import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      //this.store.find('index'),
      categories: ['Post', 'Video', 'Addon', 'Announcement'],
      hashtags: ['#emberjs', '#javascript']
    };
  }
});
