import styled from 'styled-components'

export const Button = styled.button<{ $variant: 'default' | 'link' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  background: ${(props) =>
    props.$variant === 'link'
      ? 'transparent'
      : props.theme.COLORS.TINTS.TOMATO[100]};
  width: ${(props) => (props.$variant === 'link' ? 'fit-content' : '100%')};
  border-radius: ${(props) => (props.$variant === 'link' ? '0px' : '5px')};
  padding-block: ${(props) => (props.$variant === 'link' ? '0px' : '12px')};
  transition: 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.$variant === 'link'
        ? 'transparent'
        : props.theme.COLORS.TINTS.TOMATO[200]};
    text-decoration: ${(props) =>
      props.$variant === 'link' ? 'underline' : 'none'};
  }
  &:disabled {
    background: ${(props) => props.theme.COLORS.DARK[950]};
    color: ${(props) => props.theme.COLORS.LIGHT[500]};
    cursor: not-allowed;
  }
`
