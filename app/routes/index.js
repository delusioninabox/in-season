import Ember from "ember";

export default Ember.Route.extend({  
  
  model: function() {
      //const store = this.get('produce');
      //return store.getAllProduce();
  },
  
  //store: Ember.inject.service('produce') <---- Something wrong with this line

});