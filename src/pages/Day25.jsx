import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Day25Nav from "../Day25/Day25Nav";

const Home = lazy(() => import("../Day25/Home"));
const Products = lazy(() => import("../Day25/Products"));
const Profile = lazy(() => import("../Day25/Profile"));

const Loader = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const Day25 = () => {
  const API_URL = import.meta.env.VITE_API_URL;

  return (
    <>
      <Day25Nav />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<Home API_URL={API_URL} />}
          />

          <Route
            path="/products"
            element={<Products API_URL={API_URL} />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />
        </Routes>
      </Suspense>
    </>
  );
};

export default Day25;