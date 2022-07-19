function closeSideNav(){

    document.getElementById("slideMenu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main").style.width = "100%";
}

document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("slideOpen").addEventListener('click',function(){

        document.getElementById("slideMenu").style.width = "40vmax";
        document.getElementById("slideMenu").style.maxWidth = "30vmin";
        document.getElementById("main").style.marginLeft = "30vmin";
        document.getElementById("main").style.width = "70%";

    },false)

    document.getElementById("slideClose").addEventListener('click',closeSideNav,false)

});
