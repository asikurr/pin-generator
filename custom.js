 //this function use for generate random number
 document.getElementById("randomNumder").addEventListener('click', () => {
    const randomNumder = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("displayRandomValue").value = randomNumder;
})

//this function use for display input number
let displayValue = '';
const allBtn = document.getElementsByClassName("btn-num");
for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (clickObj) => {
    const inputValue = clickObj.target.innerText;
    displayValue = displayValue + inputValue;
    document.getElementById("match-DisplayValue").value = displayValue;
})
}
//this function use for match random number
document.getElementById("submitBtn").addEventListener('click', () => {
    const currentDisplayNumber = document.getElementById("match-DisplayValue").value;
    const currentDisplayValue = parseInt(currentDisplayNumber);
    const randomNumber = document.getElementById("displayRandomValue").value;
    const randomNumberValue = parseInt(randomNumber)
    if (randomNumberValue === currentDisplayValue) {
        document.getElementById("pin-match-display").style.display = "block";
        document.getElementById("pin-error-display").style.display = "none";
    }else{
       document.getElementById("pin-error-display").style.display = "block";
       document.getElementById("pin-match-display").style.display = "none";
    }
    
})

//this function use for clear screen
document.getElementById("btn-clear").addEventListener('click', () =>{
    displayValue = '';
    document.getElementById("match-DisplayValue").value = displayValue;
    messageDisplay();
})

//this function use for backspace handle
document.getElementById("btn-backSpace").addEventListener('click', () => {
    let displayLength = displayValue.length;
    displayValue = displayValue.slice(0, displayLength-1)
    document.getElementById("match-DisplayValue").value = displayValue;
    messageDisplay();
   
})

function messageDisplay() {
    document.getElementById("pin-error-display").style.display = "none";
    document.getElementById("pin-match-display").style.display = "none";
}
 