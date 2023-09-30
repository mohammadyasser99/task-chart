import '../Expenses/Expenseitem.css'
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
// it allows to define values as state

//momken nesmy ay 7aga 8er props w n3mlha pass lel component
function ExpenseItem(props) {
    // we define initial value in useState() and define a function to update the valuess
   const [title, setTitle] = useState(props.title);
   
    const clickHandler = () => {

        setTitle('updated');
        console.log(title);
    }


return (
    <li>
    <Card className="expense-item">
<ExpenseDate date={props.date} />
        <div className="expense-item__description">
            
            <h2>{title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            
        </div>
    </Card></li>
)
}

export default ExpenseItem;