import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
  user: Ember.inject.service(),

  canDelete: Ember.computed("session.currentUser.username", "model.postedBy", "user", {
    get() {
      if(this.get('user.role') === 'admin'){
        return true;
      }else{
        return this.get('session.currentUser.username') === this.get('model.postedBy');
      }
    }
  }),
  canApprove: Ember.computed("user", {
    get() {
      return this.get("user.role") === 'admin';
    }
  })
});
