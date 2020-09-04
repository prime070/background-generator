var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("p");
var generateColor = button.children[0];

// input 값에 따라 그라디언트 바꾸기
function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value +
    ", " + color2.value + ")";
    css.textContent = body.style.background+";";
}

// 랜덤 그라디언트
function genRandomValue() {
    var randomColor1= "#"+Math.round(Math.random()*0xffffff).toString(16);
    var randomColor2 = "#"+Math.round(Math.random()*0xffffff).toString(16);
    
    color1.value = randomColor1;
    color2.value = randomColor2;
    setGradient();
}

// 값이 변할 때마다 그 값을 찾아낼 수 있음 input
var startGradient = setGradient(); // 첫 화면의 그라디언트 속성값 나타내기
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// "#"+Math.round(Math.random()*0xffffff).toString(16);
generateColor.addEventListener("click", genRandomValue);