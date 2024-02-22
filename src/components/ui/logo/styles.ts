import styled from 'styled-components'

export const Div = styled.div<{ $variant: 'default' | 'neutral' }>`
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.FONTS.ROBOTO.BOLD.XL};

  > svg {
    font-size: 30px;
    color: ${({ theme, $variant }) =>
      $variant === 'default'
        ? theme.COLORS.TINTS.CAKE[100]
        : theme.COLORS.LIGHT[700]};
  }

  > span {
    display: flex;
    gap: 10px;
    align-items: center;
    white-space: nowrap;
    color: ${({ theme, $variant }) =>
      $variant === 'default'
        ? theme.COLORS.LIGHT[100]
        : theme.COLORS.LIGHT[700]};

    ${({ theme }) => theme.FONTS.ROBOTO.BOLD.XL};

    /* @media (min-width: 300px) {
      flex-direction: column;
      gap: 0px;
      align-items: end;
    } */

    > span {
      color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]};

      ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.XS};

      line-height: 50%;
    }
  }
`
