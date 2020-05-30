import React, { useState } from 'react'
import styled from "styled-components";
import Modal from "styled-react-modal";
import { useDispatch } from "react-redux";
import { createBoard } from "../../store/profile/actions";

const StyledModal = Modal.styled({
    display: "flex",
    justifyContent: "center",
    marginTop: "70px"
})

const Form = styled.form`
    background-color: hsl(192, 71%, 42%);
    padding: 10px;
    width: 400px;
    border-radius: 3px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #666;
    &::placeholder { font-weight: bold; }
`;

const SubmitButton = styled.button`
    border-radius: 4px;
    border: none;
    padding: 10px 20px;
    font-weight: bold;
    background-color: hsl(123, 55%, 59%);
    color: #fff;
    font-size: 15px;
    cursor: pointer;
`;

const ComposerTriggerButton = styled.button`
    width: 100%;
    height: 140px;
    border: none;
    background-color: #aaa;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function BoardComposer() {
    const [opened, setOpened] = useState(false);
    const [boardName, setBoardName] = useState("");
    const dispatch = useDispatch();

    function toggleModal() {
        setOpened(!opened);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(createBoard(boardName));
        setBoardName("");
        toggleModal();
    }

    return (
        <React.Fragment>
            <ComposerTriggerButton onClick={toggleModal}>
                Add new board
            </ComposerTriggerButton>
            {opened && (
                <StyledModal
                    isOpen={opened}
                    onBackgroundClick={toggleModal}
                    onEscapeKeydown={toggleModal}
                >
                    <Form>
                        <Input
                            autoFocus
                            type="text"
                            placeholder="Board Name"
                            value={boardName}
                            onChange={e => setBoardName(e.target.value)}
                        />
                        <SubmitButton onClick={handleSubmit} disabled={!Boolean(boardName)}>Create Board</SubmitButton>
                    </Form>
                </StyledModal>
            )}
        </React.Fragment>
    )
}
