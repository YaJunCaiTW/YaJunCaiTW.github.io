$(document).ready(
    function () {
        var ControlObj = document.getElementsByClassName("ServiceSideBarItem");
        ControlObj[0].addEventListener("click", function () { SideOut(this) });
        ControlObj[1].addEventListener("click", function () { SideOut(this) });
        ControlObj[2].addEventListener("click", function () { SideOut(this) });
        $(".ServiceSideBarItem").hover(function () {ChangeSideBarShadow(this)});

        ServiceContentBtnShow();
        //LeftBtn
        ControlObj = document.getElementsByClassName("ServiceContentLeftBtn");
        ControlObj[0].addEventListener("click", ServiceContentGoLeft);
        $(".ServiceContentLeftBtn").hover(function () {ChangeBtnShadow(this)});
        //RighttBtn
        ControlObj = document.getElementsByClassName("ServiceContentRightBtn");
        ControlObj[0].addEventListener("click", ServiceContentGoRight);
        $(".ServiceContentRightBtn").hover(function () {ChangeRightBtnShadow(this)});

        ControlObj = document.getElementsByClassName("ServiceCircleBtnItem");
        ControlObj[0].addEventListener("click", function () { ChangeFoodArea(this) });
        ControlObj[1].addEventListener("click", function () { ChangeFoodArea(this) });
        ControlObj[2].addEventListener("click", function () { ChangeFoodArea(this) });
        ControlObj[3].addEventListener("click", function () { ChangeFoodArea(this) });
        ControlObj[4].addEventListener("click", function () { ChangeFoodArea(this) });
        $(".ServiceCircleBtnItem").hover(function () {ChangeBtnShadow(this)});
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

function ChangeFoodArea(ControlObj){
    if($(ControlObj).hasClass("CircleBtnItemSelected")){
        return;
    }
    //全部變成沒有被選的樣子
    $(".ServiceCircleBtnItem").removeClass("CircleBtnItemSelected");
    for(i =0; i<document.getElementsByClassName("ServiceCircleBtnItem").length;i++){
        document.getElementsByClassName("ServiceCircleBtnItem")[i].style.backgroundImage = "none";
        switch (i){
            case 0:
            document.getElementsByClassName("ServiceCircleBtnItem")[i].innerHTML="<h3>朵娜</h3>";            
            break;

            case 1:
            document.getElementsByClassName("ServiceCircleBtnItem")[i].innerHTML="<h3>蛋糕</h3>";            
            break;

            case 2:
            document.getElementsByClassName("ServiceCircleBtnItem")[i].innerHTML='<div class="CupCake2Line"><h3>杯子<br>蛋糕</h3></div>';
            break;

            case 3:
            document.getElementsByClassName("ServiceCircleBtnItem")[i].innerHTML="<h3>咖啡</h3>";            
            break;

            case 4:
            document.getElementsByClassName("ServiceCircleBtnItem")[i].innerHTML="<h3>茶飲</h3>";            
            break;
        }
    }
    //選到的變成被選的樣子
    ControlObj.innerHTML="";
    console.log(ControlObj.innerHTML);
    $(ControlObj).addClass("CircleBtnItemSelected");
    if($(ControlObj).hasClass("Donut")){
        $(ControlObj).css("background-image" , "url('01Materials/04ServicePic/02Icon/DONUT_ICON.svg')");

        document.getElementById("FoodAreaCard1Pic").style.backgroundImage="url('01Materials/04ServicePic/01Donut/CHOCO_DONUT.jpg')";
        document.getElementById("FoodAreaCard1Title").innerHTML="<h2>巧克力朵娜</h2>";
        document.getElementById("FoodAreaCard1P").innerHTML="<p>朵娜上淋上一層苦甜巧克力，苦甜與柔軟的結合如同人生般，苦苦的卻又柔軟。</p> ";

        document.getElementById("FoodAreaCard2Pic").style.backgroundImage="url('01Materials/04ServicePic/01Donut/STRAW_DONUT.jpg')";
        document.getElementById("FoodAreaCard2Title").innerHTML="<h2>草莓朵娜</h2>";
        document.getElementById("FoodAreaCard2P").innerHTML="<p>草莓淋醬酸甜的滋味，宛如初戀，咬上一口，彷彿回到那最出色又幸福的時光。</p> ";

        document.getElementById("FoodAreaCard3Pic").style.backgroundImage="url('01Materials/04ServicePic/01Donut/ORIGINAL_DONUT.jpg')";
        document.getElementById("FoodAreaCard3Title").innerHTML="<h2>烏登朵娜</h2>";
        document.getElementById("FoodAreaCard3P").innerHTML="<p>烏登是盧恩中的空白符文，是結束也是開始，嘗一口，結束過去，迎接嶄新未來。</p> ";

        document.getElementById("FoodAreaCard4Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard4Title").innerHTML="<h2>國王的朵娜</h2>";
        document.getElementById("FoodAreaCard4P").innerHTML="<p>聰明的人才看的到的朵娜，又大又圓又好吃。</p> ";

        document.getElementById("FoodAreaCard5Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard5Title").innerHTML="<h2>國王的朵娜</h2>";
        document.getElementById("FoodAreaCard5P").innerHTML="<p>聰明的人才看的到的朵娜，又大又圓又好吃。</p> ";
    }
    else if($(ControlObj).hasClass("Cake")){
        $(ControlObj).css("background-image" , "url('01Materials/04ServicePic/02Icon/CAKE_ICON.svg')");

        document.getElementById("FoodAreaCard1Pic").style.backgroundImage="url('01Materials/04ServicePic/06Cake/Tiramisu.jpg')";
        document.getElementById("FoodAreaCard1Title").innerHTML="<h2>圓提拉米蘇</h2>";
        document.getElementById("FoodAreaCard1P").innerHTML="<p>和方的吃起來一樣，適合慶生，代表天、圓滿。</p> ";

        document.getElementById("FoodAreaCard2Pic").style.backgroundImage="url('01Materials/04ServicePic/06Cake/Tiramisu_2.jpg')";
        document.getElementById("FoodAreaCard2Title").innerHTML="<h2>方提拉米蘇</h2>";
        document.getElementById("FoodAreaCard2P").innerHTML="<p>和圓的吃起來一樣，適合獨享，代表地、遼闊。</p> ";

        document.getElementById("FoodAreaCard3Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard3Title").innerHTML="<h2>國王的蛋糕</h2>";
        document.getElementById("FoodAreaCard3P").innerHTML="<p>聰明的人才看的到的蛋糕，又小又綿又好吃。</p>";

        document.getElementById("FoodAreaCard4Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard4Title").innerHTML="<h2>國王的蛋糕</h2";
        document.getElementById("FoodAreaCard4P").innerHTML="<p>聰明的人才看的到的蛋糕，又小又綿又好吃。</p>";

        document.getElementById("FoodAreaCard5Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard5Title").innerHTML="<h2>國王的蛋糕</h2>";
        document.getElementById("FoodAreaCard5P").innerHTML="<p>聰明的人才看的到的蛋糕，又小又綿又好吃。</p>";
    }
    else if($(ControlObj).hasClass("CupCake")){
        $(ControlObj).css("background-image" , "url('01Materials/04ServicePic/02Icon/CUPCAKE_ICON.svg')");
        
        document.getElementById("FoodAreaCard1Pic").style.backgroundImage="url('01Materials/04ServicePic/05CupCake/ChocoCupCake.jpg')";
        document.getElementById("FoodAreaCard1Title").innerHTML="<h2>巧克力杯子</h2>";
        document.getElementById("FoodAreaCard1P").innerHTML="<p>巧克力杯子蛋糕，配上低脂低糖鮮奶油，襯托出巧克力的苦與奶油的綿。</p> ";

        document.getElementById("FoodAreaCard2Pic").style.backgroundImage="url('01Materials/04ServicePic/05CupCake/LOVECupCake.jpg')";
        document.getElementById("FoodAreaCard2Title").innerHTML="<h2>愛的杯子</h2>";
        document.getElementById("FoodAreaCard2P").innerHTML="<p>愛的禮物杯子蛋糕，用盧恩符文的禮物，送給最喜歡的心上人吧!。</p> ";

        document.getElementById("FoodAreaCard3Pic").style.backgroundImage="url('01Materials/04ServicePic/05CupCake/CookieCupCake.jpg')";
        document.getElementById("FoodAreaCard3Title").innerHTML="<h2>發財杯子</h2>";
        document.getElementById("FoodAreaCard3P").innerHTML="<p>菲胡的符號在爐恩符文中帶有財富之義，塊多吃幾個，準備發財。</p> ";

        document.getElementById("FoodAreaCard4Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard4Title").innerHTML="<h2>國王的杯子</h2>";
        document.getElementById("FoodAreaCard4P").innerHTML="<p>聰明的人才看的到的杯子，又大又高又好吃。</p> ";

        document.getElementById("FoodAreaCard5Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard5Title").innerHTML="<h2>國王的杯子</h2>";
        document.getElementById("FoodAreaCard5P").innerHTML="<p>聰明的人才看的到的杯子，又大又高又好吃。</p> ";
    }
    else if($(ControlObj).hasClass("Coffee")){
        $(ControlObj).css("background-image" , "url('01Materials/04ServicePic/02Icon/COFFEE_ICON.svg')");

        document.getElementById("FoodAreaCard1Pic").style.backgroundImage="url('01Materials/04ServicePic/07Coffee/CoffeeMockup.jpg')";
        document.getElementById("FoodAreaCard1Title").innerHTML="<h2>猴子拿鐵</h2>";
        document.getElementById("FoodAreaCard1P").innerHTML="<p>50%的義大利咖啡與50%小農新鮮直送鮮奶，讓拿鐵更有味道。</p> ";

        document.getElementById("FoodAreaCard2Pic").style.backgroundImage="url('01Materials/04ServicePic/07Coffee/CoffeeMockup2.jpg')";
        document.getElementById("FoodAreaCard2Title").innerHTML="<h2>愛的摩卡</h2>";
        document.getElementById("FoodAreaCard2P").innerHTML="<p>巧克力與咖啡的結合，蹦出愛的火花。</p> ";

        document.getElementById("FoodAreaCard3Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard3Title").innerHTML="<h2>國王的咖啡</h2>";
        document.getElementById("FoodAreaCard3P").innerHTML="<p>聰明的人才看的到的咖啡，又苦又濃又好喝。</p> ";

        document.getElementById("FoodAreaCard4Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard4Title").innerHTML="<h2>國王的咖啡</h2>";
        document.getElementById("FoodAreaCard4P").innerHTML="<p>聰明的人才看的到的咖啡，又苦又濃又好喝。</p> ";

        document.getElementById("FoodAreaCard5Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard5Title").innerHTML="<h2>國王的咖啡</h2>";
        document.getElementById("FoodAreaCard5P").innerHTML="<p>聰明的人才看的到的咖啡，又苦又濃又好喝。</p> ";
    }
    else if($(ControlObj).hasClass("Tea")){
        $(ControlObj).css("background-image" , "url('01Materials/04ServicePic/02Icon/TEA_ICON.svg')");

        document.getElementById("FoodAreaCard1Pic").style.backgroundImage="url('01Materials/04ServicePic/08Tea/Tea1.png')";
        document.getElementById("FoodAreaCard1Title").innerHTML="<h2>紅茶</h2>";
        document.getElementById("FoodAreaCard1P").innerHTML="<p>紅茶</p> ";

        document.getElementById("FoodAreaCard2Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard2Title").innerHTML="<h2>國王的茶飲</h2>";
        document.getElementById("FoodAreaCard2P").innerHTML="<p>聰明的人才看的到的茶飲，又清又香又好喝。</p> ";

        document.getElementById("FoodAreaCard3Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard3Title").innerHTML="<h2>國王的茶飲</h2>";
        document.getElementById("FoodAreaCard3P").innerHTML="<p>聰明的人才看的到的茶飲，又清又香又好喝。</p> ";

        document.getElementById("FoodAreaCard4Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard4Title").innerHTML="<h2>國王的茶飲</h2>";
        document.getElementById("FoodAreaCard4P").innerHTML="<p>聰明的人才看的到的茶飲，又清又香又好喝。</p> ";

        document.getElementById("FoodAreaCard5Pic").style.backgroundImage="none";
        document.getElementById("FoodAreaCard5Title").innerHTML="<h2>國王的茶飲</h2>";
        document.getElementById("FoodAreaCard5P").innerHTML="<p>聰明的人才看的到的茶飲，又清又香又好喝。</p> ";
    }
}

function ChangeSideBarShadow(ControlObj){
    $(ControlObj).toggleClass("ChangeSideBarShadow");
}

function ChangeBtnShadow(ControlObj){
    $(ControlObj).toggleClass("ChangeBtnShadow");
}

function ChangeRightBtnShadow(ControlObj){
    $(ControlObj).toggleClass("ChangeRightBtnShadow");
}

