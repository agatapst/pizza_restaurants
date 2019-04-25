import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      save() {
        let restaurant = this.get('model');
        restaurant.save().then((newRestaurant) => {
            this.transitionToRoute('restaurants');
        })
       }
    }
  });