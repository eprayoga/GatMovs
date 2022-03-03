import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { Casts, CastsItem, ItemImg, ItemName } from "./CastList.Elements";

const CastList = (props) => {
  const { category } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCasts(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, props.id]);

  return (
    <Casts>
      {casts.map((item, i) => (
        <CastsItem key={i}>
          <ItemImg
            background={apiConfig.w500Image(item.profile_path)}
          ></ItemImg>
          <ItemName>{item.name}</ItemName>
        </CastsItem>
      ))}
    </Casts>
  );
};

export default CastList;
