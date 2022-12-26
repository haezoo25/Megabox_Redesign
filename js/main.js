new fullpage('#full-page', {
    licensekey: '',
    sectionsColor: ['#101011', '#101011', '#101011', '#101011', '#101011', '#101011'],
    navigation: true,
    navigationTooltips:['Main', 'Movie', 'Curation', 'Benefit', 'Event', 'Brand video'],
    scrollingSpeed: 2000,
    onLeave: function(origin,destination, direction) {
        console.log('onLeave', origin.index, destination.index);
    },
    afterLoad: function(origin,destination, direction) {
        if(destination.index == 1) {
            $('.s1 h5').show();
        }
    }
});
// 마우스
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
}

// 헤더 메뉴
$(function() {
	$('.hamburger-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
        $('.overlay').toggleClass('visible');

	});
});

// 영화 슬라이드
$(document).ready(function(){

    let carousel = $(".gallery-container").waterwheelCarousel({
        flankingItems: 5, // 몇 개의 컨텐츠를 보여줄 건지 설정
        separation: 250, // 5개 컨텐츠의 사이 설정
        speed: 1000, // 속도 설정
        opacityMultiplier: 1, // 양쪽 2개 opacity 값 설정
        sizeMultiplier: 0.8, // 양쪽 2개 컨텐츠의 크기 설정
        separationMultiplier: 0.5 //양쪽 2개 서로와의 사이 거리 설정
    });
    // $('#carousel_prev').bind('click', function () {
    //     carousel.prev();
    //     return false
    // });
    // $('#carousel_next').bind('click', function () {
    //     carousel.next();
    //     return false;
    // });


// s2 소사이어티
    $("body").on("mousemove",function(e){
        let offset = $(this).offset();
        let scrTop = e.pageY - offset.top;
        let scrLeft = e.pageX - offset.left;

        $('.s2 .step1 img').css({top:(scrTop * 0.1), left:(scrLeft * 0.1),});
        $('.s2 .step2 img').css({top:(scrTop * 0.1), left:(scrLeft * 0.1),});

    });
    $(".s2 h4").on("click",function(){
        $(".s2 h5, .s2 .step2").removeClass("on");
        $(".s2 h4, .s2 .step1").addClass("on");


    });
    $(".s2 h5").on("click",function(){
       $(".s2 h4, .s2 .step1").removeClass("on");
       $(".s2 h5, .s2 .step2").addClass("on");


    });

    // s2 소사이어티 내용변경
    $(".s2 h4").on("click",function(){
        $(".s2 .classic").removeClass("on");
        $(".s2 .film").addClass("on");


    });
    $(".s2 h5").on("click",function(){
       $(".s2 .film").removeClass("on");
       $(".s2 .classic").addClass("on");


    });

    // s3 혜택
    $(".s3 .arrow").on("click", function (){
        if( $(this).hasClass("on")){
            $(this).removeClass("on");
            $(".s3 .benefit-category").removeClass("on");
        } else {
            $(this).addClass("on");
            $(".s3 .benefit-category").addClass("on");
        }
    });




});









