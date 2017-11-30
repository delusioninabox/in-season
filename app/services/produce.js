import Ember from 'ember';
import Produce from 'in-season/models/produce';

const produceItems = [
  Produce.create({type: 'vegetable', name: 'Acorn Squash', src: '../assets/acornsquash.jpg', available: [1, 2, 3, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Artichoke', src: '../assets/artichokes.jpg', available: [3, 4, 5, 6, 9, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Asparagus', src: '../assets/asparagus.jpg', available: [2, 3, 4, 5, 6]}),
  Produce.create({type: 'vegetable', name: 'Beets', src: '../assets/beets.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Bell Pepper', src: '../assets/bellpeppers.jpg', available: [7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Bok Choy', src: '../assets/bokchoy.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Broccoli', src: '../assets/broccoli.jpg', available: [1, 2, 3, 4, 5, 10, 11, 12]}),
  Produce.create({type: 'vegetable', name: 'Brussel Sprouts', src: '../assets/brusselsprouts.jpg', available: [1, 2, 3, 4, 5, 9, 10, 11]}),
  Produce.create({type: 'vegetable', name: 'Butternut Squash', src: '../assets/butternutsquash.jpg', available: [8, 9, 10]}),
  Produce.create({type: 'vegetable', name: 'Corn', src: '../assets/corn.jpg', available: [6, 7, 8, 9, 10, 11]}),
  Produce.create({type: 'vegetable', name: 'Tomatoes', src: '../assets/tomatoes.jpg', available: [6, 7, 8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Apples', src: '../assets/apples.jpg', available: [8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Avacado', src: '../assets/avacado.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Bananas', src: '../assets/bananas.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Blackberries', src: '../assets/blackberries.jpg', available: [5, 6, 7, 8, 9, 10]}),
  Produce.create({type: 'fruit', name: 'Cranberries', src: '../assets/cranberries.jpg', available: [10, 11]}),
  Produce.create({type: 'fruit', name: 'Figs', src: '../assets/figs.jpg', available: [6, 7, 9, 10]}),
  Produce.create({type: 'fruit', name: 'Grapes', src: '../assets/grapes.jpg', available: [7, 8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Kiwi', src: '../assets/kiwi.jpg', available: [7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Lemons', src: '../assets/lemons.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Nectarines', src: '../assets/nectarines.jpg', available: [5, 6, 7, 8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Oranges', src: '../assets/oranges.jpg', available: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Peaches', src: '../assets/peaches.jpg', available: [5, 6, 7, 8, 9, 10]}),
  Produce.create({type: 'fruit', name: 'Pears', src: '../assets/pears.jpg', available: [8, 9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Plums', src: '../assets/plums.jpg', available: [5, 6, 7, 8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Pomegranates', src: '../assets/pomegranates.jpg', available: [9, 10, 11, 12]}),
  Produce.create({type: 'fruit', name: 'Raspberries', src: '../assets/raspberries.jpg', available: [5, 6, 7, 8, 9, 10, 11]}),
  Produce.create({type: 'fruit', name: 'Strawberries', src: '../assets/strawberries.jpg', available: [3, 4, 5, 6, 7, 8, 9, 11]}),
];

export default Ember.Service.extend({
  
  getAllProduce() {
    return produceItems;
  },
  
  filterByValueKey(valueToRemove, keyToMatch, objectArray) {
    
    let splicedArray = [],
        count = 0;
    
    for( let index = 0; index < objectArray.length; index++ ) {
      if (objectArray[index][keyToMatch] != valueToRemove) {
        splicedArray[count] = objectArray[index];
        count++;
      }
      
    }
    return splicedArray;
    
  },
  
  filterSearchArray(valueToMatch, keyToMatch, objectArray) {
    
    let splicedArray = [],
        count = 0;
    valueToMatch = parseInt(valueToMatch);
    
    for( let index = 0; index < objectArray.length; index++ ) {
      
      if (objectArray[index][keyToMatch].includes(valueToMatch)) {
        splicedArray[count] = objectArray[index];
        count++;
      }
      
    }
    return splicedArray;
    
  },
  
  filterResults( month, veggies, fruits, herbs ) {
    let fullList = this.getAllProduce(),
        newList = fullList;
    
    newList = this.filterSearchArray( month, 'available', fullList );
    
    if( veggies ) {
      // Remove 'vegetable' type from list
      newList = this.filterByValueKey('vegetable', 'type', newList);
    }
    
    if( fruits ) {
      // Remove 'fruit' type from list
      newList = this.filterByValueKey('fruit', 'type', newList);
    }
    
    if( herbs ) {
      // Remove 'fruit' type from list
      newList = this.filterByValueKey('herb', 'type', newList);
    }
  
    return newList;
  }
  
});
