import Route from '@ember/routing/route';

export default Route.extend({
    model() { return this.store.createRecord('restaurant', {menu: []}); },

    setupController(controller, model) {
        controller.set('model', model);
    }
});


