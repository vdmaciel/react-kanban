import React from 'react'
import styled, { keyframes } from "styled-components";

const load = keyframes`
    0% {
        box-shadow: 0 0;
        height: 4em;
    }
    80% {
        box-shadow: 0 0;
        height: 4em;
    }
    100% {
        box-shadow: 0 0;
        height: 4em;
    }
    80% {
        box-shadow: 0 -2em;
        height: 5em;
    }
`;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Spinner = styled.div`
    background: #265277;
    animation: ${load} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    color: #265277;
    text-indent: -9999em;
    margin: auto;
    position: relative;
    font-size: 11px;
    transform: translateZ(0);
    animation-delay: -0.16s;

    &::before {
        position: absolute;
        top: 0;
        content: '';
        background: #265277;
        animation: ${load} 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
        left: -1.5em;
        animation-delay: -0.32s;
    }

    &::after {
        position: absolute;
        top: 0;
        content: '';
        background: #265277;
        animation: ${load} 1s infinite ease-in-out;
        width: 1em;
        height: 4em;
        left: 1.5em;
    }
`;

export default function FullPageSpinner() {
    return <Container><Spinner /></Container>
}
