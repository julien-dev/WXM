$(document).ready(function() {
//弹出窗口通用控制
$(".pop .animated").click(function(){
	$(this).children(".iconVisit").show();
	$(this).parent().next().find("div").hide();
	$(this).parent().next().find("div").eq($(this).index()).fadeIn();
})
//左边弹出三角按钮功能
$(".leftNext").click(function(){
	$(this).hide();
	$(this).next().show().animate({left:0})
})
$(".leftBack").click(function(){
	//$(this).hide();
	$(this).animate({left:-465},function(){
		$(this).hide();
		$(this).prev().show();
	})
})
//对勾出现
$(".gth, .write").click(function(){
	$(this).children(".iconVisit").fadeIn();
})

//inpunt test
//$(".testInput").change(function(){
//	$(this).attr("data-answer-u",$(this).val());
//	$(this).siblings(".testInputTxt").text($(this).val());
////	console.log($(this).val())
//})


	
	
	
	
	
	
	
})