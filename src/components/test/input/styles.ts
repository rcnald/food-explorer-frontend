import styled from 'styled-components'

export const Label = styled.label<{ $isValid?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
  ${({ theme }) => theme.FONTS.ROBOTO.REGULAR.BASE};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.COLORS.DARK[900]};
    border-radius: 8px;

    &:has(input:focus) {
      outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
    }

    > input {
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};
      background: transparent;
      width: 100%;
      padding: 1rem;
      background: ${(props) =>
        props.$isValid === undefined
          ? 'black'
          : props.$isValid
            ? 'green'
            : 'red'};

      &:focus {
        outline: none;
      }
    }

    > svg {
      font-size: 30px;
      margin-block: 1rem;
      margin-inline-end: 1rem;
      flex-shrink: 0;
    }
  }

  > span {
    display: block;
    height: 1.6em;
  }

  &:has(input:invalid) {
    > label {
      > div {
        &:has(input:focus) {
          outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
        }

        > svg {
        }
      }
    }

    > span {
    }
  }
`
