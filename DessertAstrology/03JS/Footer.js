$(document).ready(
    function () {
        var ControlObj = document.getElementsByClassName("ContactFooterSiteMapTitle");
        //註冊點選事件監聽器到每個FooterItem，用DeskNavBar的GoToService、GoToInfo、GoToTeam、GoToSContact Function
        ControlObj[0].addEventListener("click", GoToService);
        ControlObj[1].addEventListener("click", GoToInfo);
        ControlObj[2].addEventListener("click", GoToTeam);
        ControlObj[3].addEventListener("click", GoToSContact);
        //註冊滑鼠移至事件監聽器到每個FooterItem，用DeskNavBar的ChangeToHeavyShadow
        ControlObj[0].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[1].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[2].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj[3].addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        //註冊滑鼠移出事件監聽器到每個FooterItem，用DeskNavBar的ChangeToNoShadow
        ControlObj[0].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[1].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[2].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        ControlObj[3].addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星服務-餐點
        ControlObj = document.getElementById("FooterFood");
        ControlObj.style.cursor="pointer";
        ControlObj.addEventListener("click", GoToServiceSelectFood);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星服務-占卜
        ControlObj = document.getElementById("FooterDivine");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToServiceSelectDivine);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星服務-組合
        ControlObj = document.getElementById("FooterSet");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToServiceSelectSet);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星聞-星消息
        ControlObj = document.getElementById("FooterAnnounce");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToInfoSelectAnnounce);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星聞-星運勢
        ControlObj = document.getElementById("FooterFate");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToInfoSelectFate);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星人-占星師
        ControlObj = document.getElementById("FooterDiviner");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToTeamSelectDiviner);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //點星人-甜點師
        ControlObj = document.getElementById("FooterPastryChef");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToTeamSelectPastryChef);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //聯絡點星-地圖
        ControlObj = document.getElementById("FooterMap");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToContactMap);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //聯絡點星-FB
        ControlObj = document.getElementById("FooterFB");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToFB);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //聯絡點星-IG
        ControlObj = document.getElementById("FooterIG");
        ControlObj.style.cursor = "pointer";
        ControlObj.addEventListener("click", GoToIG);
        ControlObj.addEventListener("mouseover", function () { ChangeToHeavyShadow(this) });
        ControlObj.addEventListener("mouseout", function () { ChangeToNoShadow(this) });
        //FB_LOGO，借用Service.js的ChangeSideBarShadow來做回饋
        ControlObj = document.getElementsByClassName("ContactFB");
        console.log(ControlObj);
        ControlObj[0].style.cursor = "pointer";
        ControlObj[0].addEventListener("click", GoToFB);
        ControlObj[0].addEventListener("mouseover", function () { ChangeSideBarShadow(this) });
        ControlObj[0].addEventListener("mouseout", function () { ChangeSideBarShadow(this) });
        //IG_LOGO，借用Service.js的ChangeSideBarShadow來做回饋
        ControlObj = document.getElementsByClassName("ContactIG");
        console.log(ControlObj);
        ControlObj[0].style.cursor = "pointer";
        ControlObj[0].addEventListener("click", GoToIG);
        ControlObj[0].addEventListener("mouseover", function () { ChangeSideBarShadow(this) });
        ControlObj[0].addEventListener("mouseout", function () { ChangeSideBarShadow(this) });
    }
);

function GoToServiceSelectFood(){
    SideOut(document.getElementsByClassName("ServiceSideBarItem1Pos")[0]);
    GoToService();
    $(".ServiceSideBarItem1Pos").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ServiceSideBarItem1Pos").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);   
}

function GoToServiceSelectDivine() {
    SideOut(document.getElementsByClassName("ServiceSideBarItem2Pos")[0]);
    GoToService();
    $(".ServiceSideBarItem2Pos").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ServiceSideBarItem2Pos").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToServiceSelectSet() {
    SideOut(document.getElementsByClassName("ServiceSideBarItem3Pos")[0]);
    GoToService();
    $(".ServiceSideBarItem3Pos").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ServiceSideBarItem3Pos").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToInfoSelectAnnounce(){
    GoToInfo();
    $(".InfoLeft").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".InfoLeft").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToInfoSelectFate(){
    GoToInfo();
    $(".InfoRight").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".InfoRight").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToTeamSelectDiviner(){
    GoToTeam();
    $(".LeftPeople").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".LeftPeople").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToTeamSelectPastryChef(){
    GoToTeam();
    $(".RightPeople").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".RightPeople").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj); 
}

function GoToContactMap(){
    GoToSContact();
    $(".ContactMap").addClass("Brightness");
    var ShiningObj = setInterval(function () { $(".ContactMap").toggleClass("Brightness") }, 500);
    setTimeout(clearInterval, 3000, ShiningObj);
}

function GoToFB(){
    window.open('http://www.facebook.com.tw','facebook');
}
function GoToIG() {
    window.open('https://www.instagram.com/', 'Instagram');
}