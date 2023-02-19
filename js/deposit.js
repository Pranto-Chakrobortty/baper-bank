document.getElementById('btn-deposit').addEventListener('click', function () {

    const depositFiled = document.getElementById('user-deposit');
    const deposit = depositFiled.value;
    const depositNumber = parseFloat(deposit);
    depositFiled.value = '';

    if(isNaN(depositNumber)){
        alert('Please Input Valid Number');
        return;
    }

    const addDeposit = document.getElementById('add-deposit');

    const preTotalDeposit = addDeposit.innerText;
    const preTotalDepositNumber = parseFloat(preTotalDeposit);

    const newDeposit = preTotalDepositNumber + depositNumber;

    addDeposit.innerText = newDeposit;

    const balanceFiled = document.getElementById('add-balance');
    const addBalance = balanceFiled.innerText;
    const totalBalance = parseFloat(addBalance);
    const balance = totalBalance + depositNumber;
    balanceFiled.innerText = balance;

    
})