import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import React, { useState } from 'react';


const ExpenseItem = (props)=>{

const [title,setTitle] =useState(props.title)

    const clicked =() => {
    setTitle('Updated!!')
    }
    return (
        <div className="common_body">
            <ExpenseDate date = {props.date} />
            <div className="item_description">
                <h2>{title}</h2>
                <div className="item_price">${props.amount}</div>
            </div>
            <button onClick={clicked}>Change Title</button>
        </div>
    )
}
export default ExpenseItem;
