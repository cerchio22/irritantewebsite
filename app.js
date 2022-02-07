let myNewWindow;
let myOldWindow = window;

function myFunction() {
  alert("zet je geluid aan, jij banaan");
  // myNewWindow = window.open("", "_self");
  // let head = myNewWindow.document.querySelector('head');
  // head.innerHTML = '<link rel="stylesheet" href="cerwes.css">';
  // myNewWindow.document.write('<div class="black-rectangle">Dit is een test</div>');
  let gif_element = document.querySelector('.gif');
  gif_element.classList.add('gif-show');
}