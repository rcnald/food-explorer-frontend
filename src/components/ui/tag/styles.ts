import styled from 'styled-components'

export const Tag = styled.li`
  display: flex;
  padding: 4px 8px;
  background: ${({ theme }) => theme.COLORS.DARK[950]};
  border-radius: 5px;
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM};
`
