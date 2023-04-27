
import React from 'react'
import { useState , useEffect } from 'react';

function TransTable(){
    // const [selectedTransactions, setSelectedTransactions] = useState("All");
 const [Transactions, setTransactions] = useState([]);
    useEffect(() => 
 {
   fetch("http://localhost:3000/Transactions")
     .then((r) => r.json())
     .then((data) => setTransactions(data));
 }, [])
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
          </tr>
        ))}
      </tbody>
    </table>
   </div>
    )
        }

        export default TransTable;