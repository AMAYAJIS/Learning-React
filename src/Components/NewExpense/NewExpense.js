import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = () =>{

    const ExpenseDataHandler = (enteredExpenseData) =>{
       const data = {
        ...enteredExpenseData,
        id: Math.random().toString(),

       }
      console.log(data);
        };

    return(
        <div className="expenses_2">
            <ExpenseForm onSaveExpenseData = {ExpenseDataHandler} />
        </div>

    );
};

export default NewExpense;