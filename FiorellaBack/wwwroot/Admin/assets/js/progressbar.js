$(document).ready(function(){
    $(".left .background-growing").css("width","95%")
    $(".left .background-watering").css("width","80%")
    $(".left .background-furtilizing").css("width","55%")

    $(".right .background-growing").css("width","95%")
    $(".right .background-watering").css("width","80%")
    $(".right .background-furtilizing").css("width","55%")

    
    $(window).scroll(function(){
        let top = $(window).scrollTop()
        if(top>85){
            $(".bottom .background-growing").css("width","95%")
            $(".bottom .background-watering").css("width","80%")
            $(".bottom .background-furtilizing").css("width","55%")
            var bottomgrowingSpan2 = $(".bottom .watering  .percentage span:nth-child(2)")
    var bottomcurrValue2 = parseInt($(".bottom .watering .percentage").children().last().text())
    
    var bottomnextValue2 = 80
    var bottomdifferent2 = bottomnextValue2 - bottomcurrValue2

    var step = (0< bottomdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(bottomdifferent2) ; i++) {
    
        setTimeout(function(){
            bottomcurrValue2+=step
            bottomgrowingSpan2.text(bottomcurrValue2)
        }, 25 * i);
        
        
    }

    var bottomgrowingSpan3 = $(".bottom .furtilizing  .percentage span:nth-child(2)")
    var bottomcurrValue3 = parseInt($(".bottom .furtilizing .percentage").children().last().text())
    
    var bottomnextValue3 = 55
    var bottomdifferent3 = bottomnextValue3 - bottomcurrValue3

    var step = (0< bottomdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(bottomdifferent3) ; i++) {
    
        setTimeout(function(){
            bottomcurrValue3+=step
            bottomgrowingSpan3.text(bottomcurrValue3)
        }, 25 * i);
        
        
    }
    var bottomgrowingSpan1 = $(".bottom .growing  .percentage span:nth-child(2)")
    var bottomcurrValue1 = parseInt($(".bottom .growing .percentage").children().last().text())
    
    var bottomnextValue1 = 95
    var bottomdifferent1 = bottomnextValue1 - bottomcurrValue1

    var step = (0< bottomdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(bottomdifferent1) ; i++) {
    
        setTimeout(function(){
            bottomcurrValue1+=step
            bottomgrowingSpan1.text(bottomcurrValue1)
        }, 25 * i);   
        
    }
        }

    })

    

    var leftgrowingSpan2 = $(".left .watering  .percentage span:nth-child(2)")
    var leftcurrValue2 = parseInt($(".left .watering .percentage").children().last().text())
    
    var leftnextValue2 = 80
    var leftdifferent2 = leftnextValue2 - leftcurrValue2

    var step = (0< leftdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(leftdifferent2) ; i++) {
    
        setTimeout(function(){
            leftcurrValue2+=step
            leftgrowingSpan2.text(leftcurrValue2)
        }, 25 * i);
        
        
    }

    var leftgrowingSpan3 = $(".left .furtilizing  .percentage span:nth-child(2)")
    var leftcurrValue3 = parseInt($(".left .furtilizing .percentage").children().last().text())
    
    var leftnextValue3 = 55
    var leftdifferent3 = leftnextValue3 - leftcurrValue3

    var step = (0< leftdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(leftdifferent3) ; i++) {
    
        setTimeout(function(){
            leftcurrValue3+=step
            leftgrowingSpan3.text(leftcurrValue3)
        }, 25 * i);
        
        
    }
    var leftgrowingSpan1 = $(".left .growing  .percentage span:nth-child(2)")
    var leftcurrValue1 = parseInt($(".left .growing .percentage").children().last().text())
    
    var leftnextValue1 = 95
    var leftdifferent1 = leftnextValue1 - leftcurrValue1

    var step = (0< leftdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(leftdifferent1) ; i++) {
    
        setTimeout(function(){
            leftcurrValue1+=step
            leftgrowingSpan1.text(leftcurrValue1)
        }, 25 * i);
        
        
    }




    var rightgrowingSpan2 = $(".right .watering  .percentage span:nth-child(2)")
    var rightcurrValue2 = parseInt($(".right .watering .percentage").children().last().text())
    
    var rightnextValue2 = 80
    var rightdifferent2 = rightnextValue2 - rightcurrValue2

    var step = (0< rightdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(rightdifferent2) ; i++) {
    
        setTimeout(function(){
            rightcurrValue2+=step
            rightgrowingSpan2.text(rightcurrValue2)
        }, 25 * i);
        
        
    }

    var rightgrowingSpan3 = $(".right .furtilizing  .percentage span:nth-child(2)")
    var rightcurrValue3 = parseInt($(".right .furtilizing .percentage").children().last().text())
    
    var rightnextValue3 = 55
    var rightdifferent3 = rightnextValue3 - rightcurrValue3

    var step = (0< rightdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(rightdifferent3) ; i++) {
    
        setTimeout(function(){
            rightcurrValue3+=step
            rightgrowingSpan3.text(rightcurrValue3)
        }, 25 * i);
        
        
    }
    var rightgrowingSpan1 = $(".right .growing  .percentage span:nth-child(2)")
    var rightcurrValue1 = parseInt($(".right .growing .percentage").children().last().text())
    
    var rightnextValue1 = 95
    var rightdifferent1 = rightnextValue1 - rightcurrValue1

    var step = (0< rightdifferent1 ? 1 : -1);

    for (let i = 0; i < Math.abs(rightdifferent1) ; i++) {
    
        setTimeout(function(){
            rightcurrValue1+=step
            rightgrowingSpan1.text(rightcurrValue1)
        }, 25 * i);
        
        
    }

    

})
    // let percentages = document.querySelectorAll("main #progress-bar .percentage");
    
    
    // for(let percentage of percentages){
    //     let count = percentage.innerText
    //     let temp = 0
    //     function counting(){
    //         if(temp<count){
    //             setTimeout(function(){
    //                 percentage.innerText = temp;
    //                 temp+=1;
    //                 counting();
    //             },50)
    //         }
    //         else{
    //             setTimeout(function(){
    //                 percentage.innerText = count
    //             },1000)
    //         }
    //     }
    //     counting()
    // }
    // let percentages = document.querySelectorAll(".progress-bar-1 .sides .percentage");
    
    
    // for(let percentage of percentages){
    //     let count = percentage.innerText
    //     let temp = 0
    //     function counting(){
    //         if(temp<count){
    //             setTimeout(function(){
    //                 percentage.innerText = temp;
    //                 temp+=1;
    //                 counting();
    //             },50)
    //         }
    //         else{
    //             setTimeout(function(){
    //                 percentage.innerText = count
    //             },1000)
    //         }
    //     }
    //     counting()
    // }
    