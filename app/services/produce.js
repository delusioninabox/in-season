import Service from '@ember/service';
import Produce from '../models/produce';

const produceItems = [
  Produce.create({type: 'vegetable', name: 'Tomato', available: 6})
];

export default Service.extend({
  getAllProduce() {
    return produceItems;
  }
});
