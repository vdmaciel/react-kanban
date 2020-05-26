import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { 
    requestLoginWithGoogle,
    requestLoginWithEmailAndPassword,
    requestLoginAnonymously
} from "../../store/auth/actions";

import { FaUserSecret } from "react-icons/fa";
import authBackground from "../../assets/auth-bg.jpg";
import googleLogo from "../../assets/google-logo.svg";

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

const Separator = styled.div`
    text-align: center;
    position: relative;
    z-index: 1;
    color: #666;
    margin: 40px 0;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        border-top: 1px solid #666;
        z-index: -1;
    }

    span {
        padding: 0 10px;
        text-align: center;
        background-color: #fff;
    }
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

const LoginWithGoogle = styled(Button)`
    background-color: #fff;
    margin-bottom: 20px;

    img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
`;

const LoginAsGuest = styled(Button)`
    background-color: #fff;
    span { margin-left: 10px; }
`;

const AuthLink = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export default function Login() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLoginWithGoogle(){
        dispatch(requestLoginWithGoogle());
    }

    function handleLoginAsGuest(){
        dispatch(requestLoginAnonymously());
    }

    function handleLogin(){
        dispatch(requestLoginWithEmailAndPassword(email, password));
    }

    return (
        <Container>
            <Form>
                <Title>Login</Title>
                <Input type="email" placeholder="e-mail" />
                <Input type="passoword" placeholder="password" />
                <SubmitButton onClick={handleLogin}>Login</SubmitButton>
                <Separator><span>OR</span></Separator>
                <LoginWithGoogle onClick={handleLoginWithGoogle}>
                    <img src={googleLogo} alt="login with google" />
                    <span>Login with Google</span>
                </LoginWithGoogle>
                <LoginAsGuest onClick={handleLoginAsGuest}>
                    <FaUserSecret size={30} />
                    <span>Enter as Guest</span>
                </LoginAsGuest>
                <AuthLink>
                    Don't have an account? <Link to="/signup"><strong>Sign Up</strong></Link>
                </AuthLink>
            </Form>
        </Container>
    )
}
