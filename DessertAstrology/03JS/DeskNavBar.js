﻿function GoToService(){console.log(document.querySelector(".FakeDivForService")),document.querySelector(".FakeDivForService").scrollIntoView({behavior:"smooth",block:"start"})}function GoToInfo(){console.log(document.querySelector(".InfoDiv")),document.querySelector(".InfoDiv").scrollIntoView({behavior:"smooth",block:"start"})}function GoToTop(){document.querySelector(".HeaderDiv").scrollIntoView({behavior:"smooth",block:"start"}),$(".HeaderDiv").addClass("Brightness");var a=setInterval(function(){$(".HeaderDiv").toggleClass("Brightness")},500);setTimeout(clearInterval,2800,a)}function GoToTeam(){document.querySelector(".TeamDiv").scrollIntoView({behavior:"smooth",block:"start"})}function GoToSContact(){document.querySelector(".ContactDiv").scrollIntoView({behavior:"smooth",block:"start"})}function ChangeToHeavyShadow(a){$(a).addClass("HeavyTextShadow")}function ChangeToNoShadow(a){$(a).removeClass("HeavyTextShadow"),HightLightTextAtDiv()}function ChangeToBrightness(a){$(a).addClass("Brightness")}function ChangeToNoBrightness(a){$(a).removeClass("Brightness"),HightLightTextAtDiv()}function HightLightTextAtDiv(){var a=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;$(".NavItem").removeClass("HeavyTextShadow"),$(".NavItem").removeClass("Brightness"),$(window).scrollTop()<.875*a?$(".NavItem:nth-child(3)").addClass("Brightness"):$(window).scrollTop()<2*a?$(".NavItem:nth-child(1)").addClass("HeavyTextShadow"):$(window).scrollTop()<3*a?$(".NavItem:nth-child(2)").addClass("HeavyTextShadow"):$(window).scrollTop()<4*a?$(".NavItem:nth-child(4)").addClass("HeavyTextShadow"):$(window).scrollTop()<5*a&&$(".NavItem:nth-child(5)").addClass("HeavyTextShadow")}$(document).ready(function(){var a=document.getElementsByClassName("NavItem");HightLightTextAtDiv(),window.addEventListener("scroll",HightLightTextAtDiv),a[0].addEventListener("click",GoToService),a[1].addEventListener("click",GoToInfo),a[2].addEventListener("click",GoToTop),a[3].addEventListener("click",GoToTeam),a[4].addEventListener("click",GoToSContact),a[0].addEventListener("mouseover",function(){ChangeToHeavyShadow(this)}),a[1].addEventListener("mouseover",function(){ChangeToHeavyShadow(this)}),a[2].addEventListener("mouseover",function(){ChangeToBrightness(this)}),a[3].addEventListener("mouseover",function(){ChangeToHeavyShadow(this)}),a[4].addEventListener("mouseover",function(){ChangeToHeavyShadow(this)}),a[0].addEventListener("mouseout",function(){ChangeToNoShadow(this)}),a[1].addEventListener("mouseout",function(){ChangeToNoShadow(this)}),a[2].addEventListener("mouseout",function(){ChangeToNoBrightness(this)}),a[3].addEventListener("mouseout",function(){ChangeToNoShadow(this)}),a[4].addEventListener("mouseout",function(){ChangeToNoShadow(this)});window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight});