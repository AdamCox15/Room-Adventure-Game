//Room Adventure Game 
var familyRoom = {
    name: 'Family Room',
    description: 'Room where everyone watches TV.',
    brokeThing: 'TV remote',
    fixWith: 'Batteries',
    points: 25,
    itemFound: 'Wrench',
    north: 'Kitchen',
    east: 'Garage',
    south: null,
    west: null
  };
  
  var kitchen = {
    name: 'Kitchen',
    description: 'Place where food is cooked.',
    brokeThing: 'Sink',
    fixWith: 'Wrench',
    points: 40,
    itemFound: 'Garage door chain',
    north: null,
    east: 'Dining Room',
    south: 'Family Room',
    west: null
  };
  
  var diningRoom = {
    name: 'Dining Room',
    description: 'Place where everyone gathers to eat.',
    brokeThing: 'Chandelier',
    fixWith: 'Light Bulb',
    points: 20,
    itemFound: 'Batteries',
    north: null,
    east: null,
    south: 'Garage',
    west: 'Kitchen'
  };
  
  var garage = {
    name: 'Garage',
    description: 'Place where you park your car',
    brokeThing: 'Garage Door',
    fixWith: 'Garage door chain',
    points: 35,
    itemFound: 'Light Bulb',
    north: 'Dining Room',
    east: null,
    south: null,
    west: 'Family Room'
  };
  

