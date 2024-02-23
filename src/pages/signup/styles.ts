import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
  max-width: 1100px;
  width: 100%;
  height: min-content;
  padding: 56px;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};

  @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
    flex-direction: row;
    justify-content: space-between;
  }

  > div {
    justify-content: center;
    font-size: 38px;

    > * {
      font-size: 38px;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: min-content;
    width: 100%;
    gap: 32px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
      max-width: 576px;
      border-radius: 16px;
      padding: 64px;
      background: ${({ theme }) => theme.COLORS.DARK[700]};
    }

    > fieldset {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;

      > legend {
        display: none;
        text-align: center;

        @media (min-width: ${({ theme }) => theme.BREAKPOINT.LG}) {
          display: inline;
          margin-bottom: 32px;

          ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.XL2}
        }
      }
    }
  }
`
