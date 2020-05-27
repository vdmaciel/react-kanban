import React, { useEffect } from 'react'
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";

import history from "../../services/history";
import { deleteBoard } from "../../store/profile/actions";
import { fetchBoard } from "../../store/board/actions";

import List from "../../components/List";
import FullPageSpinner from "../../components/FullPageSpinner";
import ListComposer from "./ListComposer";

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

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 10px;
    height: calc(100% - 60px);
    overflow-x: auto;
`;

export default function Board() {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();
    const { boardId } = useParams();

    function handleDelete() {
        dispatch(deleteBoard(boardId));
        history.replace("/home");
    }

    useEffect(() => {
        dispatch(fetchBoard(boardId));
    }, []);

    if (!board) return <FullPageSpinner />

    return (
        <Container>
            <BoardHeader>
                <Title>Board</Title>
                <DeleteButton onClick={handleDelete}>
                    <FaTrash />
                    <span>Delete Board</span>
                </DeleteButton>
            </BoardHeader>
            <Content>
                {board.lists.map(list => (
                    <List key={list.id} listData={list} />
                ))}
                <ListComposer />
            </Content>
        </Container>
    )
}
