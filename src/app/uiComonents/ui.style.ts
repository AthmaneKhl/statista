import styled from "@emotion/styled";

const CardStyled = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin: auto;
  padding: ${({ theme }) => theme.spacing.lg}px;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const CardListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md}px;
  max-height: 70vh;
  overflow-y: scroll;
`;

const InputStyled = styled.input`
  padding: ${({ theme }) => theme.spacing.md}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const SelectStyled = styled.select`
  padding: ${({ theme }) => theme.spacing.md}px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

export { CardStyled, CardListStyled, InputStyled, SelectStyled };
