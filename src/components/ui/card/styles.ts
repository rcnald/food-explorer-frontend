import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 12px;
  width: 210px;
  background: ${({ theme }) => theme.COLORS.DARK[200]};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK[300]};
  position: relative;
  border-radius: 8px;

  @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
    max-width: 300px;
    width: 100%;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    position: absolute;
    font-size: 24px;
    top: 16px;
    right: 16px;
  }

  > img {
    width: 90px;
    aspect-ratio: 1/1;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      width: 170px;
    }
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM}
    color:${({ theme }) => theme.COLORS.LIGHT[100]};
    white-space: nowrap;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      ${({ theme }) => theme.FONTS.POPPINS.BOLD.LG}
    }
  }

  > p {
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      display: inline;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.SM}
    }
  }

  > span {
    ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
    font-size: clamp(1rem, -0.2391rem + 4.6647vw, 2rem);
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]};
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 24px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      flex-direction: row;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 14px;
      ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
      font-size: clamp(1rem, 0.6902rem + 1.1662vw, 1.25rem);
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};

      > span {
        width: 24px;
        text-align: center;
      }
    }

    > button {
      padding-block: 4px;

      @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
        padding: 12px 24px;
      }
    }
  }
`
