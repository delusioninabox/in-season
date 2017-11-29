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
    
    newList = this.filterSearchArray( month, 'available', newList );
    
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
