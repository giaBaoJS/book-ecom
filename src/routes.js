import Page_404 from "./components/Page_404/Page_404";
import BookDetail from "./pages/BookDetail/BookDetail";
import Cart from "./pages/Cart/Cart";
import FilterBooks from "./pages/FilterBooks/FilterBooks";
import HomePage from "./pages/HomePage";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/book/filter", exact: false, component: FilterBooks },
  { path: "/book/:id", exact: false, component: BookDetail },
  { path: "/cart", exact: false, component: Cart },
  {
    path: "",
    component: Page_404,
  },
];
