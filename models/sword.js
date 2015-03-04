Auction.Sword = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  lot: DS.belongsTo('lot', {async: true})
});
