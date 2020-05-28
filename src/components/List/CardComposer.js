import React, { useState } from 'react'
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";

import { createCard } from "../../store/board/actions";

const ComposerTriggerButton = styled.button`
    height: 35px;
    width: 100%;
    border: none;
    border-radius: 4px;
    background-color: transparent;
    color: #666;
    font-weight: bold;

    &:hover {
        background-color: #ccc;
    }
`;

const Container = styled.div`
    textarea {
        width: 100%;
        resize: none;
        height: 50px;
        border: 1px solid #999;
        border-radius: 4px;
        padding: 8px;
        font-size: 16px;
    }

    section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 5px;
        height: 30px;
    }
`;

const Button = styled.button`
    flex: 1;
    font-weight: bold;
    color: #fff;
    border: none;
    border-radius: 4px;
    
    ${p => p.success && css`
        background-color: hsl(86,84%,36%);
    `}

    ${p => p.danger && css`
        background-color: hsl(0,71%,65%);
    `}
`;

export default function CardComposer({ listId }) {
    const [opened, setOpened] = useState(false);
    const [cardText, setCardText] = useState("");
    const dispatch = useDispatch();

    function toggleComposer() {
        setOpened(!opened);
    }

    function handleSubmit(){
        dispatch(createCard(cardText, listId));
        toggleComposer();
    }

    if (!opened) {
        return (
            <ComposerTriggerButton onClick={toggleComposer}>
                Add new card
            </ComposerTriggerButton>
        )
    }

    return (
        <Container>
            <textarea
                autoFocus
                value={cardText}
                onChange={e => setCardText(e.target.value)}
            />
            <section>
                <Button onClick={handleSubmit} disabled={!Boolean(cardText)} success>Add</Button>
                <Button onClick={toggleComposer} danger>Cancel</Button>
            </section>
        </Container>
    )
}
