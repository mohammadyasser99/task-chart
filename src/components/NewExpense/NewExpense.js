import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
       // console.log(expenseData);
        props.onAddExpense(expenseData);
    }
return (
    <div className="new-expense">
        {/* to pass data from child to parent we pass a pointer to a function in the parent */}
        <ExpenseForm  onSaveExpenseData ={onSaveExpenseDataHandler}/>
   
    </div>
)
};

export default NewExpense;