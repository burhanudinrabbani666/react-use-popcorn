import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/*
import StarRating from "./star-rating";
import Challenge from "./challenge1";

export function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This Movie was Rated {movieRating} stars</p>
    </>
  );
}
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
