import styled from 'styled-components'

export const Div = styled.div<{ $variant: 'default' | 'neutral' }>`
  display: flex;
  align-items: center;
  gap: 10px;

  ${({ theme }) => theme.FONTS.ROBOTO.BOLD.SM};

  > svg {
    color: ${({ theme, $variant }) =>
      $variant === 'default'
        ? theme.COLORS.TINTS.CAKE[100]
        : theme.COLORS.LIGHT[700]};
  }

  color: ${({ theme, $variant }) =>
    $variant === 'default' ? theme.COLORS.LIGHT[100] : theme.COLORS.LIGHT[700]};
`
