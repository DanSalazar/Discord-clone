import styled, { keyframes } from 'styled-components'

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
  width: 100%;
  place-items: center;
  min-height: 100vh;
  position: absolute;
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

  @media screen and (min-width: 1024px) {
    width: 600px;
  }
`

export const FormLogin = styled.form`
  width: 80%;
`
