import React from 'react'
import styled from "styled-components";

import { FaEdit } from "react-icons/fa";

const EditButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 3px;
    background-color: transparent;
    color: transparent;
    border: none;
    height: 30px;
    width: 30px;
    font-size: 25px;
    display:  flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    &:hover { background-color: #ddd; }
`;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
    border-bottom: 1px solid #666;
    
    &:nth-child(n+2){ margin-top: 10px; }

    &:hover { 
        ${EditButton}{ color: #666; }
    }
`;



export default function Card() {
    return (
        <Container>
            <p>Card Text</p>
            <EditButton><FaEdit/></EditButton>
        </Container>
    )
}
