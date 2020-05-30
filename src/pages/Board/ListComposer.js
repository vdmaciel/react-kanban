import React, { useState } from 'react'
import styled from "styled-components";
import Modal from "styled-react-modal";
import { useDispatch } from "react-redux";
import { createList } from "../../store/board/actions";

const StyledModal = Modal.styled({
    display: "flex",
    justifyContent: "center",
});

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
    width: 280px;
    flex-shrink: 0;
    position: relative;
    border: none;
    font-size: 16px;
    border-radius: 4px;
    font-weight: bold;
    text-align: start;
    padding: 10px 20px;
    color: #fff;
    background-color: #aaa;

    &::before {
        position: absolute;
        content: "";
        width: 10px;
        height: 10px;
        right: -10px;
    }
`;

export default function ListComposer() {
    const [opened, setOpened] = useState(false);
    const [listName, setListName] = useState("");
    const dispatch = useDispatch();

    function toggleModal(){
        setOpened(!opened);
    }

    function handleSubmit(){
        dispatch(createList(listName));
        setListName("");
        toggleModal();
    }

    return (
        <React.Fragment>
            <ComposerTriggerButton onClick={toggleModal}>
                + New list
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
                            placeholder="List name"
                            value={listName}
                            onChange={e => setListName(e.target.value)}    
                        />
                        <SubmitButton onClick={handleSubmit} disabled={!Boolean(listName)}>Create List</SubmitButton>
                    </Form>
                </StyledModal>
            )}
        </React.Fragment>
    )
}
