document.getElementById("login-btn").addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'rahat@minhaz.me' && userPassword == 'abcdefgh'){
        window.location.href = 'banking.html';
    }
    console.log("button clicked");
})

// document.getElementById("Deposit-btn").addEventListener("click", function(){
//     const depositInput = document.getElementById("deposit-input");
//     const depositAmount = depositInput.value;
//     console.log("button clicked");
//     const depositTotal = document.getElementById("deposit-total");
//     depositTotal.innerText = depositAmount;
// })