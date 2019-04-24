export default function() {
  this.passthrough('https://api.mapbox.com/**');

  this.namespace = '/api';

  this.get('/restaurants', function() {
    return {
      data: [{
        type: 'restaurants',
        id: 'roma-restaurant',
        attributes: {
          name: 'Roma Restaurant',
          address: 'Via Tiburtina 5, Roma',
          city: 'Rome',
          hours: '1 PM - 10 PM',
          menu: 15,
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg',
          description: "This grand old mansion with delicious pizza."
        }
      }, {
        type: 'restaurants',
        id: 'napoli-restaurant',
        attributes: {
          name: 'Napoli Restaurant',
          address: 'Via Salvator Rosa 11, Naples',
          city: 'Naples',
          hours: '1 PM - 3 PM, 6 PM - 9 PM',
          menu: 1,
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
          description: "A foodies dream."
        }
      }, {
        type: 'restaurants',
        id: 'palermo-restaurant',
        attributes: {
          name: 'Palermo Pizza Shop',
          address: 'Via Sampolo 1, Palermo',
          city: 'Palermo',
          hours: '5 PM - 1 PM',
          bedrooms: 3,
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg',
          description: "Convenience is the most important."
        }
      }]
    };
  });
}
