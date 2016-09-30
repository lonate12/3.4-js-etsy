(function(){
 'use strict';
  var sum = items.reduce(function(total, current){
    total += current.price;
    return total;
  }, 0);

  var averagePrice = (sum/items.length).toFixed(2);
  console.log('The average price is: $' + averagePrice);

  ///////////////////////////

  var filteredItems = items.filter(function(thing){
    var price = thing.price;
    return (price < 18.00) && (price > 14.00);
  });

  console.log("Items that cost between $14.00 USD and $18.00 USD: " +
    filteredItems[0].title + ' ,' + filteredItems[1].title + ' , and ' +
    filteredItems[2].title);

//////////////////////////////    

  var thingsWithGBP = items.filter(function(thing){
    var currencyCode = thing.currency_code;
    return currencyCode == 'GBP';
  });

  console.log(thingsWithGBP[0].title + 'costs: ' + thingsWithGBP[0].price);

////////////////////////////////

  var materialsFilter = items.filter(function(things){

    var isThere = things.materials.indexOf("wood");

    return isThere != -1;
  });

  var printList = materialsFilter.forEach(function(product){
    console.log(product.title);
  });

////////////////////////////////

  var eightOrMore = items.filter(function(products){
    return products.materials.length >= 8;
  });

  var eightOrMoreList = eightOrMore.forEach(function(properties){
    console.log(properties.title, properties.materials);
  });

/////////////////////////////////

  var whoMade = items.filter(function(products){
    return products.who_made == 'i_did';
  });

  console.log(whoMade.length + ' were made by their sellers.');
}());
