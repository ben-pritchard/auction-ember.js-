Auction.AddSwordController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      debugger;
      var newSword = this.store.createRecord('sword', {
        name: this.get('swordName'),
        description: this.get('swordDescription')
      })
      newSword.save();

      var lot = this.get('controllers.lot.model');
      lot.get('swords').pushObject(newSword);
      lot.save();

      this.transitionToRoute('lot', lot.id);
    }
  }
});
