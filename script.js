    const billAmountEl = document.getElementById("bill-amount");
    const customAmountEl = document.getElementById("custom-value");
    const numberOfPeopleEl = document.getElementById("numberOfpeople");
    const tipPerPersonEl = document.getElementById ("tipperperson");
    const totalAmountEl = document.getElementById("tiptotalperson");
    const defaultAmountEl = document.getElementsByClassName("default-value");   
    const ressetButtonEl = document.getElementById("buttonReset"); 
    function tipCalculator (){    
        billAmountEl.addEventListener("input", activateInput);
        customAmountEl.addEventListener("input", activateInput);
        numberOfPeopleEl.addEventListener("input", activateInput);
        customAmountEl.addEventListener("click", resetButtonColors);
function activateInput(){
            const billAmount = parseFloat(billAmountEl.value) || 0; 
            const customAmount = parseFloat(customAmountEl.value) || 0; 
            const numberOfPeople = parseFloat(numberOfPeopleEl.value) || 1;  
                      
            if (billAmount > 0 || customAmount > 0) {
                const tipPerPerson = (billAmount * customAmount) / 100 / numberOfPeople;
                const totalPerPerson = (billAmount + billAmount * customAmount / 100) / numberOfPeople;
                tipPerPersonEl.innerText = `${tipPerPerson.toFixed(2)}$`;
                totalAmountEl.innerText = `${totalPerPerson.toFixed(2)}$`;
              }
}
for (let i = 0; i < defaultAmountEl.length; i++) 
    defaultAmountEl[i].addEventListener("click", function activate(event) {
        resetButtonColors()
        event.target.style.color = "hsl(183, 100%, 15%)";
        event.target.style.background = "hsl(172, 67%, 45%)";
        ressetButtonEl.style.opacity = "1";        
        customAmountEl.value=parseFloat(event.target.value); 
        activateInput()  ;
        
  });
    function resetButtonColors(){
        for (let i = 0; i < defaultAmountEl.length; i++) {
            defaultAmountEl[i].style.color = "hsl(0, 0%, 100%)";
            defaultAmountEl[i].style.background = "hsl(183, 100%, 15%)";
   }     
    }
    document.addEventListener("change", (e)=>{
        ressetButtonEl.style.opacity = "1";
    })
    document.addEventListener("input", (e)=>{
        ressetButtonEl.style.opacity = "1";
    })   
    ressetButtonEl.addEventListener("click", ()=>{
        ressetButtonEl.style.opacity = "0.5";
        billAmountEl.value = ""; 
        customAmountEl.value = "";
        numberOfPeopleEl.value = "";
        totalAmountEl.value = "0$";
        tipPerPersonEl.value = "0$";

        resetButtonColors()
    })
}
tipCalculator()