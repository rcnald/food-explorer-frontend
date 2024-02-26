import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 12px;
  width: 210px;
  background: ${({ theme }) => theme.COLORS.DARK[200]};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK[300]};
  position: relative;
  border-radius: 8px;

  > button {
    color: ${({ theme }) => theme.COLORS.LIGHT[100]};
    position: absolute;
    top: 16px;
    right: 16px;
  }

  > img {
    width: 90px;
    aspect-ratio: 1/1;
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM.SM}
    color:${({ theme }) => theme.COLORS.LIGHT[100]};
  }

  > p {
    display: none;
  }

  > span {
    ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
    font-size:16px;
    color: ${({ theme }) => theme.COLORS.TINTS.CAKE[200]};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 24px;

    > div {
      display: flex;
      align-items: center;
      gap: 14px;
      ${({ theme }) => theme.FONTS.POPPINS.REGULAR.XL}
      font-size:16px;
      color: ${({ theme }) => theme.COLORS.LIGHT[100]};

      > span {
        width: 24px;
        text-align: center;
      }
    }

    > button {
      padding-block: 4px;
    }
  }
`
