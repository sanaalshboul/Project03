// Finds an element using its unique ID.
const heading = document.getElementById("heading");
// Finds the first element matching a CSS selector. "Use . for a class and # for an ID."
const class1 = document.querySelector(".class1");

const switchButton= document.getElementById("switchButton");
const activeButton =document.getElementById("activeButton");

switchButton.addEventListener("click", function (){
    heading.textContent= "The page content has been updated";  //Changes or reads the text inside an element.
    class1.textContent = "JavaScript changed this line";

    heading.style.color= "black";      //Changes an element's inline CSS styles.
    class1.style.weight = 800;
}) 

activeButton.addEventListener("click", function(){
    class1.classList.add("active");      // Adds a CSS class to an element without replacing its existing classes.
})