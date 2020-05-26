import React from 'react'
import { useDispatch } from "react-redux";
import styled from "styled-components";

import kanbanLogo from "../../assets/kanban-logo.png";
import { requestSignOut } from "../../store/auth/actions";


const Container = styled.div`
    height: 60px;
    border-bottom: 1px solid #ccc;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
    span {
        font-size: 30px;
        color: hsl(207,69%,44%);
        font-weight: bold;

        @media (max-width: 500px){
            display: none;
        }
    }
`;

const LogOutButton = styled.button`
    padding: 5px 10px;
    margin-right: 10px;
    background-color: hsla(0, 0%, 0%, 35%);
    border: 1px solid #666;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
`;

export default function Header() {
    const dispatch = useDispatch();

    function handleSignOut() {
        dispatch(requestSignOut());
    }

    return (
        <Container>
            <Logo>
                <img src={kanbanLogo} alt="React Kanban" />
                <span>React Kanban</span>
            </Logo>
            <LogOutButton onClick={handleSignOut}>Log Out</LogOutButton>
        </Container>
    )
}
