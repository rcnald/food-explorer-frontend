import styled from 'styled-components'

export const Tag = styled.li<{ $variant: 'default' | 'light' | 'outline' }>`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px 8px;

  background: ${(props) =>
    props.$variant === 'light'
      ? props.theme.COLORS.LIGHT[600]
      : props.$variant === 'outline'
        ? 'transparent'
        : props.theme.COLORS.DARK[950]};
  border-radius: 5px;
  border: 1px dashed
    ${(props) =>
      props.$variant === 'outline'
        ? props.theme.COLORS.LIGHT[600]
        : 'transparent'};
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM};

  > input {
    outline: none;
    max-width: 100px;
    background: transparent;
  }
`
