import styled from "styled-components";

export const  Fondo = styled.body`
    /* background: red; */
    width: 100%;
    height: 97vh;
    display:flex;
    justify-content:center;
    align-items: center;
`
export const Form = styled.form`
    background-color: #e2a0a0;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: auto;

`
export const Label = styled.label`
    display: block;
   margin-bottom: 5px;
   color: #333;
`
export const Input = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
`
export const Button = styled.button`
    width: 90%;
    padding: 15px;
    border-radius: 5px;
    background:#0e5cb0 ;
    color: white;
    border: none;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    :hover{
    background-color: #45a049;
  }
    
`