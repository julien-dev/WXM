$(document).ready(function() {
				//点击外部结构出现第一张效果图
				$(".list-one").click(function() {
					$(this).children(".iconVisit").show();
					$(this).css("color","#fff");
					$(".mask").show();
					$(".img02").hide();
					$(".form").each(function() {
						$(this).hide();
					});
					$(".img01").fadeIn(1000);
				});
				//点击内部结构出现第二张效果图
				$(".list-two").click(function() {
					$(this).children(".iconVisit").show();
					$(this).css("color","#fff");
					$(".img01").hide();
					$(".mask").show();
					$(".form").each(function() {
						$(this).hide();
					});
					$(".img02").fadeIn(1000);
				});
				//变速油箱散热器
				$(".one").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".one-name").fadeIn(1000);

				});
				//变速箱箱体部分
				$(".two").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".two-name").fadeIn(1000);
				});
				//双离合
				$(".three").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".three-name").fadeIn(1000);
				});
				//机电系统
				$(".four").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".four-name").fadeIn(1000);
				});
				
				//第二张图的机电系统
				$(".five").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".five-name").fadeIn(1000);
				});
				//输出轴1，输出轴2
				$(".six").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".six-name").fadeIn(1000);
				});
				//输出轴1
				$(".seven").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".seven-name").fadeIn(1000);
				});
                //输出轴2
				$(".eight").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".eight-name").fadeIn(1000);
				});
                //机油滤清器
				$(".nine").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid()
					$(".nine-name").fadeIn(1000);
				});
                //最终传动装置
				$(".ten").click(function() {
					$(this).css({
						"background-position": "-22px 0px"
					});
					hid();
					$(".ten-name").fadeIn(1000);
				});
				
				function hid() {
					$(".form").each(function() {
						$(this).hide();
					});
				};
			});