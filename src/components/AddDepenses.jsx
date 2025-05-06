// import React, { useState } from 'react';
import styled from "styled-components";
import Header from './Header';
import { useState } from 'react';
import { createDepense } from "./DepensesList";
// import { createDepense } from "./DepensesList";
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
//Style de la liste des dépenses

const StyledListItem = styled.li`
  background: #f9f9f9;
  margin-bottom: 10px;
  padding: 15px 20px;
  border-radius: 8px;
  border-left: 6px solid #28a745;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: left;
  gap: 10px;

  & .description {
    font-weight: 600;
    color: #333;
  }

  & .amount {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    color: #28a745;
  }

  & .category {
    text-align: right;
    font-size: 0.85rem;
    color: #777;
  }
`;
const StyledList = styled.ul`
  max-width: 600px;
  margin: 20px auto;
  padding: 0;
  list-style: none;
`;



const AddDepenses = () => {
        const [description, setDescription] = useState('');
        const [amount, setAmount] = useState('');
        const [category, setCategory] = useState('Food');  
        const [depense, setDepense] = useState([]);  

        function handleAddClick (){
            const newDepense = createDepense(description, amount, category);
            setDepense([...depense, newDepense]);
            setDescription('');
            setAmount('');
            setCategory('food');
        }
        
        const handleDelete = (indexToDelete) => {
            const updatedDepense = depense.filter((_, index) => index !== indexToDelete);
            setDepense(updatedDepense);
          };
          
    return (
        <>
        <Header/>
        <StyledDiv>
        {/* <form action=""> */}
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
            <option value="fitness">Sport</option>
            <option value="entertainment">Distraction</option>
            <option value="clothes">Shopping</option>
        </select>
        <button onClick={handleAddClick}>Add Expense</button>
        {/* </form> */}
        </StyledDiv>    
        
        <StyledList>
  {depense.map((dep, index) => (
    <StyledListItem key={index}>
      <div className="description">{dep.description}</div>
      <div className="amount">{dep.amount}€</div>
      <div className="category">{dep.category}</div>
      <button onClick={() => handleDelete(index)}>Supprimer</button>
    </StyledListItem>
  ))}
</StyledList>



        
    
        </>    
    );
};

export default AddDepenses;