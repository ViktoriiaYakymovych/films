import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";

import HeroImg from "../../assets/hero.jpg";

export const Hero = styled.section`
  margin-bottom: 40px;
`;

export const PageTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
`;

export const HeroContainer = styled.div`
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  height: 400px;
  max-width: 750px;

  background: url(${HeroImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 14px;
`;

export const HeroTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  padding: 10px;

  color: ${theme.colors.accent};

  border-radius: 14px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(30px);
`;

export const StyledLink = styled(Link)`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 40px;

  font-weight: 600;
  text-align: center;
  color: ${theme.colors.white};

  text-decoration: none;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.accent};

  transition: ${`opacity ${theme.animation}`};

  &:hover {
    opacity: 0.9;
  }
`;
