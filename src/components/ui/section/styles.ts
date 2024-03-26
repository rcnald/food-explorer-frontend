import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;

  > div {
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    ${({ theme }) => theme.UTILS.CONTAINER}

    /* width:fit-content; */
    

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.LG}
      color:${({ theme }) => theme.COLORS.LIGHT[100]};
      font-size: clamp(1.125rem, 0.0408rem + 4.0816vw, 2rem);
    }

    > div {
      display: flex;
      position: relative;
      overflow-x: hidden;

      &::after,
      &::before {
        content: '';
        display: none;
        position: absolute;
        width: 25%;
        height: 100%;
        background: linear-gradient(
          ${({ theme }) => theme.COLORS.GRADIENTS[100]}
        );
        pointer-events: none;
        z-index: 1;

        @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
          display: block;
        }
      }

      &::after {
        left: 0;
        transform: rotate(180deg);
      }

      &::before {
        right: 0;
      }

      &:has(> div > div > span) {
        & > button {
          display: none;
        }
      }

      > div {
        display: flex;
        gap: 26px;
        overflow-x: auto;

        &:has(> div > span) {
          width: 100%;
        }

        > div {
          &:has(> span) {
            width: 100%;
          }

          > span {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 200px;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.LIGHT[400]};
            font-weight: bold;
            width: 100%;
          }
        }

        &::-webkit-scrollbar {
          height: 8px;
        }

        &::-webkit-scrollbar-thumb {
          background-color: ${({ theme }) => theme.COLORS.LIGHT[700]};
          border-radius: 6px;
        }

        &::-webkit-scrollbar-track,
        &::-webkit-scrollbar-corner,
        &::-webkit-scrollbar-button {
          background-color: transparent;
        }

        @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
          overflow-x: hidden;
        }
      }

      > button {
        display: none;
        padding: 4px;
        font-size: 40px;
        position: absolute;
        transform: translateY(-100%);
        top: 50%;
        border-radius: 50%;
        z-index: 2;

        @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
          display: block;
        }

        &:hover {
          background: ${({ theme }) => theme.COLORS.LIGHT[100.5]};
        }

        &:disabled {
          cursor: default;
          background: transparent;
        }
      }

      > button:not(button + button) {
        left: 40px;
      }

      > button + button {
        right: 40px;
      }
    }
  }
`
/* Estilizando a barra de rolagem */
