function showContainer() {
    var photoBlock = document.getElementById("photoBlock");
    var mainContent = document.getElementById("mainContent");
    var verticalLine = document.getElementById("verticalLine");
    var containerList = [photoBlock, mainContent, verticalLine]

    for (let i = 0; i < containerList.length; i++) {
        // containerList[i].style.display = "block";
        setTimeout(function() {containerList[i].classList.add("show")}, 10)
    }
}

function getTimeLeft() {
    // Init the time
    var now = new Date();
    var graduationDay = new Date("2027-04-01");
    var firstDay = new Date("2025-04-01")

    // only take care about days
    now.setHours(0, 0, 0, 0);
    graduationDay.setHours(0, 0, 0, 0);
    firstDay.setHours(0, 0, 0, 0);

    // count number of left and past days
    var differenceMsLeft = graduationDay - now;
    var differenceDayLeft =  differenceMsLeft / (1000 * 60 * 60 * 24);
    var differenceMsPast = now - firstDay;
    var differenceDayPast = differenceMsPast / (1000 * 60 * 60 * 24);            

    // count the past day rate
    var rate = differenceDayPast / 730;
    rate = rate * 100;
    var percentage = Math.round(rate * 100)/100;

    var displayPastRate
    displayPastRate = setInterval(displayPastRateFunction, 1)
    var current = 0;

    function displayPastRateFunction() {
        if (current <= percentage) {
            current += 0.08;
            if (current >= percentage) {
                current = percentage
                clearInterval(displayPastRate)
            }
            document.getElementById("progressPastRate").textContent = current.toFixed(2) + "%";
        }
    }
    
    document.getElementById("days").innerHTML = differenceDayLeft;
    document.getElementById("daysProgressBar").style.width = percentage + "%";
}

function visualizeScore() {
    var simGPA = Number(document.getElementById("simGPA").textContent);
    var uowGPA = Number(document.getElementById("uowGPA").textContent);

    var simGPARate = simGPA / 4;
    var uowGPARate = uowGPA / 7;
    var vRate = 151 / 170;
    var qRate = 170 / 170;
    var awRate = 3.5 / 6;

    var uowCircle = document.getElementById("uowProgressCircle");
    var simCircle = document.getElementById("simProgressCircle");
    var vCircle = document.getElementById("vProgressCircle");
    var qCircle = document.getElementById("qProgressCircle");
    var awCircle = document.getElementById("awProgressCircle");

    var circumference = 2 * Math.PI * 80;
    uowCircle.style.strokeDasharray = String(circumference);
    uowCircle.style.strokeDashoffset = String(circumference);
    simCircle.style.strokeDasharray = String(circumference);
    simCircle.style.strokeDashoffset = String(circumference);
    vCircle.style.strokeDasharray = String(circumference);
    vCircle.style.strokeDashoffset = String(circumference);
    qCircle.style.strokeDasharray = String(circumference);
    qCircle.style.strokeDashoffset = String(circumference);
    awCircle.style.strokeDasharray = String(circumference);
    awCircle.style.strokeDashoffset = String(circumference);

    var uowoffset = circumference * (1 - uowGPARate);
    var simoffset = circumference * (1 - simGPARate);
    var voffset = circumference * (1 - vRate);
    var qoffset = circumference * (1 - qRate);
    var awoffset = circumference * (1 - awRate);
    uowCircle.style.strokeDashoffset = uowoffset;
    simCircle.style.strokeDashoffset = simoffset;
    vCircle.style.strokeDashoffset = voffset;
    qCircle.style.strokeDashoffset = qoffset;
    awCircle.style.strokeDashoffset = awoffset;


    var displayUowGPA
    var displaySimGPA
    var displayVScore
    var displayQScore
    var displayAWScore

    displayUowGPA = setInterval(displayUowFunction, 1)
    displaySimGPA = setInterval(displaySimFunction, 1)
    displayVScore = setInterval(displayVFunction, 1)
    displayQScore = setInterval(displayQFunction, 1)
    displayAWScore = setInterval(displayAWFunction, 1)

    var uowCurrent = 0;
    var simCurrent = 0;
    var vCurrent = 0;
    var qCurrent = 0;
    var awCurrent = 0;

    function displayUowFunction() {
        if (uowCurrent < uowGPA) {
            uowCurrent += 0.025;
            if (uowCurrent >= uowGPA) {
                uowCurrent = uowGPA
                clearInterval(displayUowGPA)
            }
            document.getElementById("uowProgressGPA").textContent = uowCurrent.toFixed(1);
        }
    }

    function displaySimFunction() {
        if (simCurrent < simGPA) {
            simCurrent += 0.013;
            if (simCurrent >= simGPA) {
                simCurrent = simGPA
                clearInterval(displaySimGPA)
            }
            document.getElementById("simProgressGPA").textContent = simCurrent.toFixed(1);
        }
    }

    function displayVFunction() {
        if (vCurrent < 151) {
            vCurrent += 0.5;
            if (vCurrent >= 151) {
                vCurrent = 151;
                clearInterval(displayVScore);
            }
            document.getElementById("vProgressScore").textContent = vCurrent.toFixed(0);
        }
    }

    function displayQFunction() {
        if (qCurrent < 170) {
            qCurrent += 0.58;
            if (qCurrent >= 170) {
                qCurrent = 170;
                clearInterval(displayQScore);
            }
            document.getElementById("qProgressScore").textContent = qCurrent.toFixed(0);
        }
    }

    function displayAWFunction() {
        if (awCurrent < 6) {
            awCurrent += 0.013;
            if (awCurrent >= 3.5) {
                awCurrent = 3.5;
                clearInterval(displayAWScore);
            }
            document.getElementById("awProgressScore").textContent = awCurrent.toFixed(1);
        }
    }


}

window.onload = function() {
    showContainer();
    setTimeout(function() {getTimeLeft();visualizeScore();}, 11); // execute after containers were displayed
}