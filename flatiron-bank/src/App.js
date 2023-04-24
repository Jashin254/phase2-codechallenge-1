// import logo from './logo.svg';
// import './App.css';
import { useState , useEffect } from 'react';


function App() {
 const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);

 useEffect(() => 
 {
   fetch("http://localhost:3000/transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
 }, [])

return(
 <div className="App">
 <h1>Transactions</h1>
 <table>
   <thead>
     <tr>
     <th>ID</th>
     <br></br>
       <th>Date</th>
       <br></br>
       <th>Description</th>
       <br></br>
       <th>Category</th>
       <br></br>
       <th>Amount</th>

     </tr>
   </thead>
   <tbody>
     {Transactions.map((Transaction, index) => (
       <tr key={index}>
        <td>{Transaction.id}</td>
            <br></br>
        <td>{Transaction.date}</td>
             <br></br>
        <td>{Transaction.description}</td>
            <br></br>
        <td>{Transaction.category}</td>
            <br></br>
        <td>{Transaction.amount}</td>
       </tr>
     ))}
   </tbody>
 </table>
</div>
);
}

function TransForm(){
  const [id, setId] = useState("");
  const [Date, setDate] = useState("");
  const [Descripion, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [Amount, setAmount] = useState("");

}

export default App;







