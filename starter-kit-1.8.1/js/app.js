App = Ember.Application.create();

//router
App.Router.map(function() {
  this.route('product', {path: 'products/:product_id'});
  //this.route('addProduct', {path: 'addProduct/'});
});

//data model
App.Product = DS.Model.extend({
  name: DS.attr(),
  description: DS.attr(),
  price: DS.attr()
});

//fixture configuration
App.ProductAdapter = DS.FixtureAdapter.extend();

//test Products
App.Product.FIXTURES = [
  {
    id: 1,
    name: 'Playstation 3',
    description: 'Last Gen console with the best exclusives',
    price: 200
  },
  {
    id: 2,
    name: 'XBOX 360',
    description: 'Last Gen console with the best add-ons',
    price: 180
  }
];
//provide product data
App.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('product');
  }
});

//addProduct Controller

App.AddProductController = Ember.ObjectController.extend({

  actions: {
    saveProduct: function() {

    }
  }

});
