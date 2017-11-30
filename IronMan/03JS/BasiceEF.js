$(document).ready(function(){
    $("#NavBarItem1").click(function(){ChangeContainer(this)});
    $("#NavBarItem2").click(function(){ChangeContainer(this)});
    $("#NavBarItem3").click(function(){ChangeContainer(this)});
    $("#NavBarItem4").click(function(){ChangeContainer(this)});
})

function ChangeContainer(ActiveObj){
    if($(ActiveObj).hasClass("active")){
        return;
    }
    $("#NavBarItem1").removeClass("active");
    $("#NavBarItem2").removeClass("active");
    $("#NavBarItem3").removeClass("active");
    $("#NavBarItem4").removeClass("active");
    $(ActiveObj).addClass("active");

    if( $("#HomePageDiv").css("left").slice(0,-2) >= 0 ){
        $("#HomePageDiv").animate({left:"-100%"},500,"swing");
    }
    if( $("#MenuDiv").css("left").slice(0,-2) >= 0 ){
        $("#MenuDiv").animate({left:"-100%"},500,"swing");
    }
    if( $("#StoryDiv").css("left").slice(0,-2) >= 0 ){
        $("#StoryDiv").animate({left:"-100%"},500,"swing");
    }
    if( $("#MaterialsDiv").css("left").slice(0,-2) >= 0 ){
        $("#MaterialsDiv").animate({left:"-100%"},500,"swing");
    }

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