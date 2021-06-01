import Account from "./components/Account/Account";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import AuthorDetail from "./pages/AuthorDetail/AuthorDetail";
import BookDetail from "./pages/BookDetail/BookDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import FilterBooks from "./pages/FilterBooks/FilterBooks";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile/Profile";
import WishList from "./pages/WishList/WishList";

export const routes = [
  { path: "/", exact: true, component: HomePage },
  { path: "/book/filter", exact: false, component: FilterBooks },
  { path: "/book/:id", exact: false, component: BookDetail },
  { path: "/cart", exact: false, component: Cart },
  { path: "/profile/wishlist", exact: false, component: WishList },
  { path: "/profile", exact: false, component: Profile },
  { path: "/account", exact: false, component: Account },
  { path: "/author/:id", exact: false, component: AuthorDetail },
  { path: "/checkout", exact: false, component: Checkout },
];

export const adminRoutes = [
  { path: "/admin/dashboard", exact: false, component: Dashboard },
];
