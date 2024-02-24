import styled from 'styled-components'

export const Footer = styled.footer`
  color: ${({ theme }) => theme.COLORS.LIGHT[200]};
  background: ${({ theme }) => theme.COLORS.DARK[600]};
  padding-block: 26px;
  display: flex;
  justify-content: center;
  margin-top: auto;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => theme.UTILS.CONTAINER};

    > div {
      > * {
        font-size: clamp(0.9375rem, 0.2405rem + 2.6239vw, 1.5rem);
      }
    }

    > span {
      ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.SM}
      font-size: clamp(0.75rem, 0.5951rem + 0.5831vw, 0.875rem);
    }
  }
`
