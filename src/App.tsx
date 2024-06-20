import React from 'react';
import './App.css';
import styled from "styled-components";
import  {Animation} from "./Animation/Animation";

function App() {
    console.log('App rendering')
    return (
        <div className={"App"}>
            <Menu>
                <ul>
                    <li><a href="">menu item 1</a></li>
                    <li><a href="">menu item 2</a></li>
                    <li><a href="">menu item 3</a></li>
                </ul>
            </Menu>
            <Box>
                <StyledBtn as="a" href={'#'}>link</StyledBtn>
                <StyledBtn as={Link} href={'#'}>linkcomp</StyledBtn>
                <StyledBtn>Hello</StyledBtn>
                <SuperBtn>SuperBtn</SuperBtn>
            </Box>
        </div>
    )
}

export default App;

const StyledBtn = styled.button`
    border: none;
    background-color: #5e2b2b;
    padding: 10px 20px;
    color: snow;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #1c5881;
        animation: ${Animation} 2s ease-in-out;
    }
    
    &:last-child {
        background-color: blue;
    }
`

const Link = styled.a`
    color: snow;
    font-size: 2rem;
    font-weight: bold;
`

const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #80b647;
    color: #5e2b2b;
    
    animation: ${Animation} 2s ease-in-out;
`

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 20px;

    button {
        cursor: pointer
    }

    ${Link} {
        cursor: zoom-in;
    }
    
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`

const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        
        li>a {
            color: green;
        }
        
        li + li {
            margin-left: 20px;
        }
    }
`