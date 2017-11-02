import Ember from "ember";

export default Ember.Route.extend({  
  
  model() {
      const data = this.get('produce');
      return data.getAllProduce();
  },
  
  produce: Ember.inject.service('produce')

});