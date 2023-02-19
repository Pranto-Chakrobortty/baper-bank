document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawFiled = document.getElementById('user-withdraw');
    const newWithdraw = withdrawFiled.value;
    const withdrawNumber = parseFloat(newWithdraw);
    
    withdrawFiled.value = "";

    if(isNaN(withdrawNumber)){
        alert('Please Input Valid Number');
        return;
    }

    const addWithdraw = document.getElementById('add-withdraw');
    const totalWithdraw = addWithdraw.innerText;
    const totalWithdrawNumber = parseFloat(totalWithdraw);



    const balanceFiled = document.getElementById('add-balance');
    const addBalance = balanceFiled.innerText;
    const totalBalance = parseFloat(addBalance);

   

    if( withdrawNumber > totalBalance) 
    {
        alert('Atto Tk nai Amer kase');

        return;

    }
    const newTotalWithdraw = withdrawNumber + totalWithdrawNumber;
    addWithdraw.innerText = newTotalWithdraw;

    const balance = totalBalance - withdrawNumber;
    balanceFiled.innerText = balance;


}) 