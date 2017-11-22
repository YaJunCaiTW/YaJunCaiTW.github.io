$(document).ready(
    function(){
        var ControlObj = document.getElementsByClassName("NavItem");
        ControlObj[0].addEventListener("click",GoToService);
    }
)

function GoToService(){
    document.querySelector('.FakeDivForService').scrollIntoView({
        behavior: 'smooth'
    });
}