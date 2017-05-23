import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save(ev) {
      ev.preventDefault();

      fetch('/api/contacts', {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(this.model),
      }).then(() => {
        this.transitionToRoute('contact.index');
      });
    }
  }
});
