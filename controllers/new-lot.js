Auction.NewLotController = Ember.Controller.extend({
  actions: {
    save: function() {
console.log("hello");
      var newLot = this.store.createRecord('lot', {
        name: this.get('lotName'),
        description: this.get('lotDescription')
      });
console.log("hello2");
      debugger;
      newLot.save();
      this.transitionToRoute('lots');
    }
  }
})
