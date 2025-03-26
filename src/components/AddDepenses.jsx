// import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import { useState } from 'react';
const StyledDiv=styled.div`
    display: flex;
    align-items: center;
    gap: 15px; 
    max-width: 600px;
    margin: 20px auto;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);


& input, select, button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

& input, select {
    flex: 1;
}

& button {
    background: #28a745;
    color: white;
    border: none;
    cursor: pointer;
}

& button:hover {
    background: #218838;
}`;
const AddDepenses = () => {
        const [description, setDescription] = useState('');
        const [amount, setAmount] = useState('');
        const [category, setCategory] = useState('');        
    return (
        <>
        <Header/>
        <StyledDiv>
        <form action="">
             <input type="text" 
             placeholder="Description" 
             value={description}
             onChange={(e) => setDescription(e.target.value)}
             id="description"/>
             <input type="number" 
             placeholder="Montant"
             value={amount}
             onChange={(e )=> setAmount(e.target.value)}
              id="amount"/>
             <select 
             value={category}
             onChange={(e) => setCategory(e.target.value)}
            >
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Sport</option>
            <option value="entertainment">Distraction</option>
            <option value="entertainment">Shopping</option>
        </select>
        <button onClick={() =>{
            setDescription(' ');
            setAmount(' ');
            setCategory('')
            // onAddDepenses(description, amount);
        }}>Add Expense</button>
        </form>
        </StyledDiv>    
        <p>
            {description}
            {amount}
            {category}
        </p>
        </>    
    );
};

export default AddDepenses;