import React, { useState, useEffect } from "react";
function MyForm({ setData }) {
  const [transaction, setTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });
  const handleSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      amount: transaction.amount
    };
    fetch('https://my-json-server.typicode.com/Jashin254/phase2-codechallenge-1/Transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
    .then(response => response.json())
    .then(data => setData(prevData => [...prevData, data]))
    .catch(error => console.log(error));
    setTransaction({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };
  const handleChange = e => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  };
  return (
    <form onSubmit={handleSubmit}
    style={{
            textAlign: "center",
            maxWidth: "1000px",
            margin: "0 auto",
            border: "10px solid #253f4b",
            padding: "40px 25px",
            marginTop: "50px",
            backgroundColor: "#c8dfea",
            fontSize:"25px"
          }}
        >
      <label>
        Date:
        <input type="text" name="date" value={transaction.date} onChange={handleChange} required />
      </label>
      <label>
        Description:
        <input type="text" name="description" value={transaction.description} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <input type="text" name="category" value={transaction.category} onChange={handleChange} required />
      </label>
      <label>
        Amount:
        <input type="text" name="amount" value={transaction.amount} onChange={handleChange} required />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}
export default MyForm;


