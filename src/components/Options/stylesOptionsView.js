import styled from 'styled-components'
import { animBounceTiny } from '../GlobalComponents/styles'

export const OptionViewModal = styled.div`
  background: var(--background-modal);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  animation: 0.1s ${animBounceTiny} ease-in-out;
  place-items: center;
`

export const OptionEditFormContainer = styled.form`
  padding: 25px;
`

export const OptionEditBox = styled.div`
  width: 500px;
  overflow: hidden;
  min-height: 420px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: var(--b-radius);
  background: var(--background-primary);

  input[type='file'] {
    margin-top: 12px;
  }
`

export const OptionEditBoxButtonContainer = styled.div`
  background: var(--background-secondary);
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 65px;
`
