import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  min-height: 480px;
  height: 100%;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 1px 0px 1rem rgba(0, 0, 0, 0.2);
  justify-content: space-between;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    cursor: pointer;

  }

  .desc {
    display: flex;
    gap: 1rem;
    height: 100%;
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;

    .desc-price {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: space-between;
      height: 130px;
      text-align: center;

      .price {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        text-align: center;
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: ${({ theme }) => theme.colors.text.secondary};

        span {
          font-size: ${({ theme }) => theme.fontSizes.sm};
          color: ${({ theme }) => theme.colors.text.primary};
        }
      }

      .name {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        color: ${({ theme }) => theme.colors.text.primary};
        font-weight: 500;
        cursor: pointer;
        transition: all 200ms ease-in-out;

        &:hover {
          color: ${({ theme }) => theme.colors.gray[900]};
        }
      }
    }
  }
`