import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(contact) {
      this.model.removeObject(contact);

      fetch(`/api/contacts/${contact.id}`, {
        method: 'DELETE',
      });
    }
  }
});
