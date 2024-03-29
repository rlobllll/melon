// $('.gnb').mouseenter(function(){
//     $('.nav_box').show()
// })
// $('.gnb').mouseleave(function(){
//     $('.nav_box').hide()
// })

// $('.nav_box').mouseenter(function(){
//     $('.nav_box').show()
// })
// $('.nav_box').mouseleave(function(){
//     $('.nav_box').hide()
// })

        // ->mouseenter = 본인만 적용
        // ->mouseover = 자식한테도 적용


// 헤더 메뉴 나오게 하는거 - 위에 주석처리한거랑 아래 둘다 사용 가능
let winW = $(window).width()
$(window).resize(function(){
    winW = $(window).width()
})


$('.gnb').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.gnb').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
})
$('.nav_box').mouseenter(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeIn(200)
    }
})
$('.nav_box').mouseleave(function(){
    if(winW >= 1025){
        $('.nav_box').stop().fadeOut(200)
    }
});




// 햄버거 버튼 메뉴
$ ('header .menu_box .menu > li > a').click(function(){
    $('.submenu').slideUp();
    $(this).parent().find('.submenu').stop().slideToggle();

    return false
})
$('.hambuger').click(function(){
    $('.hambuger').toggleClass('on');
    $('.nav_box').fadeToggle(200)
})




// 왼쪽 고정된 스크롤바 수동으로 하나하나 만들면 이렇게
// $('.main_position_bar a').eq(0).click(function(){
//     $('html').animate({scrollTop:0});
// })

// $('.main_position_bar a').eq(1).click(function(){
//     $('html').animate({scrollTop:1000});
// })

// $('.main_position_bar a').eq(2).click(function(){
//     $('html').animate({scrollTop:1800});
// })

// $('.main_position_bar a').eq(3).click(function(){
//     $('html').animate({scrollTop:2800});
// })






// $('.main_position_bar a').eq(0).click(function(){
//     let slideTop = $('#slide_box').offset().top;
//     $('html').animate({scrollTop:slideTop});
// });
// $('.main_position_bar a').eq(1).click(function(){
//     let sec1Top = $('#section1').offset().top;
//     $('html').animate({scrollTop:sec1Top});
// });
// $('.main_position_bar a').eq(2).click(function(){
//     let sec2Top = $('#section2').offset().top;
//     $('html').animate({scrollTop:sec2Top});
// });
// $('.main_position_bar a').eq(3).click(function(){
//     let sec3Top = $('#section3').offset().top; 
//     $('html').animate({scrollTop:sec3Top});
// });






// 오른쪽 고정 top바
$('.main_position_bar a').click(function(){
    let ssoyung = $(this).attr('href');
    
    let sso = $(ssoyung).offset().top
    $('html').animate({scrollTop:sso});

     return false
});


// 메인 변수
let slideTop, sec1Top, sec2Top, sec3Top

// 서브 변수
let tabTop, textLeft

// 메인페이지 판단코드
if( $('#section_box').length > 0 ){
    slideTop = $('#slide_box').offset().top;  //0
    sec1Top = $('#section1').offset().top;   //919
    sec2Top = $('#section2').offset().top;   //1768.34375
    sec3Top = $('#section3').offset().top;   //2769.34375
} 

if($('.tabmenu').length > 0){
    tabTop = $('.tabmenu').offset().top;
}
if($('.yearBoxTop').length > 0){
    tabTop = $('.yearBoxTop').offset().top;
}




$(window).scroll(function(){
    //왼쪽 고정 스크롤바 
    let scrT = $(window).scrollTop();  //스크롤값
    let winH1 = $(window).height();  
    let docH = $(document).height();  //전체높이
    let barH = $('.main_position_bar').height();
    let dap = (scrT) / (docH - winH1) * 100

    $('.main_position_bar span').css({height:dap+'%'})


    // sec배경 회색에서 컬러로 바뀌게 하기 밑에 주석들 풀면 왼쪽 스크롤바랑 겹쳐져서 오류남
    // if(scrT >= slideTop - 100){
    //     $('.main_position_bar span').css({top:0})
    // }
    // if(scrT >= sec1Top - 100){
    //     $('.main_position_bar span').css({top:50})        
    // }
    if(scrT >= sec2Top - 100){
        // $('.main_position_bar span').css({top:100});
        $('#section2 img.color').fadeIn(500)
    } else {
        $('#section2 img.color').fadeOut(500)
    }
    // if(scrT >= sec3Top - 100){
    //     $('.main_position_bar span').css({top:150})
    // }



    // 오른쪽 top으로 가기 버튼
    let winH = $(window).height()

    if(scrT >= winH/1.5) {
        $('.go_top').css({opacity:1, visibility:'visible'})
    } else {
        $('.go_top').css({opacity:0, visibility:'hidden'})
    }

    // 슬라이드 원 그려지게하는거 그냥 연습임
    // $('.st0').css({strokeDashoffset:450-scrT})



    // 년도별로 스크롤 내릴때 초록색 동그라미 채워지기 디자인 별로라서 뺌
    // let lastTextTop = $('.history .year_box :last-child ul:last-child li.text').outerHeight(true)
    // textLeft = $('.history .text').offset().left;
    // if(scrT >= tabTop){
    //     $('.history .now').css({top:scrT-yearBoxTop+74})

    //     if(scrT >= docH-winH-2){
    //         $('.history .now').css({top:'auto', bottom:0+lastTextTop-10})
    //     }
    // } else {
    //     $('.history .now').css({top:'',bottom:'auto'})
    // }

    /* $('.go_top').text(Math.round(scrT)) */
    


})

// 위에 top으로 가기 버튼 이어지는 거
$('.go_top').click(function(){
    $('html').animate({scrollTop:0})
})

// 위에 슬라이드 원 채워지는거 그냥 연습임
// let total = 210

// $('.real_circle').each(function(){
//     let circleValue = $(this).attr('data-circleValue');
//     let value = (circleValue / 100) * total;
//     $(this).siblings('.circleNumber').text(circleValue)
//     $(this).find('.st3').css({strokeDashoffset:total - value})
//     $(this).find('.circleNumber').text(circleValue + '%')
// })


$('.tabmenu li').click(function(){
    $(this).addClass('active').siblings().removeClass()

    let dataTap = $(this).attr('data-tab');
    $('.year_box .all').hide()
    $('.year_box .'+dataTap).show()

    return false // <- 탭  메뉴(년도) 클릭시, a태그 #때문에 맨위로 올라가는거 방지 (항상 맨밑에작성)
})