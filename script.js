const form = document.getElementById("expense-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");
const totalElement = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


function addExpense(description, amount) {
    const expense = {
        description,
        amount
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();
}
 
function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses() {
    expenseList.innerHTML = "";
    let total = 0;

    expenses.forEach((expense) => {
        const li = document.createElement("li");
        li.textContent = `${expense.description} - $${expense.amount}`;
        expenseList.appendChild(li);
        total += Number(expense.amount);
    });

    totalElement.textContent = total.toFixed(2);
}


form.addEventListener("submit", function (e) {
    e.preventDefault();

    addExpense(descriptionInput.value, amountInput.value);

    descriptionInput.value = "";
    amountInput.value = "";
});
