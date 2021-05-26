import React, { useLayoutEffect } from "react";
import { Route, useLocation } from "react-router-dom";

const Layout = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      Header
      <div>{props.children}</div>
      Footer
    </>
  );
};
export default function TemplateAdmin({ Component, ...props }) {
  return (
    <>
      <Layout>
        <Route
          {...props}
          render={(propsCompnent) => (
            <Component propsCompnent={{ ...propsCompnent }} />
          )}
        />
      </Layout>
    </>
  );
}
