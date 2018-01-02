function runtimeContextInit(isFull, prePage, nextPage)
{
    if($(document).width()>880)
    {
        $("#btn_full").css("background-image","url('images/minscreen.png')");
	}
    else{
       $("#btn_full").css("background-image","url('images/fullscreen.png')");
    }
	
	$("#btn_full").click(function(){
                             location.href="#ipad_reader_full?_r=" + Math.random();
    });
	
}