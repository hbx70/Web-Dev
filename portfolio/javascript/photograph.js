function showContainer() {
    let photoBlock = document.getElementById("photoBlock");
    let worksCutLines = document.getElementsByClassName("worksCutLine");
    let libraryContainers = document.getElementsByClassName("libraryContainer");
    let wrappers = document.getElementsByClassName("wrapper");
    
    setTimeout(function() {photoBlock.classList.add("show")}, 10);

    for (let i = 0; i < worksCutLines.length; i++) { // using let for block scope
        worksCutLines[i].style.display = "block";
        setTimeout(function() {worksCutLines[i].classList.add("show");}, 200 * i);
    }

    for (let i = 0; i < libraryContainers.length; i++) { // using let for block scope
        libraryContainers[i].style.display = "block";
        setTimeout(function() {libraryContainers[i].classList.add("show");}, 200 * i);
    }

    for (let i = 0; i < wrappers.length; i++) {
        setTimeout(function() {wrappers[i].classList.add("show");}, 150 * i);
    }
}

function displayInfo(event) {
    targetElement = event.target;
    let photoContainer = targetElement.getElementsByClassName("photoContainer")[0];
    let photoInfoContainer = targetElement.getElementsByClassName("photoInfoContainer")[0];
    let photoInfo = targetElement.getElementsByClassName("photoInfo");
    photoInfoContainer.style.display = "block"
    setTimeout(function() {photoContainer.classList.add("blur"); photoInfoContainer.classList.add("show")}, 10)

    for (let i = 0; i < photoInfo.length; i++) {
        setTimeout(function() {photoInfo[i].classList.add("show")}, 100 + 80 * i)
    }
}

function disappearInfo(event) {   
    targetElement = event.target;
    var timeCount = 100;
    let photoContainer = targetElement.getElementsByClassName("photoContainer")[0];
    let photoInfoContainer = targetElement.getElementsByClassName("photoInfoContainer")[0];
    let photoInfo = targetElement.getElementsByClassName("photoInfo");
    for (let i = 0; i < photoInfo.length; i++) {
        setTimeout(function() {photoInfo[i].classList.remove("show")}, 100 + 80 * i)
        timeCount += 80
    }
    setTimeout(function() {photoContainer.classList.remove("blur"); photoInfoContainer.classList.remove("show")}, timeCount)

    
}

window.onload = function() {
    showContainer()
}