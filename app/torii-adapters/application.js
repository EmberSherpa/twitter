import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    let provider = authentication.provider;
    return authentication[provider];
  }
});
