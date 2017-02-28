var first = setInterval(green, 5000);
var second = setInterval(yellow, 8000);
var third = setInterval(red, 10000);

function green() {
  $('#redlight').css('opacity', 0.4)
  $('#yellowlight').css('opacity', 0.4)
  $('#greenlight').css('opacity', 1)
  clearInterval(first);
};

function yellow() {
  $('#yellowlight').css('opacity', 1)
  $('#greenlight').css('opacity', 0.4)
  clearInterval(second);
};

function red() {
  $('#redlight').css('opacity', 1)
  $('#yellowlight').css('opacity', 0.4)
  clearInterval(third);
  second = setInterval(green, 5000);
  third = setInterval(yellow, 8000);
};
