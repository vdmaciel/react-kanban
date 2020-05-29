import React from 'react'
import styled from "styled-components";
import Modal from "styled-react-modal";
import TextareaAutosize from "react-textarea-autosize";

const Container = styled.div`
    position: absolute;
    display: flex;
    align-items: flex-start;

    @media (max-width: 500px){
        flex-direction: column;
        align-items: flex-end;
    }
`;

const StyledTextareaAutosize = styled(TextareaAutosize)`
    padding: 10px 18px;
    border: 0;
    border-radius: 4px;
    font-size: 15px;
    resize: none;
    color: #444;
    box-shadow: 0 0 3px 2px rgb(50, 184, 72);
`;

const EditorOptions = styled.ul`
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
        background-color: rgba(0, 0, 0, .4);
        margin-bottom: 4px;
        padding: 6px;
        color: #ccc;
        border-radius: 3px;
        transition: 0.3s;
        cursor: pointer;
        &:hover { 
            margin-left:8px;
            background-color: rgba(0, 0, 0, .7);
            color: #eee;
      }
    }

    @media(max-width: 500px){
        margin-left: 0;
        margin-top: 10px;
        align-items: flex-end;
    }
`;

class CardEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }


    render() {
        const { isOpen, toggleEditor, cardElement } = this.props;

        if (!cardElement) return null;

        const cardSize = cardElement.getBoundingClientRect();

        return (
            <Modal
                isOpen={isOpen}
                onBackgroundClick={toggleEditor}
                onEscapeKeydown={toggleEditor}
            >
                <Container
                    onClick={e => e.stopPropagation()}
                    style={{
                        top: cardSize.top,
                        left: cardSize.left
                    }}
                >
                    <StyledTextareaAutosize
                        autoFocus
                        style={{
                            height: cardSize.height,
                            width: cardSize.width
                        }}
                    />
                    <EditorOptions>
                        <li>Save</li>
                        <li>Delete Card</li>
                    </EditorOptions>
                </Container>
            </Modal>
        )
    }
}

export default CardEditor;