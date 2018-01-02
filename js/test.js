$(function() {
	//单选
	$(".testRadio li").click(function() {
		//$(this).siblings().removeClass("liChoose").attr("data-u", 0);
		//$(this).addClass("liChoose").attr("data-u", 1);
	})
	$(".testRadio .testBtnOk img").click(function() {
		$(this).css("display", "none");
		$(this).parent().siblings(".maskAnswer").show();
		if($(this).parent().siblings(".inputJS").children('ul').find("li input[name='radio-btn'][checked]").val() == $(this).parent().siblings(".inputJS").children(".testInput").attr("data-answer")) {
			$(this).parent().siblings(".answerYes").fadeOut().fadeIn();
			$(this).parent().siblings(".answerNo").hide();
			$(this).parent().siblings(".answerTxt").hide();
			$(this).parent().siblings(".xyyBtnOk").show();
		} else {
			$(this).parent().siblings(".answerNo").fadeOut().fadeIn();
			$(this).parent().siblings(".answerYes").hide();
			$(this).parent().siblings(".answerTxt").hide();
			$(this).parent().siblings(".zqdaBtnOk").show();
			$(this).parent().siblings(".zsycBtnOk").show();
		}
	})

	//多选
	$(".testCheckbox li").click(function() {
		if($(this).attr("data-u") == 1) {
			$(this).removeClass("liChoose").attr("data-u", 0);
		} else {
			$(this).addClass("liChoose").attr("data-u", 1);
		}
	})
	$(".testCheckbox .testBtnOk img").click(function() {
		$(this).css("display", "none");
		$(this).parent().siblings(".maskAnswer").show();
		var checkboxYes = 0;
		var checkboxNo = 0;
		var _yes = $(this).parent().prev().children(".yes");
		var _no = $(this).parent().prev().children(".yes").siblings();
		_yes.each(function() {
			if($(this).attr("data-u") == 1) {
				checkboxYes++;
			}
		})
		_no.each(function() {
			if($(this).attr("data-u") == 1) {
				checkboxNo++;
			}
		})
		if(_yes.length == checkboxYes && checkboxNo == 0) {
			$(this).parent().siblings(".answerYes").fadeOut().fadeIn();
			$(this).parent().siblings(".answerNo").hide();
			$(this).parent().siblings(".answerTxt").hide();
		} else {
			$(this).parent().siblings(".answerNo").fadeOut().fadeIn();
			$(this).parent().siblings(".answerYes").hide();
			$(this).parent().siblings(".answerTxt").hide();
		}
	})

	//拖拽提
	$(".testDrag .testBtnOk img").click(function() {
		$(this).css("display", "none");
		$(this).parent().siblings(".maskAnswer").show();
		if($(this).parent().siblings(".inputJS").children(".testInput").val() == $(this).parent().siblings(".inputJS").children(".testInput").attr("data-answer")) {
			$(this).parent().siblings(".answerYes").fadeOut().fadeIn();
			$(this).parent().siblings(".answerNo").hide();
			$(this).parent().siblings(".answerTxt").hide();
			$(this).parent().siblings(".xyyBtnOk").show();
		} else {
			$(this).parent().siblings(".answerYes").hide();
			$(this).parent().siblings(".answerNo").fadeOut().fadeIn();
			$(this).parent().siblings(".answerTxt").hide();
			$(this).parent().siblings(".zqdaBtnOk").show();
			$(this).parent().siblings(".zsycBtnOk").show();
		}
	})

	$(".testDrag .answerSee").click(function() {
		$(this).parent().css("display", "none");
		$(this).parent().siblings(".answerYes").hide();
		$(this).parent().siblings(".answerNo").hide();
		$(this).parent().siblings(".answerTxt").show();

		$(this).parent().siblings(".inputJS").children(".single-slider").jRange('setValue', $(this).parent().siblings(".inputJS").children(".testInput").attr("data-answer"));
	})

		//再试一次
	$(".testDrag .tryAgain").click(function() {
		$(this).parent().hide();
		$(this).parent().siblings(".zqdaBtnOk").hide();
		$(this).parent().siblings(".testBtnOk").children("img").css("display", "block");
		$(this).parent().siblings(".maskAnswer").hide();
		$(this).parent().siblings(".answerYes").hide();
		$(this).parent().siblings(".answerTxt").hide();
		$(this).parent().siblings(".answerNo").hide();

		$(this).parent().siblings(".inputJS").children(".single-slider").jRange('setValue', $(this).parent().siblings(".inputJS").children(".testInput").attr("data-start"));
		
	})

	//查看答案
	$(".answerSee").click(function() {
		$(this).parent().css("display", "none");
		$(this).parent().siblings(".answerYes").hide();
		$(this).parent().siblings(".answerNo").hide();
		$(this).parent().siblings(".answerTxt").show();

		$(this).parent().siblings(".inputJS").children(".single-slider")
		$('#input1 .single-slider').jRange('setValue', '420');
	})
	//再试一次
	$(".tryAgain").click(function() {
		if ($(this).parent().parent().hasClass("testRadio"))
		{
			$(this).parent().siblings(".inputJS").children('ul').find("li input[name='radio-btn'][checked]").attr("checked", false);
			$(this).parent().siblings(".inputJS").children('ul').find(".radio-btn").removeClass("checkedRadio");
		}
		$(this).parent().hide();
		$(this).parent().siblings(".zqdaBtnOk").hide();
		$(this).parent().siblings(".testBtnOk").children("img").css("display", "block");
		$(this).parent().siblings(".maskAnswer").hide();
		$(this).parent().siblings(".answerYes").hide();
		$(this).parent().siblings(".answerTxt").hide();
		$(this).parent().siblings(".answerNo").hide();
		
	})
	

	// span 123  1 2 3 选项卡切换
	$(".span123").click(function() {
		$(this).addClass("span1");
		$(this).siblings().removeClass("span1");
		$(this).parent().siblings(".div123").children("div").hide();
		$(this).parent().siblings(".div123").children("div").eq($(this).index()).show();
		if ($(this).index() == 2)
		{
			$(".popTestTitle").html('<span style="font-weight:bold;">测试</span>--点击选择你认为正确的数据');
		}else{
			$(".popTestTitle").html('<span style="font-weight:bold;">测试</span>--拖动滑块，选择你认为正确的数据');
		}
	})

	$(".xyyBtnOk img").click(function(){
		//alert('abc');
		$(".span1").next("span").trigger("click");
	})

})