import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('article');
  },

  actions: {
    submitArticle(params){
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('admin');
    },
    edit(){

    },
    update(){

    }
  }
});
