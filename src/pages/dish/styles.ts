import styled from 'styled-components'

export const Dish = styled.div`
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

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
      height: min-content;

      @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
        flex-direction: row;
      }

      > img {
        width: 390px;
        aspect-ratio: 1/1;
      }

      > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};

        > h1 {
          ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.XL3}
          font-size: clamp(1.5rem, 0.2609rem + 4.6647vw, 2.5rem);
          text-align: center;

          @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
            text-align: start;
          }
        }

        > p {
          ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
          text-align: center;
          font-size: clamp(1rem, 0.3805rem + 2.3324vw, 1.5rem);

          @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
            text-align: start;
          }
        }

        > ul {
          display: flex;
          gap: 12px;
          justify-content: center;
          align-items: center;

          @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
            justify-content: start;
            text-align: start;
          }
        }

        > div {
          display: flex;
          justify-content: center;
          gap: 32px;

          @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
            justify-content: start;
          }

          > div {
            display: flex;
            align-items: center;
            font-size: 24px;
            gap: 16px;

            > span {
              display: block;
              width: 24px;
              text-align: center;
            }
          }
          > a {
            > button {
              width: 100%;
              padding: 12px 24px;

              > svg {
                font-size: 24px;

                @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
                  display: none;
                }
              }

              @media (min-width: ${({ theme }) => theme.BREAKPOINT.XS}) {
                width: fit-content;
              }
            }
          }
        }
      }
    }
  }
`
