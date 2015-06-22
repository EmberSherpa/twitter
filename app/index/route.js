import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      //this.store.find('index'),
      categories: [
        {name: "Post", isActive: false},
        {name: "Video", isActive: false},
        {name: "Addon", isActive: false},
        {name: "Announcement", isActive: false}
      ],
      hashtags: ['#emberjs', '#javascript']
    };
  }
});
