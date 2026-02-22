let expenses = [];

function addExpense() {

    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    let month = document.getElementById("month").value;

    if (amount === "" || category === "" || month === "") {
        alert("Please fill all fields");
        return;
    }

    let expense = {
        amount: Number(amount),
        category: category,
        month: month
    };

    expenses.push(expense);

    alert("Expense Added!");

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
    document.getElementById("month").value = "";
}
function showMonthly() {
    document.getElementById("expenseList").innerHTML = "";
    let mon = prompt("Enter Month");
    if (!mon) return;

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        if (expenses[i].month.toLowerCase() === mon.toLowerCase()) {
            total += expenses[i].amount;
        }
    }

    document.getElementById("output").innerText =
        "Total Spending in " + mon + " = ₹ " + total;
}
function showCategory() {
    document.getElementById("expenseList").innerHTML = "";
    let cat = prompt("Enter Category");
    if (!cat) return;

    let total = 0;

    for (let i = 0; i < expenses.length; i++) {

        if (expenses[i].category.toLowerCase() === cat.toLowerCase()) {
            total += expenses[i].amount;
        }
    }

    document.getElementById("output").innerText =
        "Total " + cat + " Spending = ₹ " + total;
}

function showTotal() {
    document.getElementById("expenseList").innerHTML = "";
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    document.getElementById("output").innerText =
        "Total Spending = ₹ " + total;
}
function showAll() {
    
    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    for(let e of expenses) {
        let li = document.createElement("li");
        li.innerText =
            e.amount + " | " + e.category + " | " + e.month;
        list.appendChild(li);
    }
}
function showExpenses() {

    document.getElementById("output").innerText = "";

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {

        let li = document.createElement("li");
        li.innerText =
            "₹ " + expenses[i].amount +
            " | " + expenses[i].category +
            " | " + expenses[i].month;

        list.appendChild(li);
    }
}