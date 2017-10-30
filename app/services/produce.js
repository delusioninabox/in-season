import Ember from 'ember';
import Produce from 'in-season/models/produce';

const produceItems = [
  Produce.create({id: 0, type: 'vegetable', name: 'Tomato', available: 6}),
  Produce.create({id: 1, type: 'vegetable', name: 'Corn', available: 11}),
  Produce.create({id: 2, type: 'fruit', name: 'Strawberry', available: 12})
];

export default Ember.Service.extend({
  getAllProduce() {
    console.log('called: ' + produceItems);
    return [
      {id: 0, type: 'vegetable', name: 'Tomato', available: 6},
      {id: 1, type: 'vegetable', name: 'Corn', available: 11},
      {id: 2, type: 'fruit', name: 'Strawberry', available: 12}
    ];
    //return produceItems;
  }
});
