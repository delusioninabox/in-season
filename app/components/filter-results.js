import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  produce: Ember.inject.service(),
  hideVeggies: false,
  hideFruit: false,
  hideHerbs: false,
  curMonth: '',
  searchQuery: '',
  months: [
    { 'value': 1, 'name': 'January' },
    { 'value': 2, 'name': 'February' },
    { 'value': 3, 'name': 'March' },
    { 'value': 4, 'name': 'April' },
    { 'value': 5, 'name': 'May' },
    { 'value': 6, 'name': 'June' },
    { 'value': 7, 'name': 'July' },
    { 'value': 8, 'name': 'August' },
    { 'value': 9, 'name': 'September' },
    { 'value': 10, 'name': 'October' },
    { 'value': 11, 'name': 'November' },
    { 'value': 12, 'name': 'December' },
  ],
    
  init() {
    this._super(...arguments);
    const date      = new Date();
    this.set('curMonth', date.getMonth() + 1);
    let filter = this.get('produce').filterResults( this.get('curMonth'), this.get('hideVeggies'), this.get('hideFruit'), this.get('hideHerbs') );
    this.set('produceResults', filter );  
  },
  
  renderQuery() {
    let newQuery = '',
        i = 0;
    $('.result.selected').each( function() {
      let name = $(this).find('.title').text();
      if( i > 0 ) {
        newQuery += '+';
      }
      newQuery += name;
      i++;
    });
    this.set( 'searchQuery', newQuery );
  },
  
  actions: {
    
    changeMonth( value ) {
      this.set('curMonth', value );
      this.send('runFilter');
    },
    
    runFilter( ) {
      let filter = this.get('produce').filterResults( this.get('curMonth'), this.get('hideVeggies'), this.get('hideFruit'), this.get('hideHerbs') );
      this.set('produceResults', filter );
    },
    
    toggleClass( type ) {
      this.toggleProperty( type );
      this.send('runFilter');
    },
    
    toggleSelectedItem( clickedE, theIndex ) {
      let clickedElement = clickedE.element;
      $( clickedElement ).find('.result[data-id=' + theIndex + ']').toggleClass('selected');
      this.renderQuery();
    }
  
  },
  
});
