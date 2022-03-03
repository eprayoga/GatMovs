import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import CastList from "./CastList";
import {
  Banner,
  Cast,
  Genres,
  GenresItem,
  Info,
  MovieContent,
  Overview,
  Poster,
  PosterImg,
  SectionHeader,
  Similar,
  SimilarHeader,
  Title,
  VideoListContainer,
} from "./Detail.Elements";
import VideoList from "./VideoList";
import MovieList from "../../components/MovieList/MovieList";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <Banner
            background={apiConfig.originalImage(
              item.backdrop_path || item.poster_path
            )}
          ></Banner>
          <MovieContent>
            <Poster>
              <PosterImg
                background={apiConfig.originalImage(
                  item.poster_path || item.backdrop_path
                )}
              ></PosterImg>
            </Poster>
            <Info>
              <Title>{item.title || item.name}</Title>
              <Genres>
                {item.genres &&
                  item.genres
                    .slice(0, 5)
                    .map((genre, i) => (
                      <GenresItem key={i}>{genre.name}</GenresItem>
                    ))}
              </Genres>
              <Overview>{item.overview}</Overview>
              <Cast>
                <SectionHeader>
                  <h2>Casts</h2>
                </SectionHeader>
                <CastList id={item.id} />
              </Cast>
            </Info>
          </MovieContent>
          <VideoListContainer>
            <VideoList id={item.id} />
          </VideoListContainer>
          <Similar>
            <SimilarHeader>
              <h2>Similar</h2>
            </SimilarHeader>
            <MovieList category={category} type="similar" id={item.id} />
          </Similar>
        </>
      )}
    </>
  );
};

export default Detail;
