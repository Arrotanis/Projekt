var main = document.querySelector('main');
var button = document.getElementById('nightBtn');
var currentBackgroundColor = "#ffffff";
var currentTextColor = "#000000";
var nextBackgroundColor = "#4a4d54";
var nextTextColor = "#ffffff";


function changeColor() {
    currentBackgroundColor = main.style.backgroundColor;
    currentTextColor = main.style.color;
    main.style.color = nextTextColor;
    main.style.backgroundColor = nextBackgroundColor;
    nextBackgroundColor = currentBackgroundColor;
    nextTextColor = currentTextColor;
}

button.addEventListener('click',changeColor);