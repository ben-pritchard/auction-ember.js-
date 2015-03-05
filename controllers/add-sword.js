Auction.AddSwordController = Ember.ObjectController.extend({
  needs: ['lot'],
  actions: {
    save: function() {
      var newSword = this.store.createRecord('sword', {
        name: this.get('swordName'),
        owner: this.get('swordOwner'),
        year: this.get('year'),
        description: this.get('swordDescription'),
        startingBid: this.get('startingBid'),
        estValue: this.get('estValue')
      })
      newSword.save();

      var lot = this.get('controllers.lot.model');
      lot.get('swords').pushObject(newSword);
      lot.save();

      this.transitionToRoute('lot', lot.id);
    }
  }
});
