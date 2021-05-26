import Account from "./components/Account/Account";
import Page_404 from "./components/Page_404/Page_404";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AuthorDetail from "./pages/AuthorDetail/AuthorDetail";
import BookDetail from "./pages/BookDetail/BookDetail";
import Cart from "./pages/Cart/Cart";
import FilterBooks from "./pages/FilterBooks/FilterBooks";
import HomePage from "./pages/HomePage";
import WishList from "./pages/WishList/WishList";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/book/filter", exact: false, component: FilterBooks },
  { path: "/book/:id", exact: false, component: BookDetail },
  { path: "/cart", exact: false, component: Cart },
  { path: "/profile/:id/wishlist", exact: false, component: WishList },
  { path: "/account", exact: false, component: Account },
  { path: "/author/:id", exact: false, component: AuthorDetail },
];

export const adminRoutes = [
  { path: "/admin/dashboard", exact: false, component: Dashboard },
];
