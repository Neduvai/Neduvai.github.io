function closeSideNav(){

    document.getElementById("slideMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.width = "100%";
    document.getElementById("recyclerview").style = "display:flex;align-item:center;flex-direction:column;";

}

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("slideOpen").addEventListener('click',function(){

        document.getElementById("slideMenu").style.width = "28%";
        document.getElementById("main").style.marginLeft = "28%";
        document.getElementById("main").style.width = "72%";

    },false)

    document.getElementById("slideClose").addEventListener('click',closeSideNav,false)

});
