import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    remove(contact) {
      this.model.data.removeObject(contact);

      fetch(`/api/contacts/${contact.id}`, {
        method: 'DELETE',
      });
    }
  }
});
