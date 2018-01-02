/*
2016-09-12
by libing
abingdesign@gmail.com
以下代码基于jquery（jquery版本不限），请先导入jquery到网页，然后在jquery后面导入此js文件
*/

$(function(){
	//插入全屏按钮到网页最开始
	$("body").prepend("<div style='width: 48px; height: 48px; position: fixed; bottom: 0; left: 0; z-index: 11000;'><img id='fullmini' src='full/fullscreen.png' style='display:none;'></div>");

	//点击全屏
	$("#fullmini").click(function() {
		location.href = "#ipad_reader_full?_r=" + Math.random();
	})

	//全屏按钮状态判断
	function fullMini() {
		var isOnPc = !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
		if(isOnPc) {
			 $("#fullmini").hide(); //电脑访问不显示全屏按钮
		} else{
			 $("#fullmini").show(); //非电脑访问显示全屏按钮
		}
		if($("#fullmini").offset().top >700) {
			$("#fullmini").attr("src", "full/minscreen.png");
		} else {
			$("#fullmini").attr("src", "full/fullscreen.png");
		}
		
	}
	fullMini();
		
	//监测窗口变化
	$(window).resize(function(){
		fullMini();
	})
	
})