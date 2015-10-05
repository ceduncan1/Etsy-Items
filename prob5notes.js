// 5. Which items were made of eight or more materials? Display the name, number of items, and the items it is made of.
// if materials.length >= 8, return title, materials.length, and materials
      // See below

var q5title = [];
var q5length = [];
var q5materials = [];

items.filter(function(item) {
  if (item.materials.length >= 8) {
    q5title.push(item.title);
    q5length.push(item.materials.length);
    q5materials.push(item.materials);
  }
});

// console.log(q5title);
// console.log(q5length);
// console.log(q5materials);

var q5data = [];
q5title.push(q5data);
console.log(q5data);








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
    // console.log(fifthAnswer1);
    // console.log(fifthAnswer2);

  var title1 = fifthAnswer1.shift(); // 
  var number1 = fifthAnswer1.shift();
  var str1 = title1 + ' has ' + number1 + ' materials.'
  // console.log(str1);

  var materials1 = fifthAnswer2.shift();

  var title2 = fifthAnswer1.shift();
  var number2 = fifthAnswer1.shift();
  var str2 = title2 + ' has ' + number2 + ' materials.'
  // console.log(str2);

  var materials2 = fifthAnswer2.shift();



  var answer5A = document.querySelector('#answer5A');
  var textNode = document.createTextNode(str1);
  answer5A.appendChild(textNode);

  var answer5B = document.querySelector('#answer5B');
  fifthAnswer2.forEach(function(material) {
    var textNode = document.createElement('div');
    textNode.textContent = material;
    answer5B.appendChild(textNode);
  });

  var answer5C = document.querySelector('#answer5C');
  var textNode = document.createTextNode(str2);
  answer5C.appendChild(textNode);

  var answer5D = document.querySelector('#answer5D');
  var textNode = document.createTextNode(materials2);
  answer5D.appendChild(textNode);


                  // Make it show up on page
                    //Find out answer element
  // var answer4 = document.querySelector('#id'); // don't want to deal with the DOM every time; why it isn't in the .forEach
                    //Create a node from our above answer ready for the DOM
  // var.forEach(function(element) {
    // var textNode = document.createElement('div'); //instead of 'h6', use <div> and do it .forEach
                      //Append newly created node to our answer element
    // textNode.textContent = element;
    // answer4.appendChild(textNode);





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



