import styled from 'styled-components'

const SpinContainer = styled.div`
  border: 2px solid #fff;
  border-left-color: transparent;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;
  display: block;
  margin: auto;

  @keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
`

function SpinnerButton () {
  return (
    <SpinContainer>
    </SpinContainer>
  )
}

export default SpinnerButton