import Ember from 'ember';
import Produce from 'in-season/models/produce';

const produceItems = [
  Produce.create({type: 'vegetable', name: 'Tomatoes', available: [6]}),
  Produce.create({type: 'vegetable', name: 'Corn', available: [11]}),
  Produce.create({type: 'fruit', name: 'Strawberries', available: [12]}),
  Produce.create({type: 'fruit', name: 'Apples', available: [8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Grapes', available: [12]}),
  Produce.create({type: 'fruit', name: 'Oranges', available: [12]}),
  Produce.create({type: 'fruit', name: 'Banana', available: [12]}),
];

export default Ember.Service.extend({
  
  getAllProduce() {
    return produceItems;
  },
  
});
