import styled from 'styled-components'

export const SidebarWrapper = styled.div`
  background: var(--background-secondary);
  position: relative;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const SidebarHeader = styled.header`
  height: 50px;
  display: grid;
  place-items: center;
`

export const SidebarSearchBar = styled.button`
  background: var(--background-color);
  color: var(--text-secondary);
  display: block;
  margin: auto;
  border: 0;
  padding: 5px 2px;
  width: 90%;
  border-radius: var(--b-radius);
  font-size: 0.75em;

  @media screen and (min-width: 1280px) {
    font-size: 0.875em;
  }
`

export const SidebarContent = styled.section`
  padding: 0 0.5em;
`

export const SidebarChannelsWrapper = styled.div`
  height: auto;
`

export const SidebarChannelsButton = styled.button`
  color: var(--text-primary);
  background: none;
  display: flex;
  height: 35px;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border: 0;
  width: 100%;

  &:hover > p {
    color: var(--text-primary);
  }

  svg {
    cursor: pointer;
    font-size: 16px;
  }
`

export const SidebarPrivateChannelsTitle = styled.p`
  font-size: 1em;
  cursor: default;
  font-weight: 500;
  color: var(--text-secondary);

  &:hover {
    color: var(--text-primary);
  }
`

export const SidebarChannels = styled.div`
  display: grid;
  grid-template-columns: repeat(1, fr);
  gap: 6px 0px;
`

export const SidebarOptionButtons = styled.button`
  border: 0;
  outline: none;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  font-size: 1em;
  color: var(--text-channels);
  background: none;

  &:hover {
    background: var(--background-primary-hover);
  }
`

export const SidebarOptionButtonTitle = styled.span`
  margin: 0 12px;
`
