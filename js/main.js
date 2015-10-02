(function() {

  // console.log(items.length);




// 1. Show me how to calculate the average price of all items.
// map price, find sum, divide by array length (number of prices); return 'The average price is $' + average
// The average price is $23.63


// items.forEach( function (item) { // testing to see if items.js is merged with HTML
//     console.log(item.price);
// });

  // Grabbing prices
  var prices = items.map( function (item) {
    return item.price;
  });
  // console.log(prices);

  //Adding all prices together
  var sum = prices.reduce (function (prev, next) {
    return prev + next;
  });
  // console.log(sum);

  //Averaging prices
  var avg = sum / items.length;
  // console.log(avg);

  //Convert to 2 decimal places
  var converted = Math.round(avg * 100) / 100;
  // var converted = avg.toFixed(2);
  // console.log(converted);

  //Convert to string
  var str = 'The average price is $' + converted;

  console.log(str);

  // Make it show up on page
    //Find out answer element
  var answer1 = document.querySelector('#answer1');
    //Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(str);
    //Append newly created node to our answer element
  answer1.appendChild(textNode);




// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD
// map item.price, if 14 < price < 18
      // 1970 Coors Banquet Glass Beer Pitcher
      // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug
      // Hand Painted Colorful Feather Glass

  // if statement to 
  //make an empty array and push results below to that array
  var secondAnswer = [] // empty array
  items.filter(function (item) {  //filter them by price
    if (item.price > 14 && item.price < 18) {
      secondAnswer.push(item.title); // push them to array
    }
  });

   // console.log(secondAnswer);

   // send array to screen

// Make it show up on page
    //Find out answer element
  var answer2 = document.querySelector('#answer2');
    //Create a node from our above answer ready for the DOM
  var textNode = document.createTextNode(secondAnswer);
    //Append newly created node to our answer element
  answer2.appendChild(textNode);








// 3. Which item has a "GBP" currency code? Display its name and price.
// if currency code = GBP, return (title) + 'costs' + (price)
      // 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
  var thirdAnswer = []
  items.filter(function (item) {
    if (item.currency_code = 'GBP') {
      return item.title + 'costs £' + item.price
    }
  });

// console.log(thirdAnswer);




// Make it show up on page
    //Find out answer element
  // var answer3 = document.querySelector('#answer3');
    //Create a node from our above answer ready for the DOM
  // var textNode = document.createTextNode(str);
    //Append newly created node to our answer element
  // answer3.appendChild(textNode);




// 4. Display a list of all items who are made of wood.
// if materials = wood, push title to array; make array into string, display
      // SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
      // Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
      // Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
      // Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
      // Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.









// Make it show up on page
    //Find out answer element
  // var answer4 = document.querySelector('#answer4');
    //Create a node from our above answer ready for the DOM
  // var textNode = document.createTextNode(str);
    //Append newly created node to our answer element
  // answer4.appendChild(textNode);




// 5. Which items were made of eight or more materials? Display the name, number of items, and the items it is made of.
// if materials.length >= 8, return title, materials.length, and materials
      // See below

// var fifthAnswer = [];
// if (items(function (item) {
//   item.materials.length >= 8) {
//   fifthAnswer.push(item.title && item.materials.length && item.materials);
//   }
// });

//   console.log(fifthAnswer);

  var fifthAnswer1 = [];
  var fifthAnswer2 = [];
  items.filter(function(item) {
    if (item.materials.length >= 8) {
      fifthAnswer1.push(item.title)
      fifthAnswer1.push(item.materials.length)
      fifthAnswer2.push(item.materials)
    } // end of if
  }); // end of filter

    // var str = fifthAnswer.item.title + ' has ' + fifthAnswer.item.materials.length + ' materials.'
    console.log(fifthAnswer1);
    console.log(fifthAnswer2);

  var title1 = fifthAnswer1.shift(); // 
  var number1 = fifthAnswer1.shift();
  var str1 = title1 + ' has ' + number1 + ' materials.'
  console.log(str1);

  var title2 = fifthAnswer1.shift();
  var number2 = fifthAnswer1.shift();
  var str2 = title2 + ' has ' + number2 + ' materials.'
  console.log(str2);

var answer5A = document.querySelector('#answer5A');
var textNode = document.createTextNode(str1);
answer5A.appendChild(textNode);

// var answer5B = document.querySelector('#answer5B');
// var textNode = document.createTextNode(WHATEVER_VARIABLE_TO_DISPLAY);
// answer5B.appendChild(textNode);

var answer5C = document.querySelector('#answer5C');
var textNode = document.createTextNode(str2);
answer5C.appendChild(textNode);

// var answer5D = document.querySelector('#answer5D');
// var textNode = document.createTextNode(WHATEVER_VARIABLE_TO_DISPLAY);
// answer5D.appendChild(textNode);


// console.log(fifthAnswer);

// var str = item.title + ' has ' + item.materials.length + 'materials.'
// console.log(str);






// Make it show up on page
    //Find out answer element
  // var answer5 = document.querySelector('#answer5');
    //Create a node from our above answer ready for the DOM
  // var textNode = document.createTextNode(str);
    //Append newly created node to our answer element
  // answer5.appendChild(textNode);




// 6. How many items were made by their sellers?
// filter who_made, i_did into an array; 
      // 18 were made by their sellers

var problem6 = [];
items.filter(function(item) {
  if (item.who_made === i_did) {
    problem6.push(item.title)
  } // end of if statement
}); // end of filter function










// Make it show up on page
    //Find out answer element
  // var answer6 = document.querySelector('#answer6');
    //Create a node from our above answer ready for the DOM
  // var textNode = document.createTextNode(str);
    //Append newly created node to our answer element
  // answer6.appendChild(textNode);

})();

// Number 5 answers
      // Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
      // wall mount bottle opener
      // wedding
      // man cave
      // christmas gift
      // guy gift
      // fathers day
      // home bar
      // beer
      // bar
      // 
      // The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
      // 
      // glass
      // sandblast cabinet
      // vinyl
      // beer glass
      // pint glass
      // etched pint glass
      // etched glass
      // etched beer glass
      // 16 oz pint
      // beer gift
      // etched harry potter glass
      // the three broomsticks glass
      // personalized harry potter glass

