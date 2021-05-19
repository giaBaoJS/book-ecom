import React from "react";
import { Route } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <div>
        {props.children}
      </div>
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
