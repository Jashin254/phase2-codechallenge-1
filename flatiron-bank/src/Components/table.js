
import React from 'react'
import { useState , useEffect } from 'react';

function TransTable(){
    
 const [Transactions, setTransactions] = useState([]);
 const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => 
 {
   fetch("http://localhost:3000/Transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
 }, [])
 const handleDelete = id => {
  // Filter out the deleted transaction from the array
  const newData = Transactions.filter(transaction => transaction.id !== id);
  setTransactions(newData);
  // Send a DELETE request to the json file to delete the transaction
  fetch(`http://localhost:3000/transactions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
};
const filteredData = Transactions.filter(transaction =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);
    return (<div className="Trans"
    style={{
      textAlign: "center",
      maxWidth: "10000px",
      margin: "0 auto",
      border: "15px solid #000080",
      padding: "40px 25px",
      marginTop: "50px",
      backgroundColor: "#037c6e",
      fontSize:"35px"
      }}>
    <h1>Transactions</h1>
    <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />

     <table>
      <thead>
        <tr>
         {/* <th>ID</th>  */}
       
          <th>Date</th>
          
          <th>Description</th>
          
          <th>Category</th>
          
          <th>Amount</th>
   
        </tr>
   
      </thead>
      <tbody>
        {Transactions.map((Transactions) => (
        
          <tr key={Transactions.id}>

           
             
           <td>{Transactions.date}</td>
                
           <td>{Transactions.description}</td>
               
           <td>{Transactions.category}</td>
               
           <td>{Transactions.amount}</td>
           <td>   <button onClick={() => handleDelete(Transactions.id)}>
                  Delete
                </button></td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    )
        }

        export default TransTable;