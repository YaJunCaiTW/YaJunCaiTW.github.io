$(document).ready(function(){
    //NavBar選單項目註冊監聽事件
    $("#NavBarItem1").click(function(){ChangeContainer(this)});
    $("#NavBarItem2").click(function(){ChangeContainer(this)});
    $("#NavBarItem3").click(function(){ChangeContainer(this)});
    $("#NavBarItem4").click(function(){ChangeContainer(this)});
    //Footer裡面的社群與地圖
    $("#FooterFBLogo").click(function () { OpenWindowHideFooter('https://zh-tw.facebook.com/ironoodles/')});
    $("#FooterLineLogo").click(function () { OpenWindowHideFooter('https://line.me/R/ti/p/1debQCXURz') });
    $("#FooterMapLogo").click(function () { OpenWindowHideFooter('https://www.google.com.tw/maps/place/%E9%89%84%E4%BA%BA%E9%BA%B5%E5%80%89/@24.1521206,120.6874975,18z/data=!3m1!4b1!4m5!3m4!1s0x34693d67f2c55bdd:0xa0b188fcb87ac135!8m2!3d24.1521206!4d120.6884177') });
    //Logo點選回到日常
    $(".Logo").click(function () { ChangeContainer(document.getElementById("NavBarItem1"))});
    //鐵人日常裡面的公布訊息註冊點擊事件
    $(".InformationItem").click(function(){PopInformation(this)});
    //菜單分類按鈕
    $(".MenuAreaButton").click(function(){ChangeMenu(this)});
    $(".MenuAreaButton").hover(function(){ChangeShadow(this)});
    //食材分類按鈕
    $(".MaterialsAreaButton").click(function () { ChangeMaterials(this) });
    $(".MaterialsAreaButton").hover(function () { ChangeShadow(this) })
    //手機板載入後隱藏網址列
    setTimeout(function(){window.scrollTo(0, 1); }, 10);
})

function ChangeContainer(ActiveObj){
    //點到一樣的就直接返回
    if($(ActiveObj).hasClass("active")){
        return;
    }
    //主選單先全部不亮
    $("#NavBarItem1").removeClass("active");
    $("#NavBarItem2").removeClass("active");
    $("#NavBarItem3").removeClass("active");
    $("#NavBarItem4").removeClass("active");
    //選到的亮
    $(ActiveObj).addClass("active");
    //停下且完成當前的動畫
    $("#HomePageDiv").stop(false, true);
    $("#MenuDiv").stop(false, true);
    $("#StoryDiv").stop(false, true);
    $("#MaterialsDiv").stop(true, true);
    //左移現在的DIV
    if( $("#HomePageDiv").css("left").slice(0,-2) >= 0 ){
        
        $("#HomePageDiv").animate({left:"-1000%"},500,"swing");
    }
    if( $("#MenuDiv").css("left").slice(0,-2) >= 0 ){
        
        $("#MenuDiv").animate({left:"-1000%"},500,"swing");
    }
    if( $("#StoryDiv").css("left").slice(0,-2) >= 0 ){
        
        $("#StoryDiv").animate({left:"-1000%"},500,"swing");
    }
    if( $("#MaterialsDiv").css("left").slice(0,-2) >= 0 ){
        
        $("#MaterialsDiv").animate({left:"-1000%"},500,"swing");
    }
    //移出選定的DIV
    switch (ActiveObj.id){
        case "NavBarItem1":
            $("#HomePageDiv").animate({left:"0%"},500,"easeOutElastic");
        break;
    
        case "NavBarItem2":
            $("#MenuDiv").animate({left:"0%"},500,"easeOutElastic");
        break;

        case "NavBarItem3":
            $("#StoryDiv").animate({left:"0%"},500,"easeOutElastic");
        break;

        case "NavBarItem4":
            $("#MaterialsDiv").animate({left:"0%"},500,"easeOutElastic");
        break;

    }
    $("#PnoneNavMenuBar").addClass("collapsed");
    $("#PnoneNavMenuBar").attr("aria-expanded", "false");
    $("#navbarSupportedContent").removeClass("show");
}

function PopInformation(ActiveObj){
    //把全部資訊收合
    $(".InformationText").animate({ height: "0px", opacity: "0" }, 500, "swing")
    //判斷現在點選的資訊是否下拉，如果是就收合併返回
    switch (ActiveObj.id) {
        case "InformationItem1":
            if ($("#InformationText1").css("height").slice(0, -2) > 0) {
                return;
            }
            break;
        case "InformationItem2":
            if ($("#InformationText2").css("height").slice(0, -2) > 0) {
                return;
            }
            break;
        case "InformationItem3":
            if ($("#InformationText3").css("height").slice(0, -2) > 0) {
                return;
            }
            break;
    }
    //選到的先結束收和動畫並展開
    switch (ActiveObj.id){
        case "InformationItem1":
            $(".InformationText").stop(true, true);
                $("#InformationText1").animate({ height: "100%", opacity:"1" }, 500, "swing")

            
        break;
        case "InformationItem2":
            $(".InformationText").stop(true, true);
            $("#InformationText2").animate({ height: "100%", opacity: "1"}, 500, "swing")
        break;
        case "InformationItem3":
            $(".InformationText").stop(true, true);
            $("#InformationText3").animate({ height: "100%", opacity: "1" }, 500, "swing")
        break;
    }
}

function ChangeMenu(ActiveObj){
    $(".MenuAreaButton").removeClass("SelectedButton");
    $(ActiveObj).addClass("SelectedButton");
    $(".MenuContent").animate({ right: "1000%" }, 500, "easeInElastic")
    switch (ActiveObj.id) {
        case "MenuAreaButton1":
            $("#MenuSoupContentRow").stop(true, true);
            $("#MenuSoupContentRow").animate({ right: "0px" }, 500, "swing")
            break;
        case "MenuAreaButton2":
            $("#MenuDryContentRow").stop(true, true);
            $("#MenuDryContentRow").animate({ right: "0px" }, 500, "swing")
            break;
        case "MenuAreaButton3":
            $("#MenuSetContentRow").stop(true, true);
            $("#MenuSetContentRow").animate({ right: "0px" }, 500, "swing")
        break;
        case "MenuAreaButton4":
            $("#MenuLimitContentRow").stop(true, true);
            $("#MenuLimitContentRow").animate({ right: "0px" }, 500, "swing")
        break;
    }
}

function ChangeMaterials(ActiveObj){
    $(".MaterialsAreaButton").removeClass("SelectedButton");
    $(ActiveObj).addClass("SelectedButton");
    $(".MaterialsContent").animate({ right: "1000%" }, 500, "easeInElastic")
    switch (ActiveObj.id) {
        case "MaterialsAreaButton1":
            $("#MaterialsSoupContentRow").stop(true, true);
            $("#MaterialsSoupContentRow").animate({ right: "0px" }, 500, "swing")
            break;
        case "MaterialsAreaButton2":
            $("#MaterialsMenContentRow").stop(true, true);
            $("#MaterialsMenContentRow").animate({ right: "0px" }, 500, "swing")
            break;
        case "MaterialsAreaButton3":
            $("#MaterialsGoodsContentRow").stop(true, true);
            $("#MaterialsGoodsContentRow").animate({ right: "0px" }, 500, "swing")
            break;
    }
}

function ChangeShadow(HoverObj){
    $(HoverObj).toggleClass("HoverButton");
}

function OpenWindowHideFooter(url){
    window.open(url);
    $("#FooterNavMenuBar").addClass("collapsed");
    $("#FooterNavMenuBar").attr("aria-expanded", "false");
    $("#navbarSupportedContent1").removeClass("show");
}