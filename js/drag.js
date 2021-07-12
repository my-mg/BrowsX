var browser = document.getElementById('__browser');
var bar = document.getElementById('__browser-bar');
var close = document.getElementById('__close');
var initX, initY, mousePressX, mousePressY;
browser.style.transform = "translate(" + window.innerWidth + "px," + window.innerHeight + "px) scale(0,0)";

setTimeout(function () {
  browser.classList.add('-show');
  browser.classList.add('-animating');
  var w = window.innerWidth;
  var h = window.innerHeight;
  var x = Math.floor(Math.random() * w / 2);
  var y = Math.floor(Math.random() * h / 2);
  browser.dataset.x = x;
  browser.dataset.y = y;
  browser.style.transform = "translate(" + x + "px," + y + "px) scale(1,1)";
  setTimeout(function () {browser.classList.remove('-animating');}, 200);
}, 500);

bar.addEventListener('mousedown', function (e) {
  initX = browser.dataset.x || browser.offsetLeft;
  initY = browser.dataset.y || browser.offsetTop;
  mousePressX = event.clientX;
  mousePressY = event.clientY;
  window.addEventListener('mousemove', repositionElement, false);
  window.addEventListener('mouseup', function () {
    window.removeEventListener('mousemove', repositionElement, false);
  }, false);
}, false);

function repositionElement(event) {
  var x = Number(initX) + event.clientX - mousePressX;
  var y = Number(initY) + event.clientY - mousePressY;
  browser.style.transform = "translate(" + x + "px," + y + "px)";
  browser.dataset.x = x;
  browser.dataset.y = y;
}

close.addEventListener('mousedown', function (e) {
  browser.classList.add('-animating');
  setTimeout(function () {
    var x = browser.dataset.x || browser.offsetLeft;
    var y = browser.dataset.y || browser.offsetTop;
    browser.style.transform = "translate(" + x + "px," + y + "px) scale(0.001,0.001)";
  }, 50);
  // auto open when windo.open is called
  setTimeout(function () {
    window.open();
  }, 3000);
}, false);

window.open = function (URL) {
  var x = browser.dataset.x || browser.offsetLeft;
  var y = browser.dataset.y || browser.offsetTop;
  browser.style.transform = "translate(" + x + "px," + y + "px) scale(1,1)";
  setTimeout(function () {browser.classList.remove('-animating');}, 200);
};
