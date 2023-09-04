import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "a1",
      title: "Car Insurance",
      amount: 35000,
      date: new Date(2023, 6, 30),
    },
    {
      id: "a2",
      title: "Bajaj Pulsar NS 200",
      amount: 220000,
      date: new Date(2023, 7, 30),
    },
    {
      id: "a3",
      title: "3bhk Flat",
      amount: 8500000,
      date: new Date(2023, 8, 30),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
