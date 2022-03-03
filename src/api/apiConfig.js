const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "b2e3a53bae85ea26ef351e6b9631522c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
