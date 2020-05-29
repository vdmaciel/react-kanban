import React, { useEffect } from 'react';
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserBoards } from "../../store/profile/actions";
import history from "../../services/history";

import BoardComposer from "./BoardComposer";
import FullPageSpinner from "../../components/FullPageSpinner";

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
    const boards = useSelector(state => state.profile.boards);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserBoards());
    }, [dispatch])

    function navigateToBoard(id){
        history.push("/board/" + id);
    }

    if(!boards) return <FullPageSpinner/>

    return (
        <Container>
            <Title>Boards</Title>
            <BoardList>
                {boards.map(board => (
                    <BoardItem  key={board.id} onClick={() => navigateToBoard(board.id)}>
                        <h3>{board.name}</h3>
                    </BoardItem>
                ))}
                <BoardComposer/>
            </BoardList>
        </Container>
    )
}
