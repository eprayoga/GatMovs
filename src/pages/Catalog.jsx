import React from "react";
import { useParams } from "react-router";
import PageHeader from "../components/PageHeader/PageHeader";
import { Container, SectionCatalog } from "../globalStyle";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { category as cate } from "../api/tmdbApi";

const Catalog = () => {
  const { category } = useParams();

  return (
    <>
      <PageHeader>
        {category === cate.movie ? "Movies" : "TV Series"}
      </PageHeader>
      <Container>
        <SectionCatalog>
          <MovieGrid category={category} />
        </SectionCatalog>
      </Container>
    </>
  );
};

export default Catalog;
