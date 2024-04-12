import styled from "styled-components";
import { theme } from "../../styles/theme";

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const MoviesSerchWrap = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px;
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.accent};

  transition: ${`opacity ${theme.animation}`};

  &:hover {
    opacity: 0.9;
  }
`;
