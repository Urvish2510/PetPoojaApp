import React from "react";
import { Route } from "react-router-dom";

// layout
import RestaurantLayout from "../Layouts/Restaurant.layout";

function RestaurantLayoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <RestaurantLayout>
            <Component {...props} />
          </RestaurantLayout>
        )}
      />
    </>
  );
}

export default RestaurantLayoutHoc;