Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('lotName'),
        description: this.get('lotDescription')
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
})
