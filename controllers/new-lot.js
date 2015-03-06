Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newLot = this.store.createRecord('lot', {
        name: this.get('lotName'),
        description: this.get('lotDescription'),
        image: this.get("imageLink")
      });
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
})
