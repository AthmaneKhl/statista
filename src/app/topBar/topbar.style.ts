import styled from "@emotion/styled";

const TopbarStyled = styled.div`
  border-bottom: 3px solid ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.primary};
  height: 100px;
  display: flex;
  justify-content: center;
  div {
    display: flex;
    width: 1000px;
    padding: ${({ theme }) => theme.spacing.xl}px;
    padding-bottom: ${({ theme }) => theme.spacing.xxl}px;
    svg {
      fill: white;
    }
  }
`;

export { TopbarStyled };
