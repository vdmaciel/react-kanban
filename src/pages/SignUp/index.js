import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import authBackground from "../../assets/auth-bg.jpg";

const Container = styled.div`
    background-image: url(${authBackground});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Form = styled.form`
    background-color: hsla(0, 0%, 100%, 97%);
    padding: 20px 30px;
    border-radius: 4px;
    width: 400px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 38px;
    color: #333;
    text-align: center;
`;

const Input = styled.input`
    height: 40px;
    margin-bottom: 15px;
    border: inset 1px #eee;
    border-radius: 3px;
    font-size: 16px;
    padding: 0 15px;
    background-color: #eee;
    color: #333;
    font-weight: bold;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    box-shadow: 0 0 2px #333;
    width: 100%;
    height: 40px;
    border-radius: 4px;
    font-weight: bold;
    font-size: 16px;
`;

const SubmitButton = styled(Button)`
    background-color: hsl(207, 33%, 39%);
    color: #fff;
`;

const AuthLink = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export default function Login() {
    return (
        <Container>
            <Form>
                <Title>Sign Up</Title>
                <Input type="text" placeholder="username" />
                <Input type="email" placeholder="e-mail" />
                <Input type="passoword" placeholder="password" />
                <SubmitButton>Sign Up</SubmitButton>
                <AuthLink>
                    Already have an account? <Link to="/login"><strong>Login</strong></Link>
                </AuthLink>
            </Form>
        </Container>
    )
}
