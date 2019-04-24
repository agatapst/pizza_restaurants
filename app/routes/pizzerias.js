import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: 'roma-pizzeria',
      name: 'Roma Pizzeria',
      address: 'Via Tiburtina 5',
      city: 'Rome',
      hours: '1 PM - 10 PM',
      menu: {
        pizzaName: "Buffala",
        pizzaPrice: "12 EUR",
        pizzaIgredients: "buffala cheese, basil, tomatoes"
      },
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
      description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
    }, {
      id: 'napoli-pizzeria',
      name: 'Napoli Restaurant',
      address: 'Via Salvator Rosa 11',
      city: 'Naples',
      hours: '1 PM - 3 PM, 6 PM - 9 PM',
      menu: {
          pizzaName: "Buffala",
          pizzaPrice: "12 EUR",
          pizzaIgredients: "buffala cheese, basil, tomatoes"
        },
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
      description: 'A foodies dream.'
    }, {
      id: 'palermo-pizzeria',
      name: 'Palermo Pizza Shop',
      address: 'Via Sampolo 1',
      city: 'Palermo',
      hours: '5 PM - 1 PM',
      menu: {
        pizzaName: "Buffala",
        pizzaPrice: "12 EUR",
        pizzaIgredients: "buffala cheese, basil, tomatoes"
      },
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
      description: 'Great restaurant.'
    }];
  }
});
