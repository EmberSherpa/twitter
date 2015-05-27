import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      //this.store.find('index'),
      types: ['Post', 'Video', 'Addon', 'Announcement'],
      title: 'This is a title',
      hashtags: ['#emberjs', '#javascript', '#innovation']
    };
  }
});
