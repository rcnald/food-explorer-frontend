import styled from 'styled-components'

export const Alert = styled.div<{ $status?: 'show' | 'dismiss' | undefined }>`
  position: fixed;
  top: 10px;
  right: 10px;
  height: 50px;
  max-width: 300px;
  width: 100%;
  background: red;
  border-radius: 4px;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(200%);

  &.success {
    background: #091209;
    color: #408140;
  }

  &.error {
    background: #330000;
    color: #ff7f7f;
  }

  &.show {
    transform: translateX(0%);
  }
`
