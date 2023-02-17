import './ExpenseForm.css'
import React, { useState } from 'react';

const ExpenseForm = (props) =>{

 const [entered, setEntered]  = useState('');
 const [enteredAmount,setEnteredAmount] = useState('');
 const [enteredDate,setEnteredDate] = useState('');
  // const [userInput,setUserInput]= useState({
  //                                            entered: '',
  //                                            enteredDate:'',
  //                                            enteredAmount:'',
  //                                           });

  const change_title = (event) =>{
    // setUserInput((prevState) =>{
    //   return {...prevState,entered: event.target.value}
    // });
    setEntered(event.target.value);
  };

  const change_amount =(event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,

    // });
    // setUserInput((prevState) =>{
    //   return {...prevState,enteredDate: event.target.value}
    // });
    setEnteredAmount(event.target.value);
  };

  const change_date =(event) =>{
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,

    // });
    // setUserInput((prevState) =>{
    //   return {...prevState,enteredAmount: event.target.value}
    // })
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) =>{
    // to avoid reloading the page
    event.preventDefault();
    const expenseData = {
      title: entered,
      amount: enteredAmount,
      Date: new Date(enteredDate)
    };
    // instead of printing here i am passing it to its parent component ie NewExpense.js
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

  }

    return ( 
      
    <form onSubmit={submitHandler}>
      <div className="common_body-2">
        <div className ="new-expense__control">
         <label>Title</label>
         <input type = "text" onChange={change_title}/>
        </div>
        <div className ="new-expense__control">
         <label>Amount</label>
         <input type = "number" min="0.01" step="0.01" onChange={change_amount}/>
        </div>
        <div className ="new-expense__control">
         <label>Date</label>
         <input type = "date" min="2023-01-01" max="2023-12-31" onChange={change_date}/>
        </div>
        <div className ="new-expense button ">
        <button type="submit">Add Expense</button>
      </div>
      </div>
    
    </form>
    
    );
    }
export default ExpenseForm;