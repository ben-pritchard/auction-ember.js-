Auction.LotsController = Ember.ArrayController.extend ({
  actions: {
    deleteLot: function(lot) {
      lot.destroyRecord();
    }
  }
})
