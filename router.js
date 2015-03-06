Auction.Router.map(function() {
  this.resource("lots", {path: "/"});
  this.resource("new-lot");
  this.resource("lot", {path: '/:lot_id'}, function() {
    this.resource("add-sword");
    this.resource("sword-details", { path: '/:sword_id' });
  });
});
