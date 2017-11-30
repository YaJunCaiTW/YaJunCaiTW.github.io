$(document).ready(function(){
    //NavBar選單項目註冊監聽事件
    $("#NavBarItem1").click(function(){ChangeContainer(this)});
    $("#NavBarItem2").click(function(){ChangeContainer(this)});
    $("#NavBarItem3").click(function(){ChangeContainer(this)});
    $("#NavBarItem4").click(function(){ChangeContainer(this)});
    //鐵人日常裡面的公布訊息註冊點擊事件
    $(".InformationItem").click(function(){PopInformation(this)});
    //菜單分類按鈕
    $(".MenuAreaButton").click(function(){ChangeMenu(this)});
    //菜單分類按鈕
    $(".MaterialsAreaButton").click(function () { ChangeMaterials(this) });
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
            $("#HomePageDiv").animate({left:"0%"},500,"swing");
        break;
    
        case "NavBarItem2":
            $("#MenuDiv").animate({left:"0%"},500,"swing");
        break;

        case "NavBarItem3":
            $("#StoryDiv").animate({left:"0%"},500,"swing");
        break;

        case "NavBarItem4":
            $("#MaterialsDiv").animate({left:"0%"},500,"swing");
            console.log(ActiveObj.id)
        break;

    }


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
    $(".MenuContent").animate({ right: "1000%" }, 500, "swing")
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
    $(".MaterialsContent").animate({ right: "1000%" }, 500, "swing")
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