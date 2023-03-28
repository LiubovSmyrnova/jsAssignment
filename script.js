const account = {
    name: "Liubov",
    //getName: function() {
       //alert(`Account name: ${this.name}`);
       expenses: [],
       food: [],
       rent: [],
       shopping: [],
       income: [],
    listAllExpenses: function () {
        alert(`Expenses for food: ${this.food}` + `\n` + `Expenses for rent: ${this.rent}` + `\n` + `Expenses for shopping: ${this.shopping}`);
    }
    }
    
    // an array that should hold all of your expenses, can be empty from start
// 
//an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).
//1
//}





function menu() {
    while (true) {
    const choice = parseFloat(prompt("Please choose between 1) Add income 2)Add expense 3)List all expenses 4)Get summary 5)Exit"));
    if (choice === 5) {break};
    if (choice === 1) {
        //account.getName();
        const addIncome = parseFloat(prompt("{How much was your income?"))
        account.income.push(addIncome);
        console.log(account.income);

    } 
    if (choice === 2) {
        const choiceCategory = prompt("What was your expense? Choose from: food, rent, shopping");
        
        if (choiceCategory === "food") {
            let inputExpense = parseFloat(prompt("Enter an amount:"));
            account.food.push(inputExpense);
            console.log(account.food);
            
        }
        if (choiceCategory === "rent") {
            let inputExpenseRent = parseFloat(prompt("Enter an amount:"));
            account.rent.push(inputExpenseRent);
        }
        if (choiceCategory === "shopping") {
            let inputExpenseShop = parseFloat(prompt("Enter an amount:"));
            account.shopping.push(inputExpenseShop);    
        }
    
        //const inputExpense = parseFloat(prompt("How much was your expense?"));
        //choose category
        //Add expense
    }
    if (choice === 3) {
        account.listAllExpenses();
        // List all expenses
    }
    if (choice === 4) {
        // Get summary
    }
    //else {
        //emptyAlert = alert("Invalid input");
    //}
}
}
menu();