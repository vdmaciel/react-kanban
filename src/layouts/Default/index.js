import React from 'react'
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export default function Default({ children }) {
    return (
        <Container>
            <Header />
            { children }
        </Container>
    )
}
