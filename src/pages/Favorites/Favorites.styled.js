import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

export const FavoriteTitle = styled.div`
  color: ${theme.colors.accent};
  text-align: center;
  font-size: 2em;
  line-height: 1.8em;
`;

export const StyledLink = styled(Link)`
  padding: 8px;
  color: ${theme.colors.white};

  text-decoration: none;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.accent};

  transition: ${`opacity ${theme.animation}`};

  &:hover {
    opacity: 0.9;
  }
`;
