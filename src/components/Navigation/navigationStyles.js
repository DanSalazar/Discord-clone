import styled from 'styled-components'

export const NavigationWrapper = styled.div`
  background: var(--background-color);
  padding: 0 8px;
  width: 90px;
`

export const NavigationTree = styled.div`
  margin: 0.5em 0;
  display: grid;
  grid-template-columns: repeat(1, fr);
  gap: 8px;
  place-items: center;
`

export const NavigationChannel = styled.button`
  background: var(--background-secondary);
  color: var(--navigation-color-channel);
  border-radius: 50%;
  width: 42px;
  height: 42px;
  border: 0;
  outline: 0;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background: var(--navigation-color-channel);
    color: var(--text-primary);
    border-radius: 20px;
  }

  @media screen and (min-width: 768px) {
    height: 54px;
    width: 54px;
  }
`
