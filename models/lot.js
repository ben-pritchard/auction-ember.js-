Auction.Lot = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  swords: DS.hasMany('sword', {async: true})
});
