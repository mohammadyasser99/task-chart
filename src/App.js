import React,{useState} from 'react';
// import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //props 
  //any data we want to pass we put it in App.js
  const expenses = [
    {id:1,title: 'Car Insurance', amount: 294.67, date: new Date(2021, 10, 28)},
    {id:2,title: 'Toilet Paper', amount: 50.67, date: new Date(2021, 2, 28)},
    {id:3,title: 'New TV', amount: 120.67, date: new Date(2021, 3, 28)},
    {id:4,title: 'Car Insurance', amount: 20.67, date: new Date(2021, 7, 28)},
  ];

  const [expenseslist,setExpenses] = useState(expenses);

  //to add a new expense to array
const addExpenseHandler = (expense) => {
  setExpenses((prevExpenses) => {
    return [expense,...prevExpenses];
  })
 
  console.log('in app.js');
  console.log(expense);
}

  return (
    <div >
      <NewExpense onAddExpense = {addExpenseHandler} />
<Expenses items = {expenseslist} />
    </div>
  );
}

export default App;
