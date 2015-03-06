Auction.LotsController = Ember.ArrayController.extend ({
  sortProperties: ['name'],
  actions: {
    deleteLot: function(lot) {
      if (confirm('Are you sure you want to delete this beautiful lot?')) {
        lot.destroyRecord();
      }
    }
  }
})
