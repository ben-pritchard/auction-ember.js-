Auction.Sword = DS.Model.extend({
  name: DS.attr(),
  owner: DS.attr(),
  year: DS.attr(),
  description: DS.attr(),
  startingBid: DS.attr(),
  estValue: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
