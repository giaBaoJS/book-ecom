import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};
export default function Template({ Component, ...props }) {
  return (
    <>
      <Route
        {...props}
        render={(propsCompnent) => (
          <Layout>
            <Component propsCompnent={{ ...propsCompnent }} />
          </Layout>
        )}
      />
    </>
  );
}
