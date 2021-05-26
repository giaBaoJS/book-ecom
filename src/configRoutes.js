import { routes, adminRoutes } from "./routes";
import Template from "./template/Template";
import TemplateAdmin from "./template/TemplateAdmin";
export const template = () => {
  if (routes && routes.length) {
    return routes.map((item, index) => {
      return (
        <Template
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

export const adminTemplate = () => {
  if (adminRoutes && adminRoutes.length) {
    return adminRoutes.map((item, index) => {
      return (
        <TemplateAdmin
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};
