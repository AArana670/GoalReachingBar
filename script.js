const BtnAdd = document.getElementById('BtnAdd');
const progress = document.getElementById('progress');
let index = 0;
const condList = [];
const numList = [];
const DivContainer = document.getElementById("div-container");


function NewBin() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("div-condition");
    newDiv.id = numList.length.toString();
    newDiv.tagName = "bin";
    var newChk = document.createElement("input");
    newChk.type = "checkbox";
    var newTxt = document.createElement("div");
    newTxt.textContent = "New Goal";
    newTxt.spellcheck = false;
    newTxt.contentEditable = true;
    newTxt.id = "txt";
    newTxt.className = "goalName"
    var newNum = document.createElement("input");
    newNum.type = "number";
    newNum.value = "0";
    newNum.name = "bin";
    newNum.id = numList.length.toString() + "num";
    newNum.className = "weightNum";
    var newBtn = document.createElement("button");
    newBtn.classList.add("delBtn");
    newBtn.innerHTML = "X";
    newBtn.addEventListener("click", function () { deleteCon(newDiv.id); });
    numList.push(newNum);
    condList.push(newChk);

    newDiv.appendChild(newTxt);
    newDiv.appendChild(newChk);
    newDiv.appendChild(newNum);
    newDiv.appendChild(newBtn);
    DivContainer.appendChild(newDiv);
}

function NewPer() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("div-condition");
    newDiv.id = numList.length.toString();
    var newPer = document.createElement("input");
    newPer.type = "number";
    newPer.value = "0";
    newPer.className = "perNum";
    var newTxt = document.createElement("div");
    newTxt.textContent = "New Goal";
    newTxt.spellcheck = false;
    newTxt.contentEditable = true;
    newTxt.id = "txt";
    newTxt.className = "goalName"
    var newSym = document.createElement("H3");
    newSym.textContent = "%";
    newSym.id = "%";
    var newNum = document.createElement("input");
    newNum.type = "number";
    newNum.value = "0";
    newNum.name = "per";
    newNum.id = numList.length.toString() + "num";
    newNum.className = "weightNum";
    var newBtn = document.createElement("button");
    newBtn.classList.add("delBtn");
    newBtn.innerHTML = "X";
    newBtn.addEventListener("click", function () { deleteCon(newDiv.id); });

    numList.push(newNum);
    condList.push(newPer);
    newDiv.appendChild(newTxt);
    newDiv.appendChild(newPer);
    newDiv.appendChild(newSym);
    newDiv.appendChild(newNum);
    newDiv.appendChild(newBtn);
    DivContainer.appendChild(newDiv);
}

function NewTime() {
    var newDiv = document.createElement("div");
    newDiv.classList.add("div-condition");
    newDiv.id = numList.length.toString();
    var newHour = document.createElement("input");
    newHour.type = "number";
    newHour.value = "0";
    newHour.className = "timeNum";
    var newSymH = document.createElement("H3");
    newSymH.textContent = "h";
    newSymH.id = "h";
    var newMin = document.createElement("input");
    newMin.type = "number";
    newMin.value = "0";
    newMin.className = "timeNum";
    var newSymM = document.createElement("H3");
    newSymM.textContent = "m";
    newSymM.id = "m";
    var newSec = document.createElement("input");
    newSec.type = "number";
    newSec.value = "0";
    newSec.className = "timeNum";
    var newSymS = document.createElement("H3");
    newSymS.textContent = "s";
    newSymS.id = "s";
    var newTxt = document.createElement("div");
    newTxt.textContent = "New Time Count";
    newTxt.spellcheck = false;
    newTxt.contentEditable = true;
    newTxt.id = "txt";
    newTxt.className = "goalName"
    var newNum = document.createElement("input");
    newNum.type = "number";
    newNum.value = "0";
    newNum.name = "time";
    newNum.id = numList.length.toString() + "num";
    newNum.className = "weightNum";
    var newBtn = document.createElement("button");
    newBtn.classList.add("delBtn");
    newBtn.innerHTML = "X";
    newBtn.addEventListener("click", function () { deleteCon(newDiv.id); });
    numList.push(newNum);
    //condList.push(newChk);

    newDiv.appendChild(newTxt);
    newDiv.appendChild(newHour);
    newDiv.appendChild(newSymH);
    newDiv.appendChild(newMin);
    newDiv.appendChild(newSymM);
    newDiv.appendChild(newSec);
    newDiv.appendChild(newSymS);
    newDiv.appendChild(newNum);
    newDiv.appendChild(newBtn);
    DivContainer.appendChild(newDiv);
}

function deleteCon(pos) {
    document.getElementById(pos + "num").value = "0";
    DivContainer.removeChild(document.getElementById(pos));
}

const setProgress = () => {
    weightList = [];
    for (var i = 0; i < numList.length; i++) {
        weightList.push(numList[i].value);
    }
    index = 0;
    total = 0;
    for (var i = 0; i < numList.length; i++) {
        if (!isNaN(parseFloat(numList[i].value)))
            total += parseFloat(numList[i].value);
    }
    if (total == 0)
        total = 1;
    prop = 100 / total;
    for (var i = 0; i < condList.length; i++) {
        if (numList[i].value < 0)
            numList[i].value = -numList[i].value;
        if (numList[i].name == "bin") {
            if (condList[i].checked)
                index += numList[i].value * prop;
        } else {
            if (numList[i].name == "per") {
                if (condList[i].value < 0)
                    condList[i].value = -condList[i].value;
                if (condList[i].value > 100)
                    condList[i].value = 100;
                index += (condList[i].value / 100) * numList[i].value * prop;
            }
        }

    }

    console.log(index);

    if (index > 100 || index == 99.99999999999999)
        index = 100;
    if (index == 100)
        progress.className = "grProgress";
    else
        progress.className = "blProgress";
    progress.style.width = `${index}%`;

}

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

setInterval(() => {
    setProgress();
}, 100)