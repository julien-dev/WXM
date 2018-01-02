var subSlide = $(".slide-sub");

//遍历
$.each(subSlide, function(name, value) {
	var a = 0;
	subSlide.eq(name).find(".subject-page").find(".btn-select").click(function() {
			var a = $(this).siblings(".btn-select");
			if(a.eq(0).css("color") == "rgb(0, 0, 0)") {
				$(this).css({
					"color": "rgb(238 , 137, 62)"
				})
			} else {
				$(this).css({
					"color": "rgb(238 , 137, 62)"
				})
				a.eq(0).css({
					"color": "rgb(0 , 0, 0)"
				})
			}
		})
		//判断对错
	subSlide.eq(name).find(".btn-submit").click(function() {
		a =0;
			var subLi = $(this).siblings("ul").find(".subject-page");
			$(subLi).each(function(i) {
				var subBtn = subLi.eq(i).find(".btn-select");
				$(subBtn).each(function(j) {
					if(subBtn.eq(j).css("color") == "rgb(238, 137, 62)") {
						var subA = subBtn.eq(j).attr("data-index");
						if(subA == subLi.eq(i).attr("data-index")) {
							a++
							console.log(a + "/" + subLi.length)
						}
					}
				})
			});
			if(a == subLi.length) {
				//mySwiper.slideNext();
				subSlide.eq(name).find(".answerYes").removeClass("hide")
				subSlide.eq(name).find(".bounced").addClass("hid")
			} else {
				subSlide.eq(name).find(".bounced").removeClass("hid")
				subSlide.eq(name).find(".answerYes").addClass("hide")
			}
		})
	$("#next1").click(function(){
		mySwiper.slideTo(1);
	})
	$("#next2").click(function(){
		mySwiper.slideTo(3);
	})
		//再试一次
	subSlide.eq(name).find(".agin").click(function() {
			subSlide.eq(name).find(".bounced").addClass("hid")
			subSlide.eq(name).find(".btn-select").css({
				"color": "rgb(0 , 0, 0)"
			})
		})
		//查看答案
	subSlide.eq(name).find(".check").click(function() {
		subSlide.eq(name).find(".bounced").addClass("hid")
		var subLi = $(this).parent().siblings("ul").find(".subject-page");
		$(subLi).each(function(i) {
			var subBtn = subLi.eq(i).find(".btn-select");
			$(subBtn).each(function(j) {
				if(subBtn.eq(j).attr("data-index") == subLi.eq(i).attr("data-index")) {
					subBtn.eq(j).css({
						"color": "rgb(238, 137, 62)"
					})
				}
			})
		});
	});
});
//拖拽
$(".right-cont div").draggable({
	revert: "invalid"
})
$(".box-wrapper").droppable({
	drop: function(event, ui) {
		$(this).children(".box").text(ui.draggable.text());
		ui.draggable.addClass("hide");
	}
})
					//判断
					//判断
				$("#over").click(function() {
					console.log(1);
					var subBox = $(".box");
					var boxScore = 0;
					$(subBox).each(function(i) {
						if(subBox.eq(i).attr("data-index") == subBox.eq(i).text()) {
							boxScore++;
						}
					})
					if(boxScore == subBox.length) {
						$(".answerYes").removeClass("hide");
					} else {
						$(".answerNo").removeClass("hide");
					}
				})
				$(".tryAgain").click(function() {
					$(".answerNo").addClass("hide");
					$(".box").text("");
					$(".right-cont div").attr("style","position: relative;").removeClass("hide");
				})
				$(".answerSee").click(function() {
					$(".answerNo").addClass("hide");
					$(".box").each(function(i) {
						$(".box").eq(i).text($(this).attr("data-index"))
					});
				});



//$(".right-cont div").draggable({
//	revert: "valid"
//})
//$(".box-wrapper").droppable({
//		drop: function(event, ui) {
//			$(this).children(".box").text(ui.draggable.text());
//			ui.draggable.hide();
//		}
//	})
//$(".right-cont div").draggable({
//	revert: "invalid"
//})
//$(".box-wrapper").droppable({
//		drop: function(event, ui) {
//			$(this).children(".box").text(ui.draggable.text());
//			$("#b1").hide();
//		}
//	})

	//判断
//$("#over").click(function() {
//	var subBox = $(".box");
//	var boxScore = 0;
//	$(subBox).each(function(i) {
//		if(subBox.eq(i).attr("data-index") == subBox.eq(i).text()) {
//			boxScore++
//		}
//	})
//	if(boxScore == subBox.length) {
//		alert("恭喜你已经完成测试！")
//	} else {
//		$(".draggable .bounced").removeClass("hid")
//	}
//})
//$(".draggable .bounced .agin").click(function() {
//	$(".draggable .bounced").addClass("hid")
//	$(".box").text("")
//})
//$(".draggable .bounced .check").click(function() {
//	$(".draggable .bounced").addClass("hid")
//	$(".box").each(function(i) {
//		$(".box").eq(i).text($(this).attr("data-index"))
//	})
//})

