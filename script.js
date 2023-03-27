const account = {
    name: "Liubov",
    getName: function() {
        alert(`Account name: ${this.name}`);
    }
    // expenses: [],
    // an array that should hold all of your expenses, can be empty from start
// income: [], 
//an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).
}





function menu() {
    const choice = parseFloat(prompt("Please choose between 1) Add income 2)Add expense 3)List all expenses 4)Get summary"));

    if (choice === 1) {
        account.getName();
    } 
    if (choice === 2) {
        const choiceCategory = parseFloat(prompt("What was your expense? Choose from: food, rent, shopping"));
        const inputExpense = parseFloat(prompt("How much was your expense?"))
        //choose category
        //Add expense
    }
    if (choice === 3) {
        // List all expenses
    }
    if (choice === 4) {
        // Get summary
    }
    else {
        emptyAlert = alert("Invalid input")
    }
}
menu();