import React, { useRef, useEffect } from 'react'
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

import Card from "../Card";

const Container = styled.div`
    overflow-y: auto;
    max-height: 60vh;
    padding-right: 5px;
    margin-bottom: 10px;

    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
        border-radius: 5px;
    }
`;

export default function CardList({ listIndex, listId, cards }) {
    const listEnd = useRef();
    
    useEffect(() => {
        listEnd.current.scrollIntoView();
    })

    return (
        <Droppable droppableId={listId} type="CARD">
            {(provided, { isDraggingOver }) => (
                <Container ref={provided.innerRef}>
                    {cards.map((card, index) => (
                        <Card
                            isDraggingOver={isDraggingOver}
                            key={card.id}
                            cardData={card}
                            cardIndex={index}
                            listIndex={listIndex}
                        />
                    ))}
                    {provided.placeholder}
                    <div ref={listEnd} />
                </Container>
            )}
        </Droppable>
    )
}
