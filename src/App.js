import "swiper/css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routes from "./config/Routes";
import GlobalStyle from "./globalStyle";

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <GlobalStyle />
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
