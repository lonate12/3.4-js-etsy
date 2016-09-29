(function(){
 'use strict';
  var sum = items.reduce(function(total, current){
    total += current.price;
    return total;
  }, 0);

  var averagePrice = (sum/items.length).toFixed(2);
  console.log('The average price is: $' + averagePrice);

  var filteredItems = items.filter(function(thing){
    var price = thing.price;
    return (price < 18.00) && (price > 14.00);
  });

  // filteredItems.forEach(function(object){
  //   console.log(object.title);
  // });

  console.log("Items that cost between $14.00 USD and $18.00 USD: " +
    filteredItems[0].title + ' ,' + filteredItems[1].title + ' , and ' +
    filteredItems[2].title);

  var thingsWithGBP = items.filter(function(thing){
    var currencyCode = thing.currency_code;
    return currencyCode == 'GBP';
  });

  console.log(thingsWithGBP[0].title + 'costs: ' + thingsWithGBP[0].price);
}());
