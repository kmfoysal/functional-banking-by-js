// Common Function and ruduce code (DRY : do not repeat yourself)

function getInputValue(inputId) {
  // Get The Input Ammount
  const inputField = document.getElementById(inputId);
  const inputAmount = parseFloat(inputField.value);

  // Clear the Input field
  inputField.value = "";

  return inputAmount;
}

// Get Current Amount

// Deposit And Withdraw Update With One Function

function totalInputAmount(updatedAmount, inputId) {
  const totalInput = document.getElementById(inputId);
  const previousAmount = parseFloat(totalInput.innerText);

  const newTotalAmount = updatedAmount + previousAmount;

  totalInput.innerText = newTotalAmount;

  return totalInput;
}

// Main Balance Update Function

function updateMainBalence(updatedAmount, isAdd) {
  const totalBalance = document.getElementById("total-balance");
  const previousBalance = parseFloat(totalBalance.innerText);

  if (isAdd == true) {
    const newTotalBalance = previousBalance + updatedAmount;
    totalBalance.innerText = newTotalBalance;
  } else {
    const newTotalBalance = previousBalance - updatedAmount;
    totalBalance.innerText = newTotalBalance;
  }
}

// Add deopsit button Event Handelar

document.getElementById("deposit-btn").addEventListener("click", function () {
  const updateDepositAmount = getInputValue("deposit-box");

  if (updateDepositAmount > 0) {
    totalInputAmount(updateDepositAmount, "total-deposit");
    updateMainBalence(updateDepositAmount, true);
  } 
  else {
    alert("Enter Right Amount Of Cash !!");
  }
});

// Add Withdraw Button Event Handelar
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const updateWithdrawAmount = getInputValue("withdraw-box");

  const totalInput = document.getElementById("total-balance");
  const currentBalence = parseFloat(totalInput.innerText);

  if (updateWithdrawAmount > 0 && updateWithdrawAmount < currentBalence) {
    totalInputAmount(updateWithdrawAmount, "total-withdraw");

    updateMainBalence(updateWithdrawAmount, false);
  } 
  else {
    alert("Enter Right Amount Of Cash !!");
  }
});
