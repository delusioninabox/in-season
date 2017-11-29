import Component from '@ember/component';

export default Component.extend({
  produce: Ember.inject.service(),
  hideVeggies: false,
  hideFruit: false,
  hideHerbs: false,
  curMonth: '',
    
  init() {
    this._super(...arguments);
    const date      = new Date();
    this.set('curMonth', date.getMonth() + 1);
    let filter = this.get('produce').filterResults( this.get('curMonth'), this.get('hideVeggies'), this.get('hideFruit'), this.get('hideHerbs') );
    this.set('produceResults', filter );  
  },
  
  didRender() {
    $('#viewMonth').val( this.get('curMonth') );
  },
  
  actions: {
    
    toggleClass( type ) {
      this.toggleProperty( type );
      let filter = this.get('produce').filterResults( this.get('curMonth'), this.get('hideVeggies'), this.get('hideFruit'), this.get('hideHerbs') );
      this.set('produceResults', filter );
    },
    
    toggleSelectedItem( clickedE, theIndex ) {
      let clickedElement = clickedE.element;
      console.log(clickedElement, theIndex);
      $( clickedElement ).find('.result[data-id=' + theIndex + ']').toggleClass('selected');
    }
  
  },
  
});
