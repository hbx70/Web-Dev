function showContainer() {
    var worksBlock = document.getElementById("worksBlock");
    var aboutMeBlock = document.getElementById("aboutMeBlock");
    var infoBlock = document.getElementById("infoBlockContainer");
    var photoBlock = document.getElementById("photoBlock");
    var containerList = [worksBlock, aboutMeBlock, infoBlock, photoBlock];

    for (let i = 0; i < containerList.length; i++) {
        containerList[i].style.display = "block";
        setTimeout(function() {containerList[i].classList.add("show")}, 10)
    }
}

window.onload = function() {
    showContainer()
}