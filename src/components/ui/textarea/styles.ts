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

      &:has(textarea:focus) {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
      }

      > textarea {
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
        background: transparent;
        width: 100%;
        padding: 0.5rem;

        &:focus {
          outline: none;
        }
      }

      > svg {
        font-size: 30px;
        margin-block: 0.5rem;
        margin-inline-end: 0.5rem;
        flex-shrink: 0;
        color: ${(props) => props.$color[0]};
      }
    }
  }

  > span {
    color: ${(props) => props.$color[0]};
    display: block;
    height: 1.6em;
  }

  &:has(textarea:invalid) {
    > label {
      > div {
        outline: 2px solid ${(props) => props.$color[1]};
        &:has(textarea:focus) {
          color: ${(props) => props.$color[1]};
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
