export const handleRoute = (pathname) => {
  switch (pathname) {
    case "/admin/dashboard":
      return "1";
    case "/admin/author":
      return "2";
    case "/admin/category":
      return "3";
    case "/admin/book":
      return "4";
    case "/admin/user":
      return "5";
    case "/admin/order":
      return "6";
  }
};
