import styled from 'styled-components'

export const Div = styled.div`
  color: white;

  > label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      background: ${({ theme }) => theme.COLORS.DARK[900]};
      padding: 1rem;
      border-radius: 8px;

      &:has(input:focus) {
        outline: 2px solid ${({ theme }) => theme.COLORS.LIGHT[500]};
      }

      > input {
        color: ${({ theme }) => theme.COLORS.LIGHT[100]};
        background: transparent;
        width: 100%;

        &:focus {
          outline: none;
        }
      }

      > svg {
        font-size: 30px;
        flex-shrink: 0;
        color: ${({ theme }) => theme.COLORS.TINTS.MINT[100]};
      }
    }
  }

  > span {
    color: ${({ theme }) => theme.COLORS.TINTS.MINT[100]};
    display: block;
    height: 1em;
  }

  &:has(input:invalid) {
    > label {
      > div {
        &:has(input:focus) {
          color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]};
          outline: 2px solid ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]};
        }

        > svg {
          color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]};
        }
      }
    }

    > span {
      color: ${({ theme }) => theme.COLORS.TINTS.TOMATO[400]};
    }
  }
`
