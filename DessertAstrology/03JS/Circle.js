function LoadPicStory(Link, ZodiacCHTName, event) {
    var ControlObj = document.getElementById("ZodicName");                  //取得顯示星座名的物件
    var ZodiacCHTNameArray = ["獅子座", "巨蟹座", "雙子座", "金牛座", "白羊座", "雙魚座",
        "水瓶座", "魔羯座", "人馬座", "天蠍座", "天秤座", "處女座"];
    var CircleOutDeg = 0;                                                   //記錄外圍圓圈的度數
    if (ControlObj.innerText === ZodiacCHTName) {                            //如果名稱依樣就不要做事情
        return;
    }
    else {
        var NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 12);        //找出未轉前在頂端的星座，順時針排序
        switch (ControlObj.getElementsByTagName("h1")[0].innerText) {
            case "獅子座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 12);
                break;
            case "巨蟹座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(1, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 1);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "雙子座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(2, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 2);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "金牛座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(3, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 3);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "白羊座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(4, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 4);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "雙魚座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(5, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 5);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "水瓶座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(6, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 6);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "魔羯座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(7, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 7);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "人馬座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(8, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 8);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "天蠍座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(9, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 9);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "天秤座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(10, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 10);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
            case "處女座":
                NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(11, 12);
                ZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 11);
                NewZodiacCHTNameArray = NewZodiacCHTNameArray.concat(ZodiacCHTNameArray);
                break;
        }
        // console.log(NewZodiacCHTNameArray);

        ControlObj.innerHTML = "<h1>" + ZodiacCHTName + "</h1>";            //更新星座名稱
        ControlObj = document.getElementById("CircleOutDegree");        //取得紀錄度數的物件
        CircleOutDeg = ControlObj.innerHTML;                            //紀錄轉盤度數

        switch (ZodiacCHTName) {
            case "獅子座":

                ControlObj = document.getElementById("Fate");
                ControlObj.innerHTML = "<p>本週因月亮來到獅子，獅子座的朋友心情容易像月亮般陰晴圓缺，特別是外來的影響，心情會大起大落的，面對另一半的時需要好好的表達自己的想法，別遷怒到對方身上喔!不妨來塊象徵溝通能力的信使杯子蛋糕。</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(0deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {                                  //判斷當前度數的加減，決定等毀而圓盤怎麼轉
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "處女座":
                ControlObj = document.getElementById("Fate");
                ControlObj.innerHTML = "<p>處女座運勢</p>";
                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(-30deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "天秤座":
                ControlObj = document.getElementById("Fate");
                ControlObj.innerHTML = "<p>天秤座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(-60deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "天蠍座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>天蠍座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(-90deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "人馬座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>人馬座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(-120deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "魔羯座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>魔羯座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(-150deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "水瓶座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>水瓶座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(180deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "雙魚座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>雙魚座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(150deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "白羊座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>白羊座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(120deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "金牛座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>金牛座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(90deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

            case "雙子座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>雙子座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(60deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;
            case "巨蟹座":
            ControlObj = document.getElementById("Fate");
            ControlObj.innerHTML = "<p>巨蟹座運勢</p>";

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(30deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7) {
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else {
                    // CircleOutDeg = CircleOutDeg.valueOf();
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg + "deg)";

                break;

        }
        // ControlObj = document.getElementsByClassName("CirclSmalleBasic");
        CircleRotateText(CircleOutDeg, ZodiacCHTName, Link);

        ControlObj = document.getElementById("CircleOutDegree");
        ControlObj.innerHTML = CircleOutDeg;
    }



}

function CircleRotateText(RotateTextDegree, ZodiacCHTName, Link) {
    ControlObj1 = document.getElementsByClassName("CirclSmalleBasic");  //取得所有小圓圈的控制權
    var ExpandNumber = 0;                                               //紀錄要被放大的是第幾個小圓圈
    var TranslateX = 0;                                                 //紀錄要被放大的小圓圈座標轉換
    var TranslateY = 0;
    for (i = 0; i < ControlObj1.length; i++) {                            //初始化小圓圈背景與文字
        ControlObj1[i].style.backgroundImage = "none";
        switch (i) {
            case 0:
                ControlObj1[i].innerHTML = "獅子";
                break;
            case 1:
                ControlObj1[i].innerHTML = "巨蟹";
                break;
            case 2:
                ControlObj1[i].innerHTML = "雙子";
                break;
            case 3:
                ControlObj1[i].innerHTML = "金牛";
                break;
            case 4:
                ControlObj1[i].innerHTML = "白羊";
                break;
            case 5:
                ControlObj1[i].innerHTML = "雙子";
                break;
            case 6:
                ControlObj1[i].innerHTML = "水瓶";
                break;
            case 7:
                ControlObj1[i].innerHTML = "魔羯";
                break;
            case 8:
                ControlObj1[i].innerHTML = "人馬";
                break;
            case 9:
                ControlObj1[i].innerHTML = "天蠍";
                break;
            case 10:
                ControlObj1[i].innerHTML = "天秤";
                break;
            case 11:
                ControlObj1[i].innerHTML = "處女";
                break;
        }
    }
    switch (ZodiacCHTName) {                                            //依據不同星座給予不同變數數值
        case "獅子座":
            ExpandNumber = 0;
            TranslateX = -50;
            TranslateY = -16.666;
            break;
        case "處女座":
            ExpandNumber = 11;
            TranslateX = -33.334;
            TranslateY = -21.132;
            break;
        case "天秤座":
            ExpandNumber = 10;
            TranslateX = -21.132;
            TranslateY = -33.334;
            break;
        case "天蠍座":
            ExpandNumber = 9;
            TranslateX = -16.666;
            TranslateY = -50;
            break;
        case "人馬座":
            ExpandNumber = 8;
            TranslateX = -21.132;
            TranslateY = -66.666;
            break;
        case "魔羯座":
            ExpandNumber = 7;
            TranslateX = -33.334;
            TranslateY = -71.132;
            break;
        case "水瓶座":
            ExpandNumber = 6;
            TranslateX = -50;
            TranslateY = -83.334;
            break;
        case "雙魚座":
            ExpandNumber = 5;
            TranslateX = -66.666;
            TranslateY = -71.132;
            break;
        case "白羊座":
            ExpandNumber = 4;
            TranslateX = -71.132;
            TranslateY = -66.666;
            break;
        case "金牛座":
            ExpandNumber = 3;
            TranslateX = -83.334;
            TranslateY = -50;
            break;
        case "雙子座":
            ExpandNumber = 2;
            TranslateX = -71.132;
            TranslateY = -33.334;
            break;
        case "巨蟹座":
            ExpandNumber = 1;
            TranslateX = -66.666;
            TranslateY = -21.132;
            break;
    }

    RotateTextDegree = RotateTextDegree * -1;                           //修正小圓圈的度數
    for (i = 0; i < ControlObj1.length; i++) {                           //依據ExpandNumber給予不同的配置
        if (i === ExpandNumber) {
            ControlObj1[i].innerHTML = "";                            
            ControlObj1[i].style.transform = "translate(" + TranslateX + "% , " + TranslateY + "%) rotate(" + RotateTextDegree + "deg) scale(1.4)";
            ControlObj1[i].style.backgroundImage = "url(" + Link + ")";
        }
        else {
            ControlObj1[i].style.transform = "translate(-50% , -50%) rotate(" + RotateTextDegree + "deg) scale(1.0)";
        }


    }
}




