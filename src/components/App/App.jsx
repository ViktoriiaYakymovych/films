import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
//npx json-server --watch db.json --port 8000

const Home = lazy(() => import("../../pages/Home/Home"));
const Movies = lazy(() => import("../../pages/Movies/Movies"));
const MovieDetails = lazy(() =>
  import("../../pages/MovieDetails/MovieDetails")
);
const Favorites = lazy(() => import("../../pages/Favorites/Favorites"));

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
