import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../Layouts/Homepage.layout.jsx";

function HomeLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    </>
  );
}

export default HomeLayoutHoc;
