// Home JS Start

// Logout Button
document.getElementById('logout-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
})

// Deposit Button
document.getElementById('deposit-btn').addEventListener('click', function () {
    // get the deposit amount
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // For clearing input field
    depositInput.value = '';


    // Update Account Balance
    const depositBalance = document.getElementById('total-amount');
    const depositBalanceText = depositBalance.innerText;
    const previousDepositBalance = parseFloat(depositBalanceText);
    const newDepositBalance = previousDepositBalance + newDepositAmount;
    depositBalance.innerText = newDepositBalance;
})


// Withdraw Button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get the withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);
    
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // For clearing input field
    withdrawInput.value = '';

    // Update Account Balance
    const withdrawBalance = document.getElementById('total-amount');
    const withdrawBalanceText = withdrawBalance.innerText;
    const previousWithdrawBalance = parseFloat(withdrawBalanceText);
    const newWithdrawBalance = previousWithdrawBalance - newWithdrawAmount;
    withdrawBalance.innerText = newWithdrawBalance;
})
// Home JS End