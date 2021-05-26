import React, { useLayoutEffect } from "react";
import { Route, useLocation } from "react-router-dom";
import Navbar from "../components/AdminComponents/Navbar/Navbar";
import SideBar from "../components/AdminComponents/SideBar/SideBar";

const Layout = (props) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <SideBar />
      <div>{props.children}</div>
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
