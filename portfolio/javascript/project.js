function showContainer() {
    var photoBlock = document.getElementById("photoBlock");
    var verticalLine = document.getElementById("verticalLine");
    var projectContainers = document.getElementsByClassName("projectContainer");

    setTimeout(function() {photoBlock.classList.add("show")},10);
    setTimeout(function() {verticalLine.classList.add("show")},10);

    for (let i = 0; i < projectContainers.length; i++) {
        setTimeout(function() {projectContainers[i].classList.add("show")},100 + 200 * i);
    }
}

var projInfo1 = document.getElementById("projInfo1");
var projInfo2 = document.getElementById("projInfo2");
var projInfo3 = document.getElementById("projInfo3");
var projInfo4 = document.getElementById("projInfo4");
var animationTimeouts = [];

function displayProjInfo(event) {
    clearAllAnimationTimeouts()

    let targetElement = event.target;
    let targetImg = targetElement.getElementsByClassName("projImg")[0];
    let projDesribe = targetElement.getElementsByClassName("projDesribe")[0];
    projDesribe.style.display = "block"
    setTimeout(function() {targetImg.classList.add("show"); projDesribe.classList.add("show")}, 10)

    let targetProj = document.getElementById("projInfo" + targetElement.id);
    targetProj.style.display = "block";
    let projInfoTitle = targetProj.getElementsByClassName("projInfoTitle");
    let projInfoSubtitle = targetProj.getElementsByClassName("projInfoSubtitle");
    let projectInfoContent = targetProj.getElementsByClassName("projectInfoContent");
    let contentList = [projInfoTitle, projInfoSubtitle, projectInfoContent];
    for (let i = 0; i < contentList.length; i++) {
        for (let j = 0; j < contentList[i].length; j++) {
            let timeoutID = setTimeout(function() {contentList[i][j].classList.add("show")}, 100 + 100 * j);
            animationTimeouts.push(timeoutID);
        }
    }
}

function disappearProjInfo(event) {
    clearAllAnimationTimeouts()

    let targetElement = event.target;
    let targetImg = targetElement.getElementsByClassName("projImg")[0];
    let projDesribe = targetElement.getElementsByClassName("projDesribe")[0];
    setTimeout(function() {targetImg.classList.remove("show"); projDesribe.classList.remove("show")}, 10)
    projDesribe.style.display = "block"

    let targetProj = document.getElementById("projInfo" + targetElement.id);
    targetProj.style.display = "none";

    let projInfoTitle = targetProj.getElementsByClassName("projInfoTitle");
    let projInfoSubtitle = targetProj.getElementsByClassName("projInfoSubtitle");
    let projectInfoContent = targetProj.getElementsByClassName("projectInfoContent");
    let contentList = [projectInfoContent, projInfoSubtitle, projInfoTitle]

    for (let i = 0; i < contentList.length; i++) {
        for (let j = 0; j < contentList[i].length; j++) {
            contentList[i][j].classList.remove("show");
        }
    }            
}

function clearAllAnimationTimeouts() {
    for (let i = 0; i < animationTimeouts.length; i++) {
        clearTimeout(animationTimeouts[i]);
    }
    animationTimeouts = []; // clear the array
}

window.onload = function() {
    showContainer()
}