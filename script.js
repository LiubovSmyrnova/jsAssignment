const account = {
    name: "Liubov",
    //getName: function() {
    //alert(`Account name: ${this.name}`);
    expenses: [],
    food: [],
    rent: [],
    shopping: [],
    income: [],
    addIncome: function () {
      //const addIncome
      const income = parseFloat(prompt("{How much was your income?"));
      this.income.push(income);
      menu();
    },
    addExpense: function () {
      const expenseType = prompt(
        "What was your expense? For example food, rent, shopping"
      );
      // this is a good place for some error handling
      // you can check if the user input is valid before you move on
      // and you can do this with an if statement
      const expenseAmount = prompt("How much was your expense?");
      // same as above, error handle here
  
      this.expenses.push({ expenseType, expenseAmount });
      menu();
    },
    listAllExpenses: function () {
      // lets keep in mind that the alert should not go into the loop, keep outside
  
      let message = "";
      this.expenses.forEach(function (expense) {
        message +=
          "Expense type: " +
          expense.expenseType +
          "Expense amount: " +
          expense.expenseAmount;
      });
      alert(message);
      menu();
    },
    getSummary: function () {
      // you need one variabel for saving the total income
      // and one variable for saving the totalExpense
      // after that you need loop through the income array and add all incomes together
      // save in the totalIncome variable
      // then you the same for expenses but remember that you only need the expenseAmount
      // then save in totalExpenses
      // calculate totalIncome - totaltExpenses
    },
    /* alert(
        `Expenses for food: ${this.food}` +
          `\n` +
          `Expenses for rent: ${this.rent}` +
          `\n` +
          `Expenses for shopping: ${this.shopping}`
      );
    },*/
  };
  
  // an array that should hold all of your expenses, can be empty from start
  //an array that should hold all of your income, can be empty from start
  // addExpenses: a function that vill add an expense to the expenses array
  // addIncome: a function that vill add an income to the income array
  // listAllExpenses: a function that should list all the expenses in the expenses array
  // getSummary: a function that should summarize your total balances. It should show your total
  // income, your total expenses and also calculate your current balances (income - expenses).
  
  function menu() {
    const choice = parseFloat(
      prompt(
        "Please choose between 1) Add income 2)Add expense 3)List all expenses 4)Get summary 5)Exit"
      )
    );
  
    if (choice === 1) {
      account.addIncome();
    } else if (choice === 2) {
      account.addExpense();
    } else if (choice === 3) {
        account.listAllExpenses();
    } else if (choice === 4) {
    } else if (choice === 5) {
    } else {
      alert("Invalid input");
    }
    /* while (true) {
      const choice = parseFloat(
        prompt(
          "Please choose between 1) Add income 2)Add expense 3)List all expenses 4)Get summary 5)Exit"
        )
      );
      if (choice === 5) {
        break;
      }
      if (choice === 1) {
        //account.getName();
        const addIncome = parseFloat(prompt("{How much was your income?"));
        account.income.push(addIncome);
      }
      if (choice === 2) {
        const choiceCategory = prompt(
          "What was your expense? Choose from: food, rent, shopping"
        );
  
        if (choiceCategory === "food") {
          let inputExpense = parseFloat(prompt("Enter an amount:"));
          account.food.push(inputExpense);
        }
        if (choiceCategory === "rent") {
          let inputExpenseRent = parseFloat(prompt("Enter an amount:"));
          account.rent.push(inputExpenseRent);
        }
        if (choiceCategory === "shopping") {
          let inputExpenseShop = parseFloat(prompt("Enter an amount:"));
          account.shopping.push(inputExpenseShop);
        }
  
        //choose category
        //Add expense
      }
      if (choice === 3) {
        account.listAllExpenses();
        // List all expenses
      }
      if (choice === 4) {
        account.getSummary();
        // Get summary
      }
      //else {
      //emptyAlert = alert("Invalid input");
      //}
    }*/
  }
  menu();
  