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
    edit(article, params){
      console.log(article.title);
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionTo('admin');
    },
    update(){

    }
  }
});
