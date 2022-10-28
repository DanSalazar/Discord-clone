import styled from 'styled-components'

export const UserSidebar = styled.section`
  background: var(--background-secondary-alt);
  width: 100%;
  padding: 0.5em;
  height: 60px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserSidebarStatus = styled.div`
  display: flex;
  align-items: center;
`

export const UserSidebarInfo = styled.div`
  display: inline-flex;
  overflow: hidden;
  flex-direction: column;
  margin-left: 8px;
`

export const UserSidebarUsername = styled.p`
  color: var(--text-primary);
  font-size: 0.875em;
  margin: 0;
  font-weight: 600;
`

export const UserSidebarId = styled.span`
  color: var(--text-primary-alt);
  margin: 0;
  font-weight: 500;
  font-size: 0.75em;
`

export const UserSidebarControlsWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const UserSidebarControls = styled.button`
  color: var(--text-primary-alt);
  border: 0;
  display: flex;
  align-items: center;
  background: 0;
  cursor: pointer;
  border-radius: var(--b-radius);

  svg {
    font-size: 20px;
  }

  &:hover {
    background: var(--background-primary-hover);
  }
`
