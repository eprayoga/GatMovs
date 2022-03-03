import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { MovieCardContainer, Title } from "./MovieCard.Elements";

const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <MovieCardContainer background={bg}>
        <Button>
          <i className="bx bx-play" />
        </Button>
      </MovieCardContainer>
      <Title>{item.title || item.name}</Title>
    </Link>
  );
};

export default MovieCard;
