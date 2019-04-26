import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      save() {
        let restaurant = this.get('model');
        restaurant.save().then(() => {
            this.transitionToRoute('restaurants');
        })
      },
      newPizza() {
        let restaurant = this.get('model');
        restaurant.menu.push({});
        this.set('model', restaurant);
        this.notifyPropertyChange('model');
      }
    }
  });