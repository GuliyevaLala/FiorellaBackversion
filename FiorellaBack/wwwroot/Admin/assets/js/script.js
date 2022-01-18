let products = document.querySelectorAll(".products .product")
let types = document.querySelectorAll("#shop .types")

    types.forEach(type => {
        type.onclick = function () {
            let dataId = type.getAttribute("data-id")
            let existedProduct = Array.from(document.getElementsByClassName(dataId))
             products.forEach(prod=>{
                 $(prod).css("display","none")
             })
            existedProduct.forEach(existedProduct =>{
                $(existedProduct).css("display","block")
                if (existedProduct=1) {
                 $(".products").css("justify-content","start")
                }
                $(".products").css("justify-content","space-around")
            })
        }
  
    })   
  


    $('#carousel .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('#instagram .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:4
            }
        }
    })