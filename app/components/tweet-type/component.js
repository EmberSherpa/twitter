import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function(){
    this.$(".type").click(function(){
      $(".type").removeClass("active");
      $(this).addClass("active");
    });
  },

  actions: {
    submit(category){
      this.sendAction('action', category);
    }
  }
});
