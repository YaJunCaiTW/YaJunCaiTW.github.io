$(document).ready(
    function () {
        //取得NavItem控制權
        var ControlObj = document.getElementsByClassName("NavItem");
        //決定一次誰被強調，一進網站才知道在哪
        HightLightTextAtDiv();
        //註冊捲動事件監聽聽器
        window.addEventListener("scroll", HightLightTextAtDiv);
        //註冊點選事件監聽器到每個NavItem
        ControlObj[0].addEventListener("click", GoToService);
        ControlObj[1].addEventListener("click", GoToInfo);
        ControlObj[2].addEventListener("click", GoToTop);
        ControlObj[3].addEventListener("click", GoToTeam);
        ControlObj[4].addEventListener("click", GoToSContact); 
        //註冊滑鼠移至事件監聽器到每個NavItem
        ControlObj[0].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[1].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[2].addEventListener("mouseover", function () { ChangeToBrightness(this) });
        ControlObj[3].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[4].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        //註冊滑鼠移出事件監聽器到每個NavItem
        ControlObj[0].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[1].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[2].addEventListener("mouseout", function () { ChangeToNoBrightness(this) });
        ControlObj[3].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[4].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
         //取得Viewport Width的方式
        var vw = window.innerWidth             
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        //取得Viiewport Height的方式
        var vh = window.innerHeight             
            || document.documentElement.clientHeight
            || document.body.clientHeight;
    }
)
//捲動到Service位置
function GoToService() {                         
    document.querySelector(".FakeDivForService").scrollIntoView({
        behavior: "smooth"
    });
}
 //捲動到Info位置
function GoToInfo() {                           
    document.querySelector(".InfoDiv").scrollIntoView({
        behavior: "smooth"
    });
}
//捲動到頂端
function GoToTop() {                             
    document.querySelector(".HeaderDiv").scrollIntoView({
        behavior: "smooth"
    });
    $(".HeaderDiv").addClass("Brightness");
    //閃爍
    var ShiningObj = setInterval(function () { $(".HeaderDiv").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 2800, ShiningObj);
}
//捲動到Team位置
function GoToTeam() {                            
    document.querySelector(".TeamDiv").scrollIntoView({
        behavior: "smooth"
    });
}
//捲動到連絡位置
function GoToSContact() {                        
    document.querySelector(".ContactDiv").scrollIntoView({
        behavior: "smooth"
    });
}
//文字用強調與移除強調效果
function ChangeToHeavyShadow(ControlObj) {       
    $(ControlObj).addClass("HeavyTextShadow");
}
function ChangeToNoShadow(ControlObj) {
    $(ControlObj).removeClass("HeavyTextShadow");
    HightLightTextAtDiv();
}
 //LOGO用強調與移除強調效果
function ChangeToBrightness(ControlObj) {       
    $(ControlObj).addClass("Brightness");
}
function ChangeToNoBrightness(ControlObj) {
    $(ControlObj).removeClass("Brightness");
    HightLightTextAtDiv();
}
//卷軸位置決定誰被強調的副程式
function HightLightTextAtDiv() {
    var vh = window.innerHeight                 //取得Viiewport Height的方式
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    $(".NavItem").removeClass("HeavyTextShadow");//清除所有強調效果
    $(".NavItem").removeClass("Brightness");


    if ($(window).scrollTop() < (0.875 * vh)) {   //依據畫面滾動條位置決定誰被強調
        $(".NavItem:nth-child(3)").addClass("Brightness");
    }
    else if ($(window).scrollTop() < (2.0 * vh)) {
        $(".NavItem:nth-child(1)").addClass("HeavyTextShadow");
    }
    else if ($(window).scrollTop() < (3.0 * vh)) {
        $(".NavItem:nth-child(2)").addClass("HeavyTextShadow");
    }
    else if ($(window).scrollTop() < (4.0 * vh)) {
        $(".NavItem:nth-child(4)").addClass("HeavyTextShadow");
    }
    else if ($(window).scrollTop() < (5.0 * vh)) {
        $(".NavItem:nth-child(5)").addClass("HeavyTextShadow");
    }
}