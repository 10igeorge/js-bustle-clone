import Ember from 'ember';

export default Ember.Component.extend({
  showArticleForm: false,
    actions: {
      submitNewArticle(){
        var date = new Date();
        date = date.toString().substring(0,15);
        var params = {
          title: this.get('title'),
          category: this.get('dropdown'),
          author: this.get('author'),
          date: date,
          body: this.get('body'),
          image: this.get('image')
        };
        this.set('showArticleForm', false),
        this.sendAction('submitArticle', params);
      },
      makeNewArticle(){
        this.set('showArticleForm', true);
      }
    }
});
