import React from 'react'
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

const Container = styled.div`
    height: 100%;
    background-color: hsl(207,70%,98%);
`;

const BoardHeader = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
`;

const Title = styled.h2`
    font-size: 30px;
    color: #666;
`;

const DeleteButton = styled.button`
    font-size: 16px;
    padding: 5px 10px;
    border: 2px solid hsl(0, 71%, 65%);
    border-radius: 3px;
    background-color: transparent;
    color: hsl(0, 71%, 65%);

    span { margin-left: 10px; }
`;

export default function Board() {
    return (
        <Container>
            <BoardHeader>
                <Title>Board</Title>
                <DeleteButton>
                    <FaTrash />
                    <span>Delete Board</span>
                </DeleteButton>
            </BoardHeader>
        </Container>
    )
}
