var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0; //Double bars mean "OR"
    var two = parseFloat(numTwo.value) || 0;
    var sum = one + two;
    addSum.innerHTML = "your sum is: " + sum;
    //could also do "your sum is: " + (one + two)
    //to do the addition first, then add to the string
}

// numOne.addEventListener("click", function() {
//     console.log("hi");
//     // alert("hi");
// });

// numOne.addEventListener("mouseenter", function() {
//     console.log("hi");
//     // alert("hi");
// });

// numOne.addEventListener("mouseleave", function() {
//     console.log("hi");
//     // alert("hi");
// });

// numOne.addEventListener("focus", function() {
//     console.log("hi");
//     // alert("hi");
// });

// numOne.addEventListener("blur", function() {
//     console.log("hi");
//     // alert("hi");
// });

//**********************************

var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 3; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}

