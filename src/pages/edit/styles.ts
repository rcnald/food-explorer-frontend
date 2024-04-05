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

      > div {
        display: flex;
        gap: 32px;

        > button {
          &[type='button'] {
            background: ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]};
            &:hover {
              filter: brightness(0.7);
            }
          }

          &[type='button']:first-child {
            background: ${({ theme }) => theme.COLORS.DARK[800]};
            &:hover {
              filter: brightness(1.7);
            }
          }
        }
      }

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
    flex-wrap: wrap;
    gap: 16px;
    height: min-content;
    padding: 8px;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK[900]};
  }
`
