$(document).ready(
    function(){
        //取得Viewport Width的方式
        var vw = window.innerWidth             
            || document.documentElement.clientWidth
            || document.body.clientWidth;//取得Viewport Width的方式
        var VwOld = vw;
        if(vw < 1200){
            ChangeToPhoneFunction();
        }

        window.addEventListener("resize",
            function(){
                var vw = window.innerWidth             
                || document.documentElement.clientWidth
                || document.body.clientWidth;//取得Viewport Width的方式
                if (vw <= 1200 && VwOld > 1200){
                    ChangeToPhoneFunction();
                    // console.log("phone");
                }
                else if (vw > 1200 && VwOld<=1200){
                    AntiPhoneFunction();
                    // console.log("Anti");
                }
                VwOld = vw;
            }
        )
    }
)

function ChangeToPhoneFunction(){
    //卷軸事件聽器移除
    window.removeEventListener("scroll", function(){});
    //PhoneMenuBar註冊點選監聽器
    var ControlObj = document.getElementsByClassName("PhoneMenuLogo");
    ControlObj[0].addEventListener("click", PhoneMenuPop);
    //註冊PhoneMenu裡面的DropDownBtnClick事件
    ControlObj = document.getElementsByClassName("PhoneDropBtn");
    ControlObj[0].addEventListener("click", function () { PhoneDropDownService(this)})    
    ControlObj[1].addEventListener("click", function () { PhoneDropDownInfo(this) })   
    ControlObj[2].addEventListener("click", function () { PhoneDropDownTeam(this) })  
    ControlObj[3].addEventListener("click", function () { PhoneDropDownContact(this) })
    //PhoneMenu裡面各個項目的超連結
    //PhoneMenuFood餐點
    ControlObj = document.getElementById("PhoneMenuFood");
    ControlObj.addEventListener("click", function () { GoToServiceSelectFood(); PhoneMenuPop();}, );
    //PhoneMenuDivine占卜
    ControlObj = document.getElementById("PhoneMenuDivine");
    ControlObj.addEventListener("click", function () { GoToServiceSelectDivine(); PhoneMenuPop();}, );
    //PhoneMenuSet組合
    ControlObj = document.getElementById("PhoneMenuSet");
    ControlObj.addEventListener("click", function () { GoToServiceSelectSet(); PhoneMenuPop(); }, );
    //PhoneMenuAnnouce消息
    ControlObj = document.getElementById("PhoneMenuAnnouce");
    ControlObj.addEventListener("click", function () { PhoneGoToInfoSelectAnnouce(); PhoneMenuPop(); }, );
    //PhoneMenuFate運勢
    ControlObj = document.getElementById("PhoneMenuFate");
    ControlObj.addEventListener("click", function () { PhoneGoToInfoSelectFate(); PhoneMenuPop(); }, );
    //PhoneMenuDiviner占星師
    ControlObj = document.getElementById("PhoneMenuDiviner");
    ControlObj.addEventListener("click", function () { PhoneGoToTeamSelectDiviner(); PhoneMenuPop(); }, );
    //PhoneMenuPastryChef甜點師
    ControlObj = document.getElementById("PhoneMenuPastryChef");
    ControlObj.addEventListener("click", function () { PhoneGoToTeamSelectPastryChef(); PhoneMenuPop(); }, );
    //PhoneMenuMap地圖
    ControlObj = document.getElementById("PhoneMenuMap");
    ControlObj.addEventListener("click", function () { PhoneGoToContactMap(); PhoneMenuPop(); }, );
    //PhoneMenuFB
    ControlObj = document.getElementById("PhoneMenuFB");
    ControlObj.addEventListener("click", function () { GoToFB(); PhoneMenuPop(); }, );
    //PhoneMenuIG
    ControlObj = document.getElementById("PhoneMenuIG");
    ControlObj.addEventListener("click", function () { GoToIG(); PhoneMenuPop(); }, );
    //改點選LOGO時回到的位置
    ControlObj = document.getElementsByClassName("NavItem");
    ControlObj[2].removeEventListener("click",function(){});
    ControlObj[2].addEventListener("click", PhoneGoToTop )
    //滑動卡片區域
    var TouchPoint =[-1,-1]//閉包變數
    ControlObj = document.getElementsByClassName("ServiceContentCardsSlideArea")
    for(i=0; i<ControlObj.length; i++){
        ControlObj[i].addEventListener("touchstart", function (event) { TouchAreaStart(this, event, TouchPoint);});
        ControlObj[i].addEventListener("touchmove",function (event) { TouchAreaMove(this, event, TouchPoint);})
        ControlObj[i].addEventListener("touchend",function (event) { TouchAreaEnd(this, event, TouchPoint);})
    }
    //更換TAG
    ChangeHTMLTags();
}

function AntiPhoneFunction(){
    //註冊轉軸監聽事件，用DeskNavBar.js裡面的HightLightTextAtDiv()
    window.addEventListener("scroll", HightLightTextAtDiv);
    //PhoneMenuBar取消註冊點選監聽器
    var ControlObj = document.getElementsByClassName("PhoneMenuLogo");
    ControlObj[0].removeEventListener("click",function(){});
    //取消註冊PhoneMenu裡面的DropDownBtnClick事件
    ControlObj = document.getElementsByClassName("PhoneDropBtn");
    ControlObj[0].removeEventListener("click", function () { })    
    ControlObj[1].removeEventListener("click", function () { })   
    ControlObj[2].removeEventListener("click", function () { })  
    ControlObj[3].removeEventListener("click", function () { })
    //取消PhoneMenu裡面各個項目的超連結
    //PhoneMenuFood餐點
    ControlObj = document.getElementById("PhoneMenuFood");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuDivine占卜
    ControlObj = document.getElementById("PhoneMenuDivine");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuSet組合
    ControlObj = document.getElementById("PhoneMenuSet");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuAnnouce消息
    ControlObj = document.getElementById("PhoneMenuAnnouce");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuFate運勢
    ControlObj = document.getElementById("PhoneMenuFate");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuDiviner占星師
    ControlObj = document.getElementById("PhoneMenuDiviner");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuPastryChef甜點師
    ControlObj = document.getElementById("PhoneMenuPastryChef");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuMap地圖
    ControlObj = document.getElementById("PhoneMenuMap");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuFB
    ControlObj = document.getElementById("PhoneMenuFB");
    ControlObj.removeEventListener("click", function () { });
    //PhoneMenuIG
    ControlObj = document.getElementById("PhoneMenuIG");
    ControlObj.removeEventListener("click", function () { });
    //改點選LOGO時回到的位置
    ControlObj = document.getElementsByClassName("NavItem");
    ControlObj[2].removeEventListener("click",function(){});
    ControlObj[2].addEventListener("click", GoToTop );
    //滑動卡片區域取消，卡片回到電腦版初始位置
    ControlObj = document.getElementsByClassName("ServiceContentCardsSlideArea")
    for(i=0; i<ControlObj.length; i++){
        ControlObj[i].removeEventListener("touchstart", function () {});
        ControlObj[i].removeEventListener("touchmove",function () { })
        ControlObj[i].removeEventListener("touchend",function () { })
        ControlObj[i].style.left = "5px";
    }
    //更換TAG
    AntiChangeHTMLTags();
}

function PhoneMenuPop() {
    var PhoneMenuObj = document.querySelector(".PhoneMenu");
    var PhoneMenuLine1 = document.querySelector(".PhoneMenuLogo .PhoneTopLine1");
    var PhoneMenuLine2 = document.querySelector(".PhoneMenuLogo .PhoneTopLine2");
    var PhoneMenuLine3 = document.querySelector(".PhoneMenuLogo .PhoneTopLine3");

    if (PhoneMenuLine2.classList.contains("PhoneTopLine2Pop")) {
        document.getElementById("PhoneTopLine2").style.transitionDelay = "0.5s";
        document.getElementById("PhoneTopLine1").style.transitionDelay = "0s";
        document.getElementById("PhoneTopLine3").style.transitionDelay = "0s";

    }
    else {
        document.getElementById("PhoneTopLine2").style.transitionDelay = "0s";
        document.getElementById("PhoneTopLine1").style.transitionDelay = "0.5s";
        document.getElementById("PhoneTopLine3").style.transitionDelay = "0.5s";
    }

    PhoneMenuObj.classList.toggle("PhoneMenuPop");
    PhoneMenuLine1.classList.toggle("PhoneTopLine1Pop");
    PhoneMenuLine2.classList.toggle("PhoneTopLine2Pop");
    PhoneMenuLine3.classList.toggle("PhoneTopLine3Pop");
    //DropContent回復
    var ControlObj = document.getElementsByClassName("PhoneMenuContent");
    for (i = 0; i < ControlObj.length; i++){
        if (ControlObj[i].classList.contains("PhoneMenuContentPop")){
            ControlObj[i].classList.remove("PhoneMenuContentPop");
        }
    }
    //DropBtn回復
    ControlObj = document.getElementsByClassName("PhoneDropBtn");
    for (i = 0; i < ControlObj.length; i++) {
        if (ControlObj[i].classList.contains("PhoneMenuBtnDirection")) {
            ControlObj[i].classList.remove("PhoneMenuBtnDirection");
        }
    }
}

function PhoneDropDownService(BtnObj){
    var ControlObj = document.getElementsByClassName("PhoneMenuContent");
    console.log(ControlObj[0]);
    ControlObj[0].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownInfo(BtnObj) {
    var ControlObj = document.getElementsByClassName("PhoneMenuContent");
    ControlObj[1].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownTeam(BtnObj) {
    var ControlObj = document.getElementsByClassName("PhoneMenuContent");
    ControlObj[2].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownContact(BtnObj) {
    var ControlObj = document.getElementsByClassName("PhoneMenuContent");
    ControlObj[3].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneGoToTop() {
    document.querySelector(".FakeDivForPhone").scrollIntoView({
        behavior: "smooth"
    });
    $(".HeaderDiv").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".HeaderDiv").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj);
}

function PhoneGoToInfoSelectAnnouce(){
    //取得Viewport Width的方式
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 1.84148 * vw,
        behavior: "smooth"
    });
    $(".InfoLeft").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".InfoLeft").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj); 
}

function PhoneGoToInfoSelectFate(){
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 3.20444 * vw,
        behavior: "smooth"
    });
    $(".InfoRight").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".InfoRight").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj); 
}

function PhoneGoToTeamSelectDiviner(){
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 5.01294 * vw,
        behavior: "smooth"
    });
    $(".LeftPeople").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".LeftPeople").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj);
}

function PhoneGoToTeamSelectPastryChef(){
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 4.330229 * vw,
        behavior: "smooth"
    });
    $(".RightPeople").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".RightPeople").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj); 
}

function PhoneGoToContactMap(){
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 5.78377 * vw,
        behavior: "smooth"
    });
    $(".ContactMap").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ContactMap").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj);
}

function TouchAreaStart(ControlObj, event, TouchPoint){
    TouchPoint[0] = event.touches[0].pageX;
    TouchPoint[1] = event.touches[0].pageY;
    
}

function TouchAreaMove(ControlObj, event, TouchPoint){

    $(ControlObj).css("left" , "+="+ (event.changedTouches[0].pageX - TouchPoint[0]) + "px")
    TouchPoint[0] = event.changedTouches[0].pageX;
    TouchPoint[1] = event.changedTouches[0].pageY;
}

function TouchAreaEnd(ControlObj, event, TouchPoint){
    //取得Viewport Width的方式
    var vw = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
    var TooLeftValue = 0
    if($(ControlObj).hasClass("FoodArea")){
        TooLeftValue = -1.37315 * vw - 5
    }
    else{
        TooLeftValue = -0.91751 * vw - 5
    }


    if($(ControlObj).css("left").slice(0,-2) > 5)
    {
        $(ControlObj).animate({left:"5px"},100);
    }
    else if( $(ControlObj).css("left").slice(0,-2) < TooLeftValue){
        $(ControlObj).animate({left: TooLeftValue + "px"},100);
    }
    TouchPoint[0] = -1;
    TouchPoint[1] = -1;
}


function ChangeHTMLTags(){
    var ControlObj = document.getElementById("ServiceSideBarItem1");
    ControlObj.innerHTML="<h1>餐點</h1>";
    ControlObj = document.getElementById("ServiceSideBarItem2");
    ControlObj.innerHTML = "<h1>占卜</h1>";
    ControlObj = document.getElementById("ServiceSideBarItem3");
    ControlObj.innerHTML = "<h1>組合</h1>";
    ControlObj = document.getElementById("LatestP");
    ControlObj.innerHTML = "<h3>2022-08-01<br> 開幕慶活動，消費金額滿500元，贈塔羅牌占卜一次。</h3>";
    ControlObj = document.getElementById("MidTitle");
    ControlObj.innerHTML = "<h1>點星點將</h1>";
    ControlObj = document.getElementById("MidP");
    ControlObj.innerHTML = "<h3>2022-05-01<br> 點星屋即將正式營運，服務生、甜點助手招募中，請私訊FB粉絲團。</h3>";
    ControlObj = document.getElementById("OldTitle");
    ControlObj.innerHTML = "<h1>開幕預告</h1>";
    ControlObj = document.getElementById("OldP");
    ControlObj.innerHTML = "<h3>2022-01-01<br> 點星屋將於今年八月正式開始營運，請各位繼續關注本站、FB粉絲團及IG喔!</h3>";
    
}

function AntiChangeHTMLTags(){
    var ControlObj = document.getElementById("ServiceSideBarItem1");
    ControlObj.innerHTML="<h1>餐點</h1>";
    ControlObj = document.getElementById("ServiceSideBarItem2");
    ControlObj.innerHTML = "<h1>占卜</h1>";
    ControlObj = document.getElementById("ServiceSideBarItem3");
    ControlObj.innerHTML = "<h1>組合</h1>";
    ControlObj = document.getElementById("LatestP");
    ControlObj.innerHTML = "<h2>2022-08-01<br> 開幕慶活動，消費金額滿500元，贈塔羅牌占卜一次。</h2>";
    ControlObj = document.getElementById("MidTitle");
    ControlObj.innerHTML = "<h3>點星點將</h3>";
    ControlObj = document.getElementById("MidP");
    ControlObj.innerHTML = "<h4>2022-05-01<br> 點星屋即將正式營運，服務生、甜點助手招募中，請私訊FB粉絲團。</h4>";
    ControlObj = document.getElementById("OldTitle");
    ControlObj.innerHTML = "<h5>開幕預告</h5>";
    ControlObj = document.getElementById("OldP");
    ControlObj.innerHTML = "<h6>2022-01-01<br> 點星屋將於今年八月正式開始營運，請各位繼續關注本站、FB粉絲團及IG喔!</h6>";
    
}
