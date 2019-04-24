import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr(),
    address: DS.attr(),
    city: DS.attr(),
    hours: DS.attr(),
    menu: DS.attr(),
    image: DS.attr(),
    description: DS.attr()
});
