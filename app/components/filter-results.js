import Component from '@ember/component';

export default Component.extend({
  produce: Ember.inject.service(),
  hideVeggies: false,
  hideFruit: false,
  hideHerbs: false,
    
  init() {
    this._super(...arguments);
    const date      = new Date();
    const curMonth  = date.getMonth();
    $('#viewMonth').val( curMonth );
  },
  
  actions: {
  
    toggleClass( type ) {
      this.toggleProperty( type );
    }
  
  },
  
});
