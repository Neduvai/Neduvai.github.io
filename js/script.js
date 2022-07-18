
document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("slideOpen").addEventListener('click',function(){

        document.getElementById("slideMenu").style.width = "28%";
        document.getElementById("main").style.marginLeft = "28%";
        document.getElementById("main").style.width = "72%";

    },false)

    document.getElementById("slideClose").addEventListener('click',function(){

        document.getElementById("slideMenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("main").style.width = "100%";

    },false)

});
