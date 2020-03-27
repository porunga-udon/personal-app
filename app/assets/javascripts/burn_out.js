$(function() {

  // バーン・アウトプロトコル配列
  var input_burn = [];
  // バーン・アウトプロトコル[b,u,r,n,o,u,t]
  var burn_cmd = [66,85,82,78,79,85,84];

  $(window).keyup(function(event) {
    input_burn.push(event.keyCode);
    if(input_burn[input_burn.length - 1] != burn_cmd[input_burn.length - 1]){
      input_burn = [];
    } else if (input_burn.length == burn_cmd.length) {
      alert("バーン・アウトプロトコル起動");
      javascript:(function () {var s = document.createElement('script');
        s.setAttribute('src', 'http://fontbomb.ilex.ca/js/main.js');
        document.body.appendChild(s);}());
      input_burn = [];
    }
  });
  
})