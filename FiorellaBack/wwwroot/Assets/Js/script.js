let list = document.querySelectorAll("#shop .categories ul li a");
let types = document.querySelectorAll("#shop .types .type");


    for (let element of list) {
        element.onclick = function () {
            document.querySelector(".activeCategory").classList.remove("activeCategory");
            this.classList.add("activeCategory");
            let data_id = this.getAttribute("data-id");
            for (let type of types) {
                if (data_id == type.getAttribute("data-id")) {
                    document.querySelector(".activetype").classList.remove("activetype");
                    type.classList.add("activetype");
                }
            }
        }
    }

    $('.flower').hover(function () {
        let text = $(this).children().last();
        text.children().eq(2).stop(true, true).animate({ "margin-right": "-400px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "107" });
    }, function () {
        let text = $(this).children().last()
        text.children().eq(2).stop(true, true).animate({ "margin-right": "0px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "-400px" });


    });


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