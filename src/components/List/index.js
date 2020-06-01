import React, { useState } from 'react'
import styled from "styled-components";
import { FaEllipsisH } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Draggable, Droppable } from "react-beautiful-dnd";

import { deleteList } from "../../store/board/actions";

import Card from "../Card";
import CardComposer from "./CardComposer";

const Container = styled.div`
    position: relative;
    background-color: hsl(0,0%,92%);
    width: 280px;
    padding: 10px 0px 10px 10px;
    flex-shrink: 0;
    margin-right: 10px;
    border-radius: 4px;
    border-bottom: 2px solid #aaa;
`;

const ListHeader = styled.div`
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    margin-bottom: 10px;
`;

const MenuButton = styled.button`
    height: 30px;
    width: 30px;
    border: none;
    background-color: transparent;
    border-radius: 2px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover { background-color: hsl(0,0%,82%); }
`;

const CardList = styled.div`
    padding: 5px 10px 5px 0;
    overflow-y: auto;
    max-height: 70vh;
`;

const Menu = styled.ul`
    position: absolute;
    background-color: #fff;
    padding: 5px;
    right: 10px;
    top: 40px;
    z-index: 5;
    border: 1px solid #ccc;
    border-radius: 3px;
    width: 200px;

    li {
        padding: 5px;
        border-radius: 3px;
        cursor: pointer;
        &:hover { background-color: #ddd; }
    }
`;

export default function List({ listData, listIndex }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useDispatch();

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    function handleDeleteList() {
        dispatch(deleteList(listData.id));
    }

    return (
        <Draggable draggableId={listData.id} index={listIndex}>
            {provided => (
                <Container
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <ListHeader>
                        <h4>{listData.name}</h4>
                        <MenuButton onClick={toggleMenu}>
                            <FaEllipsisH />
                        </MenuButton>
                        {isMenuOpen && (
                            <Menu>
                                <li onClick={handleDeleteList}>Delete list</li>
                            </Menu>
                        )}
                    </ListHeader>
                    <Droppable droppableId={listData.id} type="CARD">
                        {provided => (
                            <CardList ref={provided.innerRef}>
                                {listData.cards.map((card, index) => (
                                    <Card 
                                        key={card.id} 
                                        cardData={card} 
                                        cardIndex={index} 
                                        listIndex={listIndex} 
                                    />
                                ))}
                                {provided.placeholder}
                            </CardList>
                        )}
                    </Droppable>
                    <CardComposer listId={listData.id} />
                </Container>
            )}
        </Draggable>
    )
}
