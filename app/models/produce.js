import Ember from "ember";
import DS from "ember-data";

export default DS.Model.extend({
  type: DS.attr('string'),
  name: DS.attr('string'),
  available: DS.attr('number')
});