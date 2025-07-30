function showContainer() {
    var photoBlock = document.getElementById("photoBlock");
    var hobbiesBlock = document.getElementById("hobbiesBlock");
    var hobbiesContainers = document.getElementsByClassName("hobbiesContainer");
    var hobbiesCutLines = document.getElementsByClassName("hobbiesCutLine");

    var containerList = [photoBlock, hobbiesBlock];
    var containersList = [hobbiesContainers, hobbiesCutLines]

    for (let i = 0; i < containerList.length; i++) {
        containerList[i].style.display = "block";
        setTimeout(function() {containerList[i].classList.add("show")},10);
    }

    for (let i = 0; i < containersList.length; i++) {
        for (let j = 0; j < containersList[i].length; j++) {
            setTimeout(function() {containersList[i][j].classList.add("show")}, 300 + 100 * j);
        }
    }
}

window.onload = function() {
    showContainer();
}