import React, { useEffect } from 'react'
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import history from "../../services/history";
import { deleteBoard } from "../../store/profile/actions";
import { fetchBoard, moveList, moveCard } from "../../store/board/actions";

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

const ListWrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export default function Board() {
    const board = useSelector(state => state.board);
    const dispatch = useDispatch();
    const { boardId } = useParams();

    function handleDelete() {
        dispatch(deleteBoard(boardId));
        history.replace("/home");
    }

    function onDragEnd(result){
        const { destination, source, type } = result;

        if(!destination) return;

        if(type === "LIST") {
            if(source.index !== destination.index){
                dispatch(moveList(source.index, destination.index));
            }
        }

        if(type === "CARD"){
            if(
                destination.droppableId === source.droppableId &&
                destination.index === source.index
            ) return;

            dispatch(moveCard(
                source.droppableId,
                destination.droppableId,
                source.index,
                destination.index
            ))
        }
    }

    useEffect(() => {
        dispatch(fetchBoard(boardId));
    }, [dispatch, boardId]);

    if (!board) return <FullPageSpinner />

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Container>
                <BoardHeader>
                    <Title>Board</Title>
                    <DeleteButton onClick={handleDelete}>
                        <FaTrash />
                        <span>Delete Board</span>
                    </DeleteButton>
                </BoardHeader>
                <Content>
                    <Droppable droppableId={boardId} type="LIST" direction="horizontal">
                        {provided => (
                            <ListWrapper
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {board.lists.map((list, listIndex) => (
                                    <List key={list.id} listData={list} listIndex={listIndex} />
                                ))}
                                {provided.placeholder}
                            </ListWrapper>
                        )}
                    </Droppable>
                    <ListComposer />
                </Content>
            </Container>
        </DragDropContext>
    )
}
