import React, {useState} from 'react';
// import ExpenseItem from "../Expenses/Expenseitem";
import '../Expenses/Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = selectedYear => {
      // console.log('in expenses.js');
      // console.log(selectedYear);
    setFilteredYear(selectedYear);
  

   }
   const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
      });
      
  


   return (
    <Card className="expenses">
      <ExpensesFilter selected ={filteredYear} onchangeFilter={filterChangeHandler} />
     <ExpensesChart expenses={filteredExpenses} />
     
       <ExpensesList items={filteredExpenses} />

         
         {
         /* <ExpenseItem
         

    {/* <ExpenseItem
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
    /> */}

    </Card>
   )
}

export default Expenses;