import styled from 'styled-components'

export const Add = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  width: 100%;

  main {
    ${({ theme }) => theme.UTILS.CONTAINER};
    display: grid;
    grid-template-rows: max-content 1fr;
    place-items: center;
    height: 100%;

    > button {
      justify-self: start;

      svg {
        font-size: 30px;
      }
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 100%;

      > fieldset {
        display: flex;
        flex-direction: column;
        gap: 32px;
        width: 100%;

        > div:not(div:last-child) {
          display: flex;
          flex-direction: column;
          gap: 32px;

          @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
            flex-direction: row;
          }

          > div {
            width: 100%;
          }

          &:nth-of-type(3) {
            gap: 8px;
          }
        }
      }
    }
  }
`
export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > span {
    color: white;
    ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.BASE};
  }
  > div {
    display: flex;
    gap: 16px;
    height: min-content;
    flex-wrap: wrap;
    padding: 8px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK[900]};
  }
`
