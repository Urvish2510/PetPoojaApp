import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect, Route } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.hoc";
import RestaurantLayoutHoc from "./HOC/Restaurant.hoc";
import CheckoutLayoutHoc from "./HOC/Checkout.hoc";

// Pages
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";
import Checkout from "./pages/CheckoutPage";

// components
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from "./Components/Restaurant/OrderOnline";
import Reviews from "./Components/Restaurant/Reviews/Reviews";
import Menu from "./Components/Restaurant/Menu/Menu";
import Photos from "./Components/Restaurant/Photos/Photos";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id"
        exact
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHoc path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;

//   /* NOTE: alternative redirect */
//   /* <Redirect exact from="/" to="/delivery" /> */
