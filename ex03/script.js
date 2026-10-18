let count=0;

const countDisplay = document.getElementById("count");
const increamentButton = document.getElementById("increament");
const decreamentButton = document.getElementById("decreament");
const resetButton = document.getElementById("reset");


function updateDisplay() {
    countDisplay.textContent =count;

    if (count >0 ){
        countDisplay.style.color = "green";
    }else if (count < 0)
    {
        countDisplay.style.color ="red";
    }else{
        countDisplay.style.color ="black";
    }
}


increamentButton.addEventListener("click", function(){
    count++;
    updateDisplay();
});

decreamentButton.addEventListener("click", function(){
    count--;
    updateDisplay();
});

resetButton.addEventListener("click", function(){
    count = 0;
    updateDisplay();
});


// Set the initial display
updateDisplay();