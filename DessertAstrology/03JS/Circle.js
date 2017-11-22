function LoadPicStory(Link, ZodiacCHTName, event) {
    var ControlObj = document.getElementById("ZodicName");
    var ZodiacCHTNameArray = [  "獅子座","巨蟹座","雙子座","金牛座","白羊座","雙魚座",
                                "水瓶座","魔羯座","人馬座","天蠍座","天秤座","處女座"];
    var CircleOutDeg = 0;
    if (ControlObj.innerHTML === ZodiacCHTName){
        return;
    }
    else{
        var NewZodiacCHTNameArray = ZodiacCHTNameArray.slice(0, 12);        //找出未轉前在頂端的星座，順時針排序
        switch (ControlObj.getElementsByTagName("h1")[0].innerText){
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

        ControlObj.innerHTML = "<h1>"+ZodiacCHTName+"</h1>";
        ControlObj = document.getElementById("CircleOutDegree");
        CircleOutDeg = ControlObj.innerHTML;                    //轉盤度數
        ControlObj = document.getElementById("CircleTextContainer");
        ControlObj.style.backgroundImage = "url(" + Link + ")";
        /*ControlObj = document.getElementById("LeftStoryTitle");
        ControlObj.innerHTML = ControlObj.innerHTML.replace(ControlObj.innerHTML.substr(0, 3), ZodiacCHTName);
        ControlObj = document.getElementById("RightStoryTitle");
        ControlObj.innerHTML = ControlObj.innerHTML.replace(ControlObj.innerHTML.substr(0, 3), ZodiacCHTName);*/

        switch (ZodiacCHTName) {
            case "獅子座":
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "07/23~08/22";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　全世界最勇猛的英雄貝拉克里斯，一生中要經過十二項考驗，其中一項就是制伏一頭居在尼米亞森\
                                    林中的食人獅王。這獅被稱為不死怪獸的食人獅，是一頭深具魔性的野獸，有著刀槍不入的皮毛。 貝拉\
                                    克里斯知道他無法用弓箭射死牠，甚至刀子也派不上用場，於是他便赤手空拳與食人獅場開決鬥。貝拉克\
                                    里斯不愧是位大英雄，經過一番激烈的戰鬥後，終於把食人獅的頭折斷。這隻被征服的猛獅，牠雄糾糾的\
                                    英姿就被掛在天空中，形成了獅子座。";
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "太陽";*/

                ControlObj = document.getElementById("CircleOut");
                // ControlObj.style.transform = "rotate(0deg)";

                if (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) < 7){                                  //判斷當前度數的加減，決定等毀而圓盤怎麼轉
                    CircleOutDeg = CircleOutDeg - (NewZodiacCHTNameArray.indexOf(ZodiacCHTName) * 30);
                }
                else{
                    CircleOutDeg = CircleOutDeg - ((180 - ((NewZodiacCHTNameArray.indexOf(ZodiacCHTName) - 6) * 30)) * -1);
                }
                ControlObj.style.transform = "rotate(" + CircleOutDeg +"deg)";
         
                break;

            case "處女座":
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "08/23~09/22";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　宙斯和農神迪米提爾生了一個女兒叫做佩魯雪夫妮，這位純潔美麗的少女卻被冥界之王布魯托劫走。\
                                    佩魯雪夫妮被劫走後，母親迪米提爾傷心不已，使得大地的農作物都為之枯萎了。由於大地寸草不生，人\
                                    民無法生活，宙斯命冥王布魯托歸還佩魯雪夫妮；但是雪夫妮在冥王的計誘下，已吃了冥界的甜石榴，再\
                                    也無法回到人間。傷心的迪米提爾請求宙斯幫忙，宙斯答應讓雪夫妮變成天上的星星，使迪米提爾能每天\
                                    看到她。但雪夫妮非常不願成為天上的星星，於是農神迪米提爾也和愛女一起昇天，在天上與女兒合為一\
                                    體，變成人們所看到的處女座。";
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "水星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "09/23~10/23";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　正義女神阿斯特莉雅，在人們還過著原始生活，和平相處的時代，負責辨別善惡，以做公正的判斷。\
                                    為了公平起見，阿斯特莉雅隨身攜帶天秤，這便是天秤座的兩個天秤。隨著世界的進步，人類的慾望也跟\
                                    著增加，天秤漸漸傾向惡；不論阿斯特莉雅怎麼苦口婆心的勸導，始終沒有人聽信她的話。傷心的阿斯特\
                                    莉雅因為勸阻不了人間的戰爭，便帶著她的天秤返回天上，這就是天秤座。";
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "金星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "10/24~11/21";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　天蠍座的神話故事和臘戶座有很大關連。臘戶座奧利思是海神普恩頓和亞馬遜女王貝歐莉的孩子；奧\
                                    利思是一位非常英俊的青年，而且力大無窮。奧利斯在戰場上所向無敵，但由於他的性行十分暴躁，喜歡\
                                    我行我素，所以眾神都不喜歡他。奧利斯實在太厲害了，眾神雖然都想懲罰他，卻沒有人敢跟他作對。天\
                                    后希拉知道這件事，非常生氣；為了懲罰他，希拉悄悄放了一隻蠍子，趁奧利斯不住意的時候，咬住他的\
                                    腳，奧利斯因此而喪命。毒蠍立下此功候，受到眾神的讚賞，於是就讓牠升天，成為天蠍座。";
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "火星 冥王星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "11/22~12/20";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　在希臘神話故事中，射手座的主角是一個上半身是人形，下半身是馬，名字叫做凱隆的半人半馬怪物\
                                    。凱隆屬於半人馬民族，曾向音樂之神阿波羅及月亮之神阿蒂米斯學習音樂和醫學，愛冒險，也愛自由，\
                                    是當時著名的大力士之一。半人馬民族並未全部開化，他們居住在派力恩上的洞穴中，過著狩獵的生活，\
                                    因此凱隆也是一位狩獵高手。由於他的允文允武，族人都把他視為一個賢者，很尊敬他。有一位向凱隆學\
                                    習守獵之術的年輕人，名字叫做貝拉克利士，在一次獵殺山豬的行動中，不幸將毒箭射到凱隆身上，凱隆\
                                    因此喪命。全能之神宙斯對於凱隆的死，感到惋惜，就把凱隆的身形移到天上，成為射手座。;"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "木星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "12/21~01/20";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　牧羊神潘恩是個上半身人形，下半身是山羊形狀的神，他在森林中、山野間保護羊群，免得他們受到野\
                                    獸襲擊。潘恩非常喜歡音樂，由其他所吹出的笛聲，更是天上仙樂。有一天，眾神齊聚在拿特洛河畔，大開\
                                    宴會，大家吃喝得很高興，潘恩也得意洋洋的吹著他拿手的笛子，這時突然傳來一個恐怖的聲音，然後出現\
                                    了一個又高又大的怪物，眾神害怕受到攻擊，紛紛變成個種怪物躲藏起來。正忘我的吹著笛子的潘恩，已經\
                                    來不及逃了，眼看怪獸一步一步接近，潘恩急忙化身成為一隻山羊，跳入河中。沒想到河裡的水很淺，變成\
                                    山羊的潘恩只有泡在水裡的下半身化身為魚，上半身還是羊的樣子。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "土星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "01/21~02/19";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　在很久以前，一個叫做特若伊的王國中，王子肯尼斯是一位有著陽光般燦的美少年。全能之神宙斯被肯\
                                    尼斯天生純潔的笑容深深吸引住，便化身成一隻老鷹，把肯尼斯抓到奧林帕斯山，並給他一個替眾神斟酒的\
                                    職務。肯尼斯工作勤奮而且俐落，眾神都很喜歡他，宙斯也為自己強行把他抓來而感到奧悔。因此宙斯賜給\
                                    肯尼斯永遠年輕的神力，把它提壺斟酒的模樣留在沈閃耀的群星中。肯尼斯水瓶中所倒出來的，就是眾神的\
                                    智慧之泉。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "土星 天王星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "02/20~03/20";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　可愛的女神阿波娜提帶著兒女艾羅斯，參加眾神在納伊洛河畔舉行的盛大宴會。突然之間，一隻有一百\
                                    個頭及像大蛇一樣身軀的怪物出現，企圖攻擊在場的諸神。於是眾神紛紛變成各種動物逃跑，阿波娜提在慌\
                                    忙之中，趕緊抱著兒子艾羅斯，縱身跳入納伊洛河中，變成魚拼命地逃。阿波娜提母子二人為了不被大水沖\
                                    散，便把尾巴用絲帶繫在一起。這兩條魚的身形在天空中，就是雙魚座。雙魚座，一條代表精神，一條則代\
                                    表軀體。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "木星 海王星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "03/21~04/19";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　很久很久以前，在一個叫做泰莎利亞的王國中，住著一對非常親愛的兄妹，哥哥叫做佛里克索士，妹妹\
                                    叫做葛雷。小兄妹倆不僅長得漂亮，而且乖巧，但仍配被意繼母視為眼中釘，並計話害死他們。他們的生母\
                                    梅菲莉知道後，便懇求全能的神宙斯解救他們倆人。宙斯被梅菲莉的真誠打動了，便送她一隻全身長滿金毛\
                                    ，能在空中飛翔的神羊。金色的神羊一再告誡小兄妹倆人，千萬不要在飛行途中回頭看，兄妹倆答應了，神\
                                    羊便讓二人坐在背上；這對兄妹就緊抱著羊背在天空飛翔。，並且逃離了伊娜的摩掌。他們在飛越海面時，\
                                    葛雷因為太高興了，忘記神羊所說的話，不禁回頭看了一眼，不幸跌落大海中，沒有再浮起來過。神羊悲憫\
                                    葛雷的遭遇，在往目的地飛行時，一面安慰傷心的哥哥，仍不時回頭觀望，看是否能發現葛雷的行跡，因而\
                                    形成了牡羊座。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "火星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "04/20~05/20";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　少女歐羅巴的天真與美麗，深深吸引了全能之神宙斯。宙斯知道天后希拉是的個善妒的女人，為了不讓\
                                    她知道她與歐羅巴之間的私情，於是宙斯就變成了一隻有著晶瑩明的牛角，全身像雪一樣潔白的大公牛去接\
                                    近歐羅斯巴。大公牛背著歐羅巴游過愛琴海到達克里特島上，宙斯再變回原來的樣子，和歐羅巴過著相愛的\
                                    日子。宙斯化身變成的白牛，佇足在夜空中，這就是金牛座。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "金星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "05/21~06/21";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　全能之神宙斯迷戀斯巴達公主莉妲的美貌，化成一隻白鳥接近她。不久，莉妲公主生下一對雙胞胎，叫\
                                    做卡斯特爾和波拉特斯。這一對優秀的年輕人。卡斯特爾以劍術聞名，波拉特斯則精於馬術。兄弟倆一向都\
                                    是並肩作戰，在戰場上如影形，讓敵人聞之喪膽。在一次大戰中，卡斯特爾不幸被義兄伊達士打敗而戰死。\
                                    傷心的波拉特斯雖然殺了伊達士，替卡斯特爾報了仇，但無法再和他在一起。宙斯被波拉特斯深摯的情意所\
                                    感動，為了讓世人永遠記住這份兄弟之愛，於是讓他們在天上永遠生活在一起，便形成了雙子座。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "水星";*/

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
                /*ControlObj = document.getElementById("ZodicPeriod");
                ControlObj.innerHTML = "06/22~07/22";
                ControlObj = document.getElementById("LeftStoryContent");
                ControlObj.innerHTML = "　　貝拉克里斯是全世界最勇猛的英雄，但女神海拉卻不這樣認為。於是貝拉克里斯必須經過十二項考驗，\
                                    其中的一項便是打敗九頭怪物希特拉。貝拉克里斯來到九頭怪物居住著雷洛泥沼澤，和怪物展開生死鬥；經\
                                    過一番激戰，眼看著希特拉就要敗下陣來，憎恨貝拉克里斯的女神海拉，便派了一隻巨大的螃蟹來幫助希特\
                                    拉。大螃蟹緊緊用鉗子挾住貝拉克里斯的腳，貝拉克里斯一氣之下，用另一隻腳把牠踩死。由於巨蟹至死仍\
                                    遵守著女神海拉的命令，女神海拉感謝牠的忠誠，便把牠移到天上化成星星，成為我們所看到的巨蟹座。"
                ControlObj = document.getElementById("RightStoryContent");
                ControlObj.innerHTML = "月亮";*/

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
        CircleRotateText(CircleOutDeg, ZodiacCHTName);

        ControlObj = document.getElementById("CircleOutDegree");
        ControlObj.innerHTML = CircleOutDeg ;
    }
    

    
}

function CircleRotateText(RotateTextDegree, ZodiacCHTName) {
    ControlObj1 = document.getElementsByClassName("CirclSmalleBasic");
    var ExpandNumber = 0;
    switch (ZodiacCHTName) {
        case "獅子座": 
            ExpandNumber = 0;
            break;
        case "處女座":
            ExpandNumber = 11;
            break;
        case "天秤座":
            ExpandNumber = 10;
            break;
        case "天蠍座":
            ExpandNumber = 9;
            break;
        case "人馬座":
            ExpandNumber = 8;
            break;
        case "魔羯座":
            ExpandNumber = 7;
            break;
        case "水瓶座":
            ExpandNumber = 6;
            break;
        case "雙魚座":
            ExpandNumber = 5;
            break;
        case "白羊座":
            ExpandNumber = 4;
            break;
        case "金牛座":
            ExpandNumber = 3;
            break;
        case "雙子座":
            ExpandNumber = 2;
            break;
        case "巨蟹座":
            ExpandNumber = 1;
            break;
    }

    RotateTextDegree = RotateTextDegree * -1;
    for (i = 0; i < ControlObj1.length; i++){
        if (i === ExpandNumber){
            ControlObj1[i].style.transform = "translate(-50% , -50%) rotate(" + RotateTextDegree + "deg) scale(1.0)";
        }
        else{
            ControlObj1[i].style.transform = "translate(-50% , -50%) rotate(" + RotateTextDegree + "deg) scale(1.0)";
        }
        
    
    }    
}




