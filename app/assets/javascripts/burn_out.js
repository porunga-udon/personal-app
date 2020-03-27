$(function() {

// 入力キー配列
var input_cmd = [];
// コナミコマンド配列 [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
var konami_cmd = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

$(window).keyup(function(event) {
  input_cmd.push(event.keyCode);
  if(input_cmd[input_cmd.length - 1] != konami_cmd[input_cmd.length - 1]){
    input_cmd = [];
  } else if (input_cmd.length == konami_cmd.length) {
    alert("自爆コマンド起動");
    $(".wrapper").addClass('konami');
    javascript:(function () {var s = document.createElement('script');
      s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js');
      document.body.appendChild(s);}());
    input_cmd = [];
  }
});

})