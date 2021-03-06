import React from 'react'
import styled from "styled-components";

import Header from "./Header";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Content = styled.div`
    height: calc(100% - 60px);
    background-color: hsl(207,70%,98%);
`;

export default function Default({ children }) {
    return (
        <Container>
            <Header />
            <Content>
                {children}
            </Content>
        </Container>
    )
}
