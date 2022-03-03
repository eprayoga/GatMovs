import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  HeroSlideComponent,
  HeroSlideItemComponent,
  HeroItemContainer,
  HeroItemInfo,
  Title,
  Overview,
  HeroButtons,
  HeroItemPoster,
} from "./HeroSlide.elements";
import Button from "../Button/Button";
import Modal, { ModalContent } from "../Modal/Modal";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.results.slice(0, 4));
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <HeroSlideComponent>
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => <HeroSlideItem item={item} active={isActive} />}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, i) => (
        <TrailerModal key={i} item={item} />
      ))}
    </HeroSlideComponent>
  );
};

const HeroSlideItem = (props) => {
  let history = useHistory();
  const item = props.item;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );
  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);
    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videosrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector("#modal_content iframe")
        .setAttribute("src", videosrc);
    } else {
      modal.querySelector("#modal_content > iframe").innerHTML = "No Trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <HeroSlideItemComponent
      active={props.active}
      style={{ backgroundImage: `url(${background})` }}
    >
      {item.title}
      <HeroItemContainer>
        <HeroItemInfo>
          <Title>{item.title}</Title>
          <Overview>{item.overview}</Overview>
          <HeroButtons>
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch Now
            </Button>
            <Button btnOutline onClick={setModalActive}>
              Watch Trailer
            </Button>
          </HeroButtons>
        </HeroItemInfo>
        <HeroItemPoster>
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </HeroItemPoster>
      </HeroItemContainer>
    </HeroSlideItemComponent>
  );
};

const TrailerModal = (props) => {
  const item = props.item;
  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal active={false} id={`modal_${item.id}`}>
      <ModalContent id="modal_content" onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default HeroSlide;
