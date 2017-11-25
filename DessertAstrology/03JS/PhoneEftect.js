$(document).ready(
    function(){
        //取得Viewport Width的方式
        var vw = window.innerWidth             
            || document.documentElement.clientWidth
            || document.body.clientWidth;//取得Viewport Width的方式
        if(vw < 1200){
            ChangeToPhoneFunction();
        }
        window.addEventListener("resize",
            function(){
                if(vw < 1200){
                    ChangeToPhoneFunction();
                }
            }
        )
    }
)

function ChangeToPhoneFunction(){
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
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { GoToServiceSelectFood(); PhoneMenuPop();}, );
    //PhoneMenuDivine占卜
    ControlObj = document.getElementById("PhoneMenuDivine");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { GoToServiceSelectDivine(); PhoneMenuPop();}, );
    //PhoneMenuSet組合
    ControlObj = document.getElementById("PhoneMenuSet");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { GoToServiceSelectSet(); PhoneMenuPop(); }, );
    //PhoneMenuAnnouce消息
    ControlObj = document.getElementById("PhoneMenuAnnouce");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { PhoneGoToInfoSelectAnnouce(); PhoneMenuPop(); }, );
    //PhoneMenuFate運勢
    ControlObj = document.getElementById("PhoneMenuFate");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { PhoneGoToInfoSelectFate(); PhoneMenuPop(); }, );
    //PhoneMenuDiviner占星師
    ControlObj = document.getElementById("PhoneMenuDiviner");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { PhoneGoToTeamSelectDiviner(); PhoneMenuPop(); }, );
    //PhoneMenuPastryChef甜點師
    ControlObj = document.getElementById("PhoneMenuPastryChef");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { PhoneGoToTeamSelectPastryChef(); PhoneMenuPop(); }, );
    //PhoneMenuMap地圖
    ControlObj = document.getElementById("PhoneMenuMap");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { PhoneGoToContactMap(); PhoneMenuPop(); }, );
    //PhoneMenuFB
    ControlObj = document.getElementById("PhoneMenuFB");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { GoToFB(); PhoneMenuPop(); }, );
    //PhoneMenuIG
    ControlObj = document.getElementById("PhoneMenuIG");
    ControlObj.style.cursor = "pointer";
    ControlObj.addEventListener("click", function () { GoToIG(); PhoneMenuPop(); }, );
    //改點選LOGO時回到的位置
    ControlObj = document.getElementsByClassName("NavItem");
    ControlObj[2].removeEventListener("click",function(){});
    ControlObj[2].addEventListener("click", PhoneGoToTop );

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
    var ControlObj = document.getElementsByClassName('PhoneMenuContent');
    for (i = 0; i < ControlObj.length; i++){
        if ($(ControlObj).hasClass("PhoneMenuContentPop")){
            $(ControlObj).removeClass("PhoneMenuContentPop");
        }
    }
    //DropBtn回復
    ControlObj = document.getElementsByClassName('PhoneDropBtn');
    for (i = 0; i < ControlObj.length; i++) {
        if ($(ControlObj).hasClass("PhoneMenuBtnDirection")) {
            $(ControlObj).removeClass("PhoneMenuBtnDirection");
        }
    }
}

function PhoneDropDownService(BtnObj){
    var ControlObj = document.getElementsByClassName('PhoneMenuContent');
    console.log(ControlObj);
    ControlObj[0].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownInfo(BtnObj) {
    var ControlObj = document.getElementsByClassName('PhoneMenuContent');
    ControlObj[1].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownTeam(BtnObj) {
    var ControlObj = document.getElementsByClassName('PhoneMenuContent');
    console.log(ControlObj);
    ControlObj[2].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneDropDownContact(BtnObj) {
    var ControlObj = document.getElementsByClassName('PhoneMenuContent');
    console.log(ControlObj);
    ControlObj[3].classList.toggle("PhoneMenuContentPop");
    BtnObj.classList.toggle("PhoneMenuBtnDirection");
}

function PhoneGoToTop() {
    document.querySelector('.FakeDivForPhone').scrollIntoView({
        behavior: 'smooth'
    });
}

function PhoneGoToInfoSelectAnnouce(){
    //取得Viewport Width的方式
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    window.scrollTo({
        top: 1.84148 * vw,
        behavior: 'smooth'
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
        behavior: 'smooth'
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
        behavior: 'smooth'
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
        behavior: 'smooth'
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
        behavior: 'smooth'
    });
    $(".ContactMap").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ContactMap").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj);
}