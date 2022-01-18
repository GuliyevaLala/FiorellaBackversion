




    
    
    // sticky header
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 100){
      $("nav").addClass("sticky");
    }else{
      $("nav").removeClass("sticky");
    }
  },)
     // sticky header

    //  climbup
    if ($(window).scrollTop() > 500) {
        $('.climbup').show();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.climbup').show();
        } else {
            $('.climbup').hide();
        }
    });

    $('.climbup').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    $('.climbup').hover(function () {
        $('.upper').animate({ "top": "-38%" }, 'fast');
        $('.lower').animate({ "top": "31%" }, 'fast');
    }, function () {
        $('.upper').animate({ "top": "31%" }, 'fast');
        $('.lower').animate({ "top": "100%" }, 'fast');
    });
})       // climbup

  

   

// pagesssssssssssssssssssssssssssssssssssssss

// function of navbar
function myFunction(x) {
    if (x.matches) { 
        $(".main").mouseenter(function () {
            $(this).children().last().css({ "display": "block" });
        })
        $(".main").mouseleave(function () {
            $(this).children().last().css({ "display": "none" });

        })

        // function of navbar arrows

        $(".rightsideoption").mouseenter(function () {
            $(".rightsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".rightsideoption").mouseleave(function () {
            $(this).children().last().hide();

        })

        $(".leftsideoption").mouseenter(function () {
            $(".leftsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".leftsideoption").mouseleave(function () {
            $(this).children().last().hide();

        })

    } else {
        $(".fa-window-close").click(function(){
            $(".sidebar").animate({"right":"-1000px"})
            
        })
        $(".fa-bars").click(function(){
            $(".sidebar").animate({"right":"0"})
        })
        $(".main").click(function (event) {
            $(".option").not($(this).children().last()).hide();
            $(this).children().last().not($(".subcontent")).css({ "display": "block" });
            if($(this)==$(".subcontent").parent().parent().parent()){
                console.log("hello")
            }
        })
        $(".subs").click(function () {
            $(".subcontent").not($(this).children().last()).hide();
            $(this).children().last().css({ "display": "block" });
        })
        $(".rightsideoption").click(function (event) {
            event.preventDefault()
            $(".rightsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".leftsideoption").click(function (event) {
            event.preventDefault()
            $(".leftsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })
    }
}
var x = window.matchMedia("(min-width: 992px)")
myFunction(x) 
x.addListener(myFunction) 

