//window.onload = loadPage();
$(document).ready(function() {
		$("#swiper-menu img").css("opacity",.5);
		$("#swiper-menu img").eq(0).css("opacity",1);
	var lbPrecent = 0; //进度默认为0
	//--------------------------------------------------------------
	var mySwiper = new Swiper('#swiper-content', {
		direction: 'horizontal',
		//pagination: '.swiper-pagination',
		//paginationType: 'fraction',
		nextButton: '#snext',
		prevButton: '#sprev',
		onInit: function(swiper) {
			swiperAnimateCache(swiper);
			swiperAnimate(swiper);
		},
		onSlideChangeEnd: function(swiper) {
			swiperAnimate(swiper);
			menuClose();
//			if (mySwiper.activeIndex+1 > lbPrecent) {
//				lbPrecent = mySwiper.activeIndex+1;
//				$("#swiper-content .swiper-slide").eq(mySwiper.activeIndex).children(".iframe").attr("src",lbPrecent+".html");
//			}
			if ($("#swiper-content .swiper-slide").eq(mySwiper.activeIndex).children(".iframe").attr("src")=="") {
				lbPrecent = mySwiper.activeIndex+1;
				$("#swiper-content .swiper-slide").eq(mySwiper.activeIndex).children(".iframe").attr("src",lbPrecent+".html");
			}
			if(mySwiper.activeIndex+1 != 4){
				$("#swiper-content .swiper-slide").eq(3).children(".iframe").attr("src","");
			}else{
				$("#swiper-content .swiper-slide").eq(3).children(".iframe").attr("src","4.html");
			}
			$("#swiper-menu img").css("opacity",.5);
			$("#swiper-menu img").eq(mySwiper.activeIndex).css("opacity",1);
			$("#swiper-menu .swiper-slide").eq(mySwiper.activeIndex).children(".iconVisit").show();
			//console.log(lbPrecent/mySwiper.slides.length*100);
			$(".lb-precent").text((lbPrecent/mySwiper.slides.length*100).toFixed(0)+"%")
			$(".page-Num").text((mySwiper.activeIndex+1)+ "/"+mySwiper.slides.length);
				}
	})
//	mySwiper.slideTo(2); //---------------------------------------------------------------------
	
	var mySwiperMenu = new Swiper('#swiper-menu', {
		direction: 'horizontal',
		//pagination: '.swiper-pagination',
		//paginationType: 'fraction',
		nextButton: '.menu-btn .swiper-button-next',
		prevButton: '.menu-btn .swiper-button-prev',
		slidesPerView: 10,
		slidesPerGroup: 1,
		spaceBetween: 10,
	})

	
	$(".menu-open").click(function(){
		if($(this).attr("data-open")==1){
			$(this).attr("data-open",0);
			//$(this).animate({top:514},800);
//			$(this).html("<span>▼</span>关闭菜单");
			$(this).children("img").attr("src","img/closemenu.png")
			$(".lb-foot .swiper-container").css("z-index",15).animate({
				opacity:1,
			},1500);
			$(".menu-btn").removeClass("hide");
		}else{
//			$(this).attr("data-open",1);
//			//$(this).animate({top:574},200);
//			$(this).children("img").attr("src","img/openmenu.png")
//			$(".lb-foot .swiper-container").css("z-index",-1).animate({
//				opacity:0,
//			},300);
//			$(".menu-btn").addClass("hide");
			menuClose()
		}
	})
	function menuClose(){
		$(".menu-open").attr("data-open",1);
			//$(this).animate({top:574},200);
			$(".menu-open").children("img").attr("src","img/openmenu.png")
			$(".lb-foot .swiper-container").css("z-index",-1).animate({
				opacity:0,
			},300);
			$(".menu-btn").addClass("hide");
	}
	$("#swiper-menu .swiper-slide").click(function(){
		mySwiper.slideTo($(this).index());
		//$("#swiper-content .swiper-slide").eq(mySwiper.activeIndex).children(".iframe").attr("src",($(this).index()+1)+".html");
	})
	
	$("#p1Start").click(function(){
	    mySwiper.slideTo(1);
    })
	$("#page8back").click(function(){
	    mySwiper.slideTo(0);
    })
	$("#p7reStart").click(function(){
	    mySwiper.slideTo(0);
    })
	$("#p7next").click(function(){
	    mySwiper.slideTo(8);
    })


//帮助按钮和弹出层
$(".lb-help, .popHelp .close").click(function(){
	$(".popHelp").slideToggle("fast");
})










	//-------------------------------------------------------------------	
})

