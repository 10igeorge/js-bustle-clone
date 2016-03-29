import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('article');
  },
  actions: {
    newsArticle: function(category){
      return category === 'news';
    }
  }
});
