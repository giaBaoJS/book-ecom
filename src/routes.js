import Account from "./components/Account/Account";
import {
  PATH_ADMIN_AUTHOR,
  PATH_ADMIN_BOOK,
  PATH_ADMIN_CATEGORY,
  PATH_ADMIN_DASHBOARD,
  PATH_ADMIN_ORDER,
  PATH_ADMIN_USER,
} from "./constants/routes";
import AuthorManager from "./pages/Admin/AuthorManager/AuthorManager";
import BookManager from "./pages/Admin/BookManager/BookManager";
import CategoryManager from "./pages/Admin/CategoryManager/CategoryManager";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import OrderManager from "./pages/Admin/OrderManager/OrderManager";
import UserManager from "./pages/Admin/UserManager/UserManager";
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
  { path: PATH_ADMIN_DASHBOARD, exact: false, component: Dashboard },
  { path: PATH_ADMIN_AUTHOR, exact: false, component: AuthorManager },
  { path: PATH_ADMIN_CATEGORY, exact: false, component: CategoryManager },
  { path: PATH_ADMIN_USER, exact: false, component: UserManager },
  { path: PATH_ADMIN_BOOK, exact: false, component: BookManager },
  { path: PATH_ADMIN_ORDER, exact: false, component: OrderManager },
];
