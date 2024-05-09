// Array para armazenar as despesas e receitas do mês
let monthlyRecords = [];

function addExpense() {
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseValue = parseFloat(document.getElementById('expense').value);
    if (expenseDescription.trim() !== '' && !isNaN(expenseValue)) {
        monthlyRecords.push({ type: 'Despesa', description: expenseDescription, value: expenseValue });
        updateMonthlyRecords();
    }
}

function addIncome() {
    const incomeDescription = document.getElementById('incomeDescription').value;
    const incomeValue = parseFloat(document.getElementById('income').value);
    if (incomeDescription.trim() !== '' && !isNaN(incomeValue)) {
        monthlyRecords.push({ type: 'Receita', description: incomeDescription, value: incomeValue });
        updateMonthlyRecords();
    }
}

function updateMonthlyRecords() {
    let expenseHTML = '<h3>Despesas</h3>';
    let incomeHTML = '<h3>Receitas</h3>';

    monthlyRecords.forEach(record => {
        if (record.type === 'Despesa') {
            expenseHTML += `<p>${record.description} - R$ ${record.value.toFixed(2)}</p>`;
        } else {
            incomeHTML += `<p>${record.description} - R$ ${record.value.toFixed(2)}</p>`;
        }
    });

    document.getElementById('monthlyExpenses').innerHTML = expenseHTML;
    document.getElementById('monthlyIncomes').innerHTML = incomeHTML;

    updateTotals();
}

function updateTotals() {
    let totalIncome = 0;
    let totalExpense = 0;
    monthlyRecords.forEach(record => {
        if (record.type === 'Receita') {
            totalIncome += record.value;
        } else {
            totalExpense += record.value;
        }
    });
    document.getElementById('totalIncome').textContent = `R$ ${totalIncome.toFixed(2)}`;
    document.getElementById('totalExpense').textContent = `R$ ${totalExpense.toFixed(2)}`;
    const monthlyBalance = totalIncome - totalExpense;
    document.getElementById('monthlyBalance').textContent = `R$ ${monthlyBalance.toFixed(2)}`;
}
