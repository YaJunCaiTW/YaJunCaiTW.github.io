document.getElementById("ListAreaControlUI").addEventListener("click",ToggleMenu);
document.getElementById("LightWhisperSet").addEventListener("click",ToggleFullScreen);

function ToggleMenu(){
    if( $("#ListAreaContainer").css("display") == "none"){
        $("#ListAreaContainer").css("display","flex");
        $("#ListArea").css("background-color","#FFFFE0CC");
        document.getElementById("ListAreaControlUI").innerHTML="<p>╳</p>" 
    }else{
        $("#ListAreaContainer").css("display","none")
        $("#ListArea").css("background-color","transparent");
        document.getElementById("ListAreaControlUI").innerHTML="<p>≡</p>" 
    }
}

function ToggleFullScreen(){
    var doc = window.document;
    var docEl = doc.documentElement;
      
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      
    if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
        requestFullScreen.call(docEl);
        document.getElementById("LightWhisperSet").innerHTML="<p>全螢幕</p>"
    }
    else {
        cancelFullScreen.call(doc);
        document.getElementById("LightWhisperSet").innerHTML="<p>視窗模式</p>"
    }
      
}