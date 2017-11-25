$(document).ready(
    function () {
        var ControlObj = document.getElementsByClassName("ServiceSideBarItem");
        ControlObj[0].addEventListener("click", function () { SideOut(this) });
        ControlObj[1].addEventListener("click", function () { SideOut(this) });
        ControlObj[2].addEventListener("click", function () { SideOut(this) });
        ServiceContentBtnShow();
        ControlObj = document.getElementsByClassName("ServiceContentLeftBtn");
        ControlObj[0].addEventListener("click", ServiceContentGoLeft);
        ControlObj = document.getElementsByClassName("ServiceContentRightBtn");
        ControlObj[0].addEventListener("click", ServiceContentGoRight);

    }
)

function SideOut(ControlObj) {
    if ($(ControlObj).hasClass("SideBarOut")) {                      //點到一樣的分類直接返回
        return;
    }

    $(".ServiceSideBarItem").removeClass("SideBarOut");             //全部.SideBarOut移除
    $(ControlObj).addClass("SideBarOut");                           //點的標籤加上.SideBarOut

    if ($(ControlObj).hasClass("ServiceSideBarItem1Pos")) {          //點倒是山點的話
        $(".ServiceCircleBtn").animate({ left: "33.334%" }, 500);   //讓餐點的分類出來
    }
    else {
        $(".ServiceCircleBtn").animate({ left: "110%" }, 500, );     //其他標籤則不讓餐點的分類出來
    }

    $(".ServiceContentCardsSlideArea").animate({ top: "110%" }, 500);//卡片區域全部隱藏
    switch (ControlObj.innerText.slice(0, 1)) {                      //標籤類的卡片的區域出現
        case "餐":
            $(".ServiceContentCardsSlideArea.FoodArea").animate({ top: "0%" }, 500);
            break;
        case "占":
            $(".ServiceContentCardsSlideArea.DivineArea").animate({ top: "0%" }, 500);
            break;
        case "組":
            $(".ServiceContentCardsSlideArea.SetArea").animate({ top: "0%" }, 500);
            break;
    }

    ServiceContentBtnShow();
}

function ServiceContentBtnShow() {
    //每個分類標籤都先走一次找出哪一個是被選到的
    for (i = 0; i < $(".ServiceSideBarItem").length; i++) {
        //console.log($(".ServiceSideBarItem:nth-child(" + (i + 1) + ")"));
        // console.log($(".ServiceSideBarItem")[i]);
        //找出哪一個是被選到的
        if ($($(".ServiceSideBarItem")[i]).hasClass("SideBarOut")) {
            // console.log($(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") > .ServiceContentCardsItem" ).length );
            //.ServiceContentCards 底下 第i個.ServiceContentCardsSlideArea 底下 有幾個 .ServiceContentCardsItem
            //如果大於3個就顯示箭頭
            if ($(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") > .ServiceContentCardsItem").length > 3) {
                $(".ServiceContentLeftBtn").animate({ left: "10px" }, 500);
                $(".ServiceContentRightBtn").animate({ right: "10px" }, 500);
            }
            //否則往左右滑動消失
            else {
                $(".ServiceContentLeftBtn").animate({ left: "-25%" }, 500);
                $(".ServiceContentRightBtn").animate({ right: "-25%" }, 500);
            }
        }
    }
}

function ServiceContentGoLeft() {
    //取得Viewport Width的方式
    var vw = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    //每個分類標籤都先走一次找出哪一個是被選到的
    for (i = 0; i < $(".ServiceSideBarItem").length; i++) {
        //找出哪一個是被選到的
        if ($($(".ServiceSideBarItem")[i]).hasClass("SideBarOut")) {
            //比較現在的左移位治是否已經到底(現在的位置是否小於Left: -35%)
            if ($(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") ").css("left").slice(0, -2) <= (vw * 0.583335 * 0.35 * -1)) {
                return;
            }
            else {
                $(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") ").animate({ left: "-=35%" }, 500);
            }
        }
    }
}

function ServiceContentGoRight() {
    //每個分類標籤都先走一次找出哪一個是被選到的
    for (i = 0; i < $(".ServiceSideBarItem").length; i++) {
        //找出哪一個是被選到的
        if ($($(".ServiceSideBarItem")[i]).hasClass("SideBarOut")) {
            //比較現在的又移位治是否已經到底(Left > 0(基準有L:5PX))
            if ($(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") ").css("left").slice(0, -2) >= 0 ){
                return;
            }
            else {
                $(".ServiceContentCards > .ServiceContentCardsSlideArea:nth-child(" + (i + 1) + ") ").animate({ left: "+=35%" }, 500);
            }
        }
    }
}