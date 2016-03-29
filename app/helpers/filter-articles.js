import Ember from 'ember';

export function filterArticles(params/*, hash*/) {
  if(params[0].get('category') === params[1]){
    return true;
  } else {
    return false;
  }
}

export default Ember.Helper.helper(filterArticles);
