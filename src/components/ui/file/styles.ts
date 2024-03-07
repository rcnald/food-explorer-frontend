import styled from 'styled-components'

export const Div = styled.div<{ $color: [string, string?] }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
  ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.BASE};

  > label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${({ theme }) => theme.COLORS.DARK[900]};
      border-radius: 8px;
      transition: 0.3s ease-in;
      padding: 8px;
      cursor: pointer;

      &:has(input:focus),
      &:hover {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
      }

      > input {
        ${({ theme }) => theme.UTILS.SRONLY}

        &:focus {
          outline: none;
        }
      }

      > div {
        display: flex;
        align-items: center;
        gap: 8px;

        > svg {
          font-size: 30px;
          flex-shrink: 0;
        }
      }
    }
  }

  > span {
    display: block;
    height: 1.6em;
  }

  &:has(input:invalid) {
    > label {
      > div {
        outline: 2px solid ${(props) => props.$color[1]};
        &:has(input:focus) {
          outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
        }

        > svg {
          color: ${(props) => props.$color[1]};
        }
      }
    }

    > span {
      color: ${(props) => props.$color[1]};
    }
  }
`
