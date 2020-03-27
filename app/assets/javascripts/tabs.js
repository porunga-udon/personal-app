$(function(){

  $(".group-tabs__tab").click(function(){
    console.log("ok");
  })

  $(".group-tabs__tab").mouseover(function(){
    $(this).stop().animate({ 
      color: "black",
      backgroundColor: "white"
    },200)
  })

  $(".group-tabs__tab").mouseleave(function(){
    $(this).stop().animate({
      color: "white",
      backgroundColor: "#253141"
    },1000);
  })

})
