document.getElementById("Deposit-btn").addEventListener("click", function(){
         const depositInput = document.getElementById("deposit-amount");
         const depositAmount = depositInput.value;

         const depositTotal = document.getElementById("deposit-total");
         depositTotal.innerText = depositAmount;
         const totalDepositAmount = depositAmount + depositTotal;
         depositInput.value = '';
     })