
import './App.css';
import Expenses from './Components/Expenses'
import NewExpense from './Components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      Amount: '500',
      date: new Date(2023,2,23)
    },
    {
      id: 'e2',
      title: 'Table mat',
      Amount: '545',
      date: new Date(2023,2,13)

    },
    {
      id: 'e3',
      title: 'Coffee Maker',
      Amount: '435',
      date: new Date(2023,2,2)

    },

  ]
  return (
    <div>
      <NewExpense />
      <Expenses item ={expenses}/>
    </div>
  );
}

export default App;
