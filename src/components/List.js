import React from 'react'
import styled from "styled-components";
import { FaEllipsisH } from "react-icons/fa";

import Card from "./Card";

const Container = styled.div`
    position: relative;
    background-color: hsl(0,0%,92%);
    width: 280px;
    padding: 10px;
    flex-shrink: 0;
    margin-right: 10px;
    border-radius: 4px;
    border-bottom: 2px solid #aaa;

    &:last-child {
        &::before {
            position: absolute;
            content: "";
            width: 10px;
            height: 10px;
            right: -10px;
        }
    }
`;

const ListHeader = styled.div`
    color: #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 10px;
    margin-bottom: 10px;
`;

const ListMenu = styled.button`
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

const CardList = styled.div``;

export default function List() {
    return (
        <Container>
            <ListHeader>
                <h4>List #</h4>
                <ListMenu><FaEllipsisH/></ListMenu>
            </ListHeader>
            <CardList>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </CardList>
        </Container>
    )
}
