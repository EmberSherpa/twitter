import Ember from 'ember';

const {isEmpty, get} = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service(),
  username: Ember.computed.oneWay('session.currentUser.username'),
  resetModel() {
    this.set('model', null);
  },
  fetchModel: function(currentUser){
    if (currentUser) {
      const username = get(currentUser, 'username');
      if (username) {
        this.get('store').query('user', {username: username})
          .then((results)=>{
            if (!isEmpty(results)) {
              this.set('model', results.get('firstObject'));
            }
          });
      }
    }
  },
  role: Ember.computed.oneWay('model.role')
});
