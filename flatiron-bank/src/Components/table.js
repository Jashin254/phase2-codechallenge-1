import React from 'react'
import { useState , useEffect } from 'react';

function TransTable(){
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);
    useEffect(() => 
 {
   fetch("http://localhost:3000/Transactions")
     .then((r) => r.json())
     .then((Transactions) => setTransactions(Transactions));
 }, [])
    return (<div className="Trans">
    <h1>Transactions</h1>
    
    
    <table>
      <thead>
        <tr>
        <th>ID</th>
       
          <th>Date</th>
          
          <th>Description</th>
          {/* <br></br> */}
          <th>Category</th>
          {/* <br></br> */}
          <th>Amount</th>
   
        </tr>
   
      </thead>
      <tbody>
        {Transactions.map((Transactions, index) => (
          <tr key={index}>
           <td>{Transactions.id}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transactions.date}</td>
                {/* <br></br>
                <br></br>
                <br></br> */}
           <td>{Transactions.description}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transactions.category}</td>
               {/* <br></br>
               <br></br>
               <br></br> */}
           <td>{Transactions.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    )
        }

        export default TransTable;