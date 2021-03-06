import React, { useState } from 'react'
import styled from "styled-components";
import { FaEllipsisH } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";

import { deleteList } from "../../store/board/actions";

import CardList from "./CardList";
import CardComposer from "./CardComposer";

const Container = styled.div`
    position: relative;
    background-color: hsl(0,0%,92%);
    width: 300px;
    padding: 10px 5px 10px 10px;
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
    padding: 0 5px 0 10px;
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
                    <CardList
                        cards={listData.cards} 
                        listId={listData.id} 
                        listIndex={listIndex} 
                    />
                    <CardComposer listId={listData.id} />
                </Container>
            )}
        </Draggable>
    )
}
