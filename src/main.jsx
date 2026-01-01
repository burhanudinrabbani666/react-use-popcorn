import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating
      maxRating={"5"}
      messages={["Terriable", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={5}
      color="red"
      size={40}
      className={"test"}
      defaultRating={1}
    />
    <Test />

    <Challenge />
  </StrictMode>
);
