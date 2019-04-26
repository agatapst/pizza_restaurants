export default function() {
  this.namespace = '/api';

  this.passthrough('https://api.mapbox.com/**');

  let restaurants = [
    {
      type: 'restaurants',
      id: 'roma-restaurant',
      attributes: {
        name: 'Roma Restaurant',
        address: 'Via Tiburtina 5, Roma',
        city: 'Rome',
        hours: '1 PM - 10 PM',
        menu: [
          {
            pizzaName: 'Buffala',
            pizzaPrice: '10 EUR',
            pizzaIngredients: 'tomatoes, basil, buffala cheese'
          },
          {
            pizzaName: 'Fromaggio',
            pizzaPrice: '11 EUR',
            pizzaIngredients: 'tomatoes, cheese, olives'
          }
        ],
        image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80.jpg',
        description: "This grand old mansion with delicious pizza."
      }
    }, 
    {
      type: 'restaurants',
      id: 'napoli-restaurant',
      attributes: {
        name: 'Napoli Restaurant',
        address: 'Via Salvator Rosa 11, Naples',
        city: 'Naples',
        hours: '1 PM - 3 PM, 6 PM - 9 PM',
        menu: [
          {
            pizzaName: 'Buffala',
            pizzaPrice: '10 EUR',
            pizzaIngredients: 'tomatoes, basil, buffala cheese'
          },
          {
            pizzaName: 'Fromaggio',
            pizzaPrice: '11 EUR',
            pizzaIngredients: 'tomatoes, cheese, olives'
          }
        ],
        image: 'https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80.jpg',
        description: "A foodies dream."
      }
    }, 
    {
      type: 'restaurants',
      id: 'palermo-restaurant',
      attributes: {
        name: 'Palermo Pizza Shop',
        address: 'Via Sampolo 1, Palermo',
        city: 'Palermo',
        hours: '5 PM - 1 PM',
        menu: [
          {
            pizzaName: 'Buffala',
            pizzaPrice: '10 EUR',
            pizzaIngredients: 'tomatoes, basil, buffala cheese'
          },
          {
            pizzaName: 'Fromaggio',
            pizzaPrice: '11 EUR',
            pizzaIngredients: 'tomatoes, cheese, olives'
          }
        ],
        image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80.jpg',
        description: "Convenience is the most important."
      }
    }
  ];

  this.get('/restaurants', function() {
    return { data: restaurants };
  });

  this.get('/restaurants/:id', function (db, request) {
    return { data: restaurants.find((restaurant) => request.params.id === restaurant.id) };
  });

  this.post('/restaurants', function (db, request) {
      let newRestaurant = JSON.parse(request.requestBody).data;
      newRestaurant.id = newRestaurant.attributes.name.toLowerCase().replace(' ', '-');
      restaurants.push(newRestaurant);
      return { data: newRestaurant }
  });

}
