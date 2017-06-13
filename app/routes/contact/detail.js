import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let { id } = params;
    return fetch(`/api/contacts/${id}`)
      .then(r => r.json());
  }
});
