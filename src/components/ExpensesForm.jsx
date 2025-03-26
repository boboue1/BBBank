import React from 'react';
import styled from "styled-components";
import Header from './Header';
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
const ExpensesForm = () => {
    return (
        <>
        <Header/>
        <StyledDiv>
             <input type="text" placeholder="Description" id="description"/>
             <input type="number" placeholder="Amount" id="amount"/>
             <select id="category">
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Sport</option>
            <option value="entertainment">Distraction</option>
            <option value="entertainment">Shopping</option>
        </select>
        <button>Add Expense</button>
        </StyledDiv>    
        </>    
    );
};

export default ExpensesForm;