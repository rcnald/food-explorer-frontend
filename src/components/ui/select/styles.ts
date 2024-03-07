import styled from 'styled-components'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: min-content;
  gap: 12px;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  > button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 12px;
    background: ${({ theme }) => theme.COLORS.DARK[900]};
    border-radius: 8px;
  }

  > ul {
    position: absolute;
    top: calc(100% + 8px);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    align-items: start;
    padding: 4px;
    background: ${({ theme }) => theme.COLORS.DARK[900]};
    border-radius: 8px;

    > li {
      width: 100%;
      > button {
        display: flex;
        align-items: start;
        padding: 16px;
        width: 100%;
        background: ${({ theme }) => theme.COLORS.DARK[900]};
        border-radius: 8px;
        transition: 0.2s ease-in-out;

        &:hover {
          filter: brightness(1.5);
        }
      }
    }
  }
`
