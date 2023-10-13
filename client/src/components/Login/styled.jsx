import styled from "styled-components";
import { Link } from "react-router-dom";
export const  Fondo = styled.body`
    background: #7dbaed;
    width: 100vw;
    height: 100vh;
    *{
        margin: 0;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerPrincipal = styled.div`
    width: 20%;
    height: 60%;
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    font-family: Georgia, 'Times New Roman', Times, serif;
    color:#2E86C1;
    text-align:center;
`;
export const Containerinput = styled.div`
    width: 90%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Label = styled.label`
    
`
export const Input = styled.input`
    width: 40%;  
    height: 10%;
`;

export const Navigation = styled(Link)`
    width: 30%;
    height: 5%;
    text-decoration: none;
    color: black;
`;
export const Button = styled.button`
    width: 30%;
    height: 5%;
`;
