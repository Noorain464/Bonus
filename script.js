let balance = 0;
    let incomeTotal = 0;
    let expenseTotal = 0;
    const transactionsList = document.getElementById('transactions');
    const balanceDisplay = document.getElementById('balance');
    const incomeTotalDisplay = document.getElementById('incomeTotal');
    const expenseTotalDisplay = document.getElementById('expenseTotal');

    function addTransaction() {
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const transactionType = document.getElementById('transactionType').value;

        if (isNaN(amount) || amount === 0) {
            alert('Please enter a valid amount.');
            return;
        }

        const transactionItem = document.createElement('li');
        transactionItem.classList.add('transaction', transactionType);
        transactionItem.innerHTML = `
            <span>${description}</span>
            <span class="amount">${transactionType === 'income' ? '+' : '-'}₹${Math.abs(amount).toFixed(2)}</span>
        `;

        transactionsList.appendChild(transactionItem);

        if (transactionType === 'income') {
            incomeTotal += amount;
        } else {
            expenseTotal += amount;
        }

        balance = incomeTotal - expenseTotal;

        updateBalance();
        updateTotals();

        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }

    function updateBalance() {
        balanceDisplay.textContent = `Balance: ₹${balance.toFixed(2)}`;
    }

    function updateTotals() {
        incomeTotalDisplay.textContent = `₹${incomeTotal.toFixed(2)}`;
        expenseTotalDisplay.textContent = `₹${expenseTotal.toFixed(2)}`;
    }