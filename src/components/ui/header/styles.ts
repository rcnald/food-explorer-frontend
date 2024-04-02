import styled from 'styled-components'
import { Button } from '../button'

export const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
  height: 114px;
  width: 100%;
  position: relative;
  background: ${({ theme }) => theme.COLORS.DARK[700]};

  @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
    display: flex;
    justify-content: center;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-row-start: 2;
    grid-row-end: 3;
    width: 100%;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      display: grid;
      grid-template-columns: min-content 1fr;
      gap: 32px;
    }

    ${({ theme }) => theme.UTILS.CONTAINER}

    @media (max-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      &:has(> div[data-open='true']) {
        > div:not(div[data-open='true']) {
          display: none;
        }
      }
    }

    > button {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM}
      width:fit-content;
      white-space: nowrap;
      height: min-content;
      grid-row-start: 2;
      grid-row-end: 3;

      @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
        display: none;
      }
    }

    button {
      > svg {
        font-size: 2em;
      }
    }
  }
`

export const Container = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
    width: 100%;

    > div {
      display: none;

      @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
        display: flex;
        width: 100%;
        background: transparent;
      }
    }

    > a + button {
      display: none;

      @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
        display: flex;

        span {
          display: none;
        }
      }

      svg {
        display: none;

        @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
          display: flex;
        }
      }
    }
  }

  &[data-open='true'] {
    width: 100%;

    @media (max-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      background: ${({ theme }) => theme.COLORS.DARK[400]};
      position: absolute;
      z-index: 10;
      padding-block: 32px;

      top: 100%;
      left: 0;

      > div {
        display: flex;
        gap: 32px;
        flex-direction: column;
        align-items: start;

        > *:not(:first-child) {
          border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK[950]};
          width: 100%;
          justify-content: start;
        }

        ${({ theme }) => theme.UTILS.CONTAINER}

        > button {
          display: flex;
          ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.LG}

          &:not(a + button) {
            display: none;
          }
        }

        > div {
          display: flex;
          width: 100%;
        }
      }
    }
  }
`

export const Receipt = styled(Button)<{ $isAdmin: boolean }>`
  ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM}
  color: ${({ theme }) => theme.COLORS.LIGHT[100]};
  width: fit-content;
  white-space: nowrap;
  height: min-content;
  position: relative;
  grid-row-start: 2;
  grid-row-end: 3;
  padding-inline: 36px;

  @media (max-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
    background: transparent;
    padding: 0px;
  }

  @media (max-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
    &::after {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM}
      content: attr(data-count);
      background: ${({ theme }) => theme.COLORS.TINTS.TOMATO[200]};
      padding: 4px;
      display: ${(props) => (props.$isAdmin ? 'none' : 'flex')};
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      height: 16px;
      width: 16px;
      position: absolute;
      top: -5px;
      right: -5px;
    }
  }

  > span {
    display: none;

    @media (min-width: ${({ theme }) => theme.BREAKPOINT.MD}) {
      display: flex;
    }
  }
`
