import Account from "./components/Account/Account";
import Page_404 from "./components/Page_404/Page_404";
import AuthorManager from "./pages/Admin/AuthorManager/AuthorManager";
import BookManager from "./pages/Admin/BookManager/BookManager";
import CategoryManager from "./pages/Admin/CategoryManager/CategoryManager";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import OrderManager from "./pages/Admin/OrderManager/OrderManager";
import UserManager from "./pages/Admin/UserManager/UserManager";
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
  { path: "/admin/author", exact: false, component: AuthorManager },
  { path: "/admin/category", exact: false, component: CategoryManager },
  { path: "/admin/user", exact: false, component: UserManager },
  { path: "/admin/book", exact: false, component: BookManager },
  { path: "/admin/order", exact: false, component: OrderManager },
];
