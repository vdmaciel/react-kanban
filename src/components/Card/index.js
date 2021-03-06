import React from 'react'
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import { FaEdit } from "react-icons/fa";

import CardEditor from "./CardEditor";

const EditButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin: 3px;
    background-color: transparent;
    color: transparent;
    border: none;
    height: 30px;
    width: 30px;
    font-size: 25px;
    display:  flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;

    &:hover { background-color: #ddd; }
`;

const Container = styled.div`
    position: relative;
    background-color: #fff;
    padding: 10px;
    border-radius: 4px;
    border-bottom: 1px solid #666;
    margin-bottom: 10px;
    overflow: hidden;
    word-break: break-all;
    hyphens: auto;

    &:hover { 
        ${EditButton}{ 
            background-color: hsla(360, 100%, 100%, 75%);
            color: #666;
        }
    }
`;



export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            isEditorOpened: false
        }
    }

    toggleEditor = () => this.setState({ isEditorOpened: !this.state.isEditorOpened });

    render() {
        const { cardData, cardIndex, listIndex } = this.props;
        const { isEditorOpened } = this.state;
        return (
            <Draggable draggableId={cardData.id} index={cardIndex}>
                {provided => (
                    <Container
                        onClick={this.toggleEditor}
                        ref={ref => {
                            provided.innerRef(ref);
                            this.ref = ref;
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <p>{ cardData.text }</p>
                        <EditButton>
                            <FaEdit />
                        </EditButton>
                        <CardEditor
                            isOpen={isEditorOpened}
                            toggleEditor={this.toggleEditor}
                            cardElement={this.ref}
                            cardData={cardData}
                            cardIndex={cardIndex}
                            listIndex={listIndex}
                        />
                    </Container>
                )}
            </Draggable>
        )
    }
}
