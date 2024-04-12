import {
  Hero,
  HeroContainer,
  HeroTitle,
  PageTitle,
  StyledLink,
} from "./Home.styled";

const Home = () => {
  return (
    <Hero>
      <PageTitle>Welcome to our movies website</PageTitle>
      <HeroContainer />
      <HeroTitle>
        Here you will find an exciting list of movies for the evening. Let's
        watch together.
      </HeroTitle>
      <StyledLink to="/movies">Let's go</StyledLink>
    </Hero>
  );
};

export default Home;
