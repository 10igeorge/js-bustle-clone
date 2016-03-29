import Ember from 'ember';

export default Ember.Component.extend({
  editArticleForm: false,
  actions: {
    editArticleForm() {
      this.set('editArticleForm', true);
    },
    edit(article) {
      console.log(this.get('dropdown'));
      var params = {
        title: this.get('title'),
        category: this.get('dropdown'),
        author: this.get('author'),
        date: this.get('date'),
        body: this.get('body'),
        image: this.get('image')
      };
      this.set('editArticleForm', false);
      this.sendAction('edit', article, params);
    }
  }
});
