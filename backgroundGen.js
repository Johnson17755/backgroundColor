let color1 = document.querySelector('.color-1');
let color2 = document.querySelector('.color-2');
let body = document.getElementById('gradient');
let firstCss = document.querySelector('h3');
let secondCss = document.getElementsByTagName('h3')[1]; 
//  body.style.background = 'burlywood';




//console.log(firstCss);
//console.log(color1);
//console.log(color2);

//There's an input event for input changes
 
// color1.addEventListener('input', function() {
//     console.log(color1.value);
// })

// color2.addEventListener('input', function() {
//     console.log(color2.value);
// })

//So, we want to change the background anytime we select a color from the color picker(s). The background in the DOM is ideally part of the Body tag. So, naturally, that's what we are going to select(The body tag)

//  function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')'; 
// }
  //;this would not work ooo😕 line 32 - 34
// color1.addEventListener('input', setGradient())

// color2.addEventListener('input', setGradient())


// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);

//The setGradient function can as well be called in the html input element using the oninput attribute. That works fine too
//<input oninput="setGradient()" type="color"> The only reason one doesn't do that often is cos of separation of concerns

//We can as well add CSS written at the bottom
// function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
//     firstCss.textContent = body.style.background + ';';
//     secondCss.textContent = 'linear-gradient(to right, ' + color1.value  + ', ' + color2.value + ');';   
// }
// color1.addEventListener('input', setGradient)
// color2.addEventListener('input', setGradient);