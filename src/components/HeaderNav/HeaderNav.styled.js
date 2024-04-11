import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../styles/theme";

export const NavUl = styled.ul`
  padding: 8px;
  display: flex;
  gap: 16px;
`;

export const Link = styled(NavLink)`
  padding: 4px 8px;
  color: ${theme.colors.white};
  transition: ${`background-color ${theme.animation}, color ${theme.animation}, border-radius ${theme.animation}`};
  &.active {
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.accent};
  }
`;
