import React from 'react';
import styled from "styled-components";

import history from "../../services/history";

const Container = styled.div`
    height: 100%;
    padding: 15px;
`;

const Title = styled.h2`
    color: #333;
    font-size: 30px;
    margin-bottom: 10px;
`;

const BoardList = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
`;

const BoardItem = styled.button`
    padding: 10px;
    width: 100%;
    height: 140px;
    border: none;
    background-color: hsl(207,70%,44%);
    color: #fff;
    border-radius: 5px;
    display: flex;
`;



export default function Home() {
    return (
        <Container>
            <Title>Boards</Title>
            <BoardList>
                <BoardItem onClick={() => history.push("/board")}>
                    <h3>Board</h3>
                </BoardItem>
                <BoardItem>
                    <h3>Board</h3>
                </BoardItem>
                <BoardItem>
                    <h3>Board</h3>
                </BoardItem>
                <BoardItem>
                    <h3>Board</h3>
                </BoardItem>
                <BoardItem>
                    <h3>Board</h3>
                </BoardItem>
                <BoardItem>
                    <h3>Board</h3>
                </BoardItem>
            </BoardList>
        </Container>
    )
}
