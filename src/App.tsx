import React from 'react';
import './App.css';
import styled, {css} from "styled-components";

function App() {
    console.log('App rendering')
    return (
            <Box>
                {/*<StyledBtn color = 'red' fontSize="20px">Hello</StyledBtn>*/}
                {/*<StyledBtn color = 'green'>Hello</StyledBtn>*/}
                {/*<StyledBtn fontSize="30px">Hello</StyledBtn>*/}
                <StyledBtn primary>Hello</StyledBtn>
                <StyledBtn outline>Hello</StyledBtn>
            </Box>
    )
}

export default App;

type StyledBtnPropsType = {
    color?: string,
    fontSize?: string,
    primary?: boolean,
    outline?: boolean,
}

const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    //background-color: ${props => props.color || "#5e2b2b"};
    padding: 10px 20px;
    //color: snow;
    font-size: ${props => props.fontSize};
    font-weight: bold;

    &:hover {
        background-color: #1c5881;
    }
    
    ${props => props.outline && css<StyledBtnPropsType> `
        border: 2px solid ${props => props.color || "#5e2b2b"}
        color: ${props => props.color || "#5e2b2b"}
        background-color: transparent;
    `}
    
    ${props => props.primary && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#5e2b2b"};
        color: snow;
    `}
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
    
    @media screen and (max-width: 800px){
        flex-direction: column;
    }
`