import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import tmdbApi, { movieType, category, tvType } from "../../api/tmdbApi";
import Button from "../Button/Button";
import Input from "../Input/Input";
import MovieCard from "../MovieCard/MovieCard";
import {
  LoadMore,
  MovieGridContainer,
  MovieSearchContainer,
  SearchSection,
} from "./MovieGrid.Elements";

const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;

      if (keyword === undefined) {
        const params = {};
        switch (props.category) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(props.category, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.category, keyword]);

  const loadMore = async () => {
    let response = null;

    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (props.category) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: keyword,
      };
      response = await tmdbApi.search(props.category, { params });
    }
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <SearchSection>
        <MovieSearch category={props.category} keyword={keyword} />
      </SearchSection>
      <MovieGridContainer>
        {items.map((item, i) => (
          <MovieCard key={i} category={props.category} item={item} />
        ))}
      </MovieGridContainer>
      {page < totalPage ? (
        <LoadMore>
          <Button btnOutline small onClick={loadMore}>
            Load more
          </Button>
        </LoadMore>
      ) : null}
    </>
  );
};

const MovieSearch = (props) => {
  const history = useHistory();
  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      history.push(`/${category[props.category]}/search/${keyword}`);
    }
  }, [keyword, props.category, history]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <MovieSearchContainer>
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button small onClick={goToSearch}>
        Search
      </Button>
    </MovieSearchContainer>
  );
};

export default MovieGrid;
