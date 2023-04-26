import React, { useState } from 'react'

function MyForm(){
    const[data,setData]=useState({
        date:"",
        description:"",
        category :"",
        amount:"",


    })
    // const[Id,setId]=useState([]);
    // const[Date,setDate]=useState([]);
    // const[Description,setDescription]=useState([]);
    // const[Category,setCategory]=useState([]);
    // const[Amount,setAmount]=useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const NewData={...data}
        NewData[e.target.id]=e.target.value
        setData(NewData)
        console.log (NewData)
        
      }
    
      fetch("http://localhost:3000/Transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((r) => r.json())
    .then((data) => console.log(data));

  return (
    <div className='transform'
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
        <form>
        <h2>INPUT FORM</h2>
        <input type = "ID" placeholder ="ID"/>

<input type = "DATE" placeholder = "DATE"/>

<input type = "DESCRIPTION" placeholder ="DESCRIPTION"/>

<input type = "CATEGORY" placeholder ="CATEGORY"/>

<input type = "AMOUNT" placeholder ="AMOUNT"/>



<button type='button'onClick={handleSubmit}>submit</button>


      </form>

    
    </div>
  )
}

export default MyForm;