import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return fetch('/api/contacts')
      .then(r => r.json());
  }
});
