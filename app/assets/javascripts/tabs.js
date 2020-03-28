$(function(){

  $(".group-tabs__tab").mouseover(function(){
    $(this).stop().animate({ 
      backgroundColor: "white"
    },200)
    $(this).find(".group-name").stop().animate({ 
      color: "black"
    },200)
  })

  $(".group-tabs__tab").mouseleave(function(){
    $(this).stop().animate({
      backgroundColor: "#253141"
    },1000);
    $(this).find(".group-name").stop().animate({ 
      color: "whiete"
    },1000)
  })

})