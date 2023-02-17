import ExpenseItem from './ExpenseItem'
import './Expenses.css'

function Expenses(props){
    return(<div className="expenses">
    <ExpenseItem title = {props.item[0].title} amount = {props.item[0].Amount} date = {props.item[0].date} />
    <ExpenseItem title = {props.item[1].title} amount = {props.item[1].Amount} date = {props.item[1].date} />
    <ExpenseItem title = {props.item[2].title} amount = {props.item[2].Amount} date = {props.item[2].date} />
    </div>
    )
}
export default Expenses;