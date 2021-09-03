import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'


const showAnim = keyframes`
    0% {
        opacity: 0.4;
        transform: scale(1.2);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const AppLayoutLoggedOut = styled.div`
    display: grid;
    background: var(--background-primary);
    width: 100%;
    height: 100vh;
    place-items: center;
`

export const ButtonForm = styled.button`
    color: var(--text-primary);
    background: var(--primary-color);
    padding: 10px;
    font-weight: 500;
    border: 0;
    width: 100%;
    margin: 10px 0;
    cursor: pointer;
    transition: var(--duration-transitions);

    &:hover {
        background: var(--primary-color-hover);
    }
`

export const LoginBox = styled.div`
    background: var(--background-secondary);
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.1);
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    border-radius: var(--b-radius);
    height: 400px;
    animation: 0.15s ${showAnim} ease-in-out;

    @media screen and (min-width: 1024px){
        width: 600px;
    }
`

export const FormLogin = styled.form`
    width: 80%;
`

export const LabelForm = styled.label`
    color: var(--text-primary-alt);
    font-size: 16px;
    font-weight: 600;
    margin: 8px 0;
`

export const InputForm = styled.input`
    width: 100%;
    margin: 12px 0;
    background:var(--background-secondary-alt);
    color: var(--text-primary);
    border: 1px solid var(--background-color);
    padding: 12px;
    outline: 0;
    transition: var(--duration-transitions-tiny);

    &:focus {
        border: 1px solid var(--primary-color);
    }    
`

export const ErrorText = styled.p`
    color: var(--error-color);
    margin: 0;
    font-size: 14px;
    margin: 5px 0 0 0;
`

export const SpanInfo = styled.span`
    color: var(--text-secondary);
    font-size: 14px;
    margin: 0 2px;
`

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: var(--primary-color);
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
`
