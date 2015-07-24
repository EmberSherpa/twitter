import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
  canDelete: Ember.computed("session.currentUser.username", "tweet.postedBy", {
    get() {
      return this.get('session.currentUser.username') === this.get('tweet.postedBy');
    }
  }),
  canApprove: Ember.computed("session.isAuthenticated", {
    get() {
      return this.get("session.isAuthenticated");
    }
  })
});
