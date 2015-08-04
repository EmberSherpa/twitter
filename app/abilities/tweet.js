import Ember from 'ember';
import { Ability } from 'ember-can';

const {get} = Ember;

export default Ability.extend({
  "current-user": Ember.inject.service(),
  canDelete: Ember.computed(
    "current-user.role",
    "model.postedBy", {
      get() {
        const currentUser = this.get('current-user');
        if (get(currentUser, 'role') === 'admin'){
          return true;
        } else {
          return get(currentUser, 'username') === this.get('model.postedBy');
        }
      }
  }),
  canEdit: Ember.computed(
    "current-user.role",
    "model.postedBy", {
      get() {
        const currentUser = this.get('current-user');
        if (get(currentUser, 'role') === 'admin'){
          return true;
        } else {
          return get(currentUser, 'username') === this.get('model.postedBy');
        }
      }
  }),
  canApprove: Ember.computed("current-user.role", {
    get() {
      return this.get("current-user.role") === 'admin';
    }
  })
});
