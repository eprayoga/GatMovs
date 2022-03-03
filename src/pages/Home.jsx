import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import HeroSlide from "../components/HeroSlide/HeroSlide";
import MovieList from "../components/MovieList/MovieList";
import { category, movieType, tvType } from "../api/tmdbApi";
import { Container, Section, SectionHeader } from "../globalStyle";

const Home = () => {
  return (
    <>
      <HeroSlide />
      <Container>
        <Section>
          <SectionHeader>
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <Button btnOutline small>
                View more
              </Button>
            </Link>
          </SectionHeader>
          <MovieList category={category.movie} type={movieType.popular} />
        </Section>
        <Section>
          <SectionHeader>
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <Button btnOutline small>
                View more
              </Button>
            </Link>
          </SectionHeader>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </Section>
        <Section>
          <SectionHeader>
            <h2>Trending TV</h2>
            <Link to="/tv">
              <Button btnOutline small>
                View more
              </Button>
            </Link>
          </SectionHeader>
          <MovieList category={category.tv} type={tvType.popular} />
        </Section>
        <Section>
          <SectionHeader>
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <Button btnOutline small>
                View more
              </Button>
            </Link>
          </SectionHeader>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </Section>
      </Container>
    </>
  );
};

export default Home;
