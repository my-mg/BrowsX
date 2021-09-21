const acctBalanceLbl = document.getElementById("acctBalance");
const deposits = [];
const withdrawals = [];
let totalBalance = 25;
const userDeposit = document.getElementById("userDeposit");
const btnDeposit = document.getElementById("btnDeposit");
const userWithdraw = document.getElementById("userWithdraw");
const btnWithdraw = document.getElementById("btnWithdraw");
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'RM',
    minimumFractionDigits: 2,
  });
btnDeposit.addEventListener('click', () => {
    if (isNaN(userDeposit.value)) {
        alert("Please enter Deposit Value.");
        return userDeposit.value = '';
    } else {
        if (userDeposit.value < 0.10 || userDeposit.value > 12000.90) {
            alert("You can only deposit between RM0.10 and RM12,000.90")
            return userDeposit.value = '';
        } else {
        deposits.push(Number(userDeposit.value));
        totalBalance += (Number(userDeposit.value));
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalance").innerHTML = totalBalanceFormatted;
    console.log("$" + userDeposit.value);
    return userDeposit.value = '';
    }
}
});
btnWithdraw.addEventListener('click', () => {
    if (isNaN(userWithdraw.value)) {
        alert("Please enter a number.");
        return userWithdraw.value = '';
    } else {
        if (userWithdraw.value > totalBalance - 4) {
            alert("Your total balance cannot drop below RM4.00.");
            return userWithdraw.value = '';
        } else {
        withdrawals.push(Number(userWithdraw.value));
        totalBalance -= (Number(userWithdraw.value));
        let totalBalanceFormatted = formatter.format(totalBalance);
        document.getElementById("acctBalance").innerHTML = totalBalanceFormatted;
    console.log("$" + userWithdraw.value);
    return userWithdraw.value = '';
    }
}
});
let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("acctBalanceLbl").innerHTML = totalBalanceFormatted;
