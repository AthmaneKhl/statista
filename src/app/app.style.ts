import styled from "@emotion/styled";

const AppWrapper = styled.div`
  width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: ${({ theme }) => theme.spacing.xxl}px;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const Count = styled.div`
  font-size: 1.5rem;
`;

export { AppWrapper, Toolbar, PageSection, Count };
