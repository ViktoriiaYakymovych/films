import styled from "styled-components";
import { theme } from "../../styles/theme";

export const List = styled.li`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  align-items: center;
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > p {
    color: ${theme.colors.accent};
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
