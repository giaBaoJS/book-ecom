import {
  PATH_ADMIN_AUTHOR,
  PATH_ADMIN_BOOK,
  PATH_ADMIN_CATEGORY,
  PATH_ADMIN_DASHBOARD,
  PATH_ADMIN_ORDER,
  PATH_ADMIN_USER,
} from "../constants/routes";

export const handleRoute = (pathname) => {
  switch (pathname) {
    case PATH_ADMIN_DASHBOARD:
      return "1";
    case PATH_ADMIN_AUTHOR:
      return "2";
    case PATH_ADMIN_CATEGORY:
      return "3";
    case PATH_ADMIN_BOOK:
      return "4";
    case PATH_ADMIN_USER:
      return "5";
    case PATH_ADMIN_ORDER:
      return "6";
  }
};

export const convertToFormData = (payload) => {
  const dataForm = new FormData();
  for (let key in payload) {
    dataForm.append(key, payload[key]);
  }
  return dataForm;
};
