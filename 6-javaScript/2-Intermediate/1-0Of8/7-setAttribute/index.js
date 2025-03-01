//The setAttribute method sets a class or id value for our tag
let h1Elem = document.getElementById("title");
h1Elem.setAttribute("class", "text");
console.log(h1Elem.getAttribute("class"));

let liElements = document.getElementsByClassName("list-item");
liElements[1].setAttribute("id", "itme");
console.log(liElements[1]);

let ulElements = document.querySelector("div");
ulElements.setAttribute("align", "center");
console.log(ulElements);
