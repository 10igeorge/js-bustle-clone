import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('article', {path: '/article/:article_id'});
  this.route('admin');
  this.route('news');
  this.route('entertainment');
  this.route('fashion-beauty');
  this.route('lifestyle');
  this.route('books');
});

export default Router;
