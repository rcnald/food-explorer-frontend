import styled from 'styled-components'

export const Hero = styled.section`
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 30px 145px 1fr;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  height: 150px;

  ${({ theme }) => theme.UTILS.CONTAINER};

  padding: 16px;

  @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
    height: 400px;
    grid-template-rows: 130px 1fr;
    grid-template-columns: 70px 1fr 1fr;
  }

  &::before {
    content: '';
    background: linear-gradient(${({ theme }) => theme.COLORS.GRADIENTS[200]});
    display: flex;
    width: 100%;
    height: 100%;
    grid-row: 2/3;
    grid-column: 2/-1;
    border-radius: 10px;
  }

  > img {
    align-self: end;
    grid-row: 1/3;
    grid-column: 1/3;
  }

  > div {
    grid-row: 2/3;
    grid-column: 3/4;
    display: grid;
    place-content: center;
    padding: 8px;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      padding-inline: 30px;
    }

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.LG}
      font-size: clamp(1.125rem, 0.1494rem + 3.6728vw, 2.5rem);
    }

    > p {
      ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
      font-size: clamp(0.75rem, 0.4402rem + 1.1662vw, 1rem);
    }
  }
`
