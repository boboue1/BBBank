import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
const StyledDiv=styled.div`
    
    width: 100%;
    padding: 15px;
    margin: 0;
    background-color: #0B2BF6;
    display: flex;
    align-items: center;
    justify-content: space-between;

nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  nav ul li{
    margin: 0 15px;
  }
  
nav ul li a{
    color: white;
    text-decoration: none;
    font-size: 4vh;
}
`;
const MiddleDiv = styled.div`
  
    margin: auto;
    padding: 25px;
    width: 500px;

& h2, h3, p{
    margin-bottom: 15px;
}
& p{
    font-size: 4vh;
}
`;
const Header = () => {
    return (
        <>
        <StyledDiv>
        <h1>
            BBBank
        </h1>
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/expenses">Expenses</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            </ul>
        </nav>
        </StyledDiv>
    <MiddleDiv>
        <h2>
            Welcome to BBBank
        </h2>
        <p>
            Welcome to BBbank! We are delighted to have you as our valued
             customer and appreciate your trust in us.
        </p>
        <p>
            Explore all the possibilities your account offers today, 
            and feel free to reach out to our team for any questions. 
            We are here to support you every step of the way!
        </p>
        <h3>
            You got a big Deal!
        </h3>
        </MiddleDiv>
    </>
    );
};

export default Header;