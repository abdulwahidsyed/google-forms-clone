import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const Home = lazy(() => import("./Pages/Home/Home"));
  const Questionnaire = lazy(() =>
    import("./Pages/Questionnaire/Questionnaire")
  );
  const Preview = lazy(() => import("./Pages/Preview/Preview"));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/Questionnaire"
        element={
          <Suspense>
            <Questionnaire />
          </Suspense>
        }
      />
      <Route
        path="/preview"
        element={
          <Suspense>
            <Preview />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
