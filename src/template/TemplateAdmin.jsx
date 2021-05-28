import Layout, { Content } from "antd/lib/layout/layout";
import React, { useLayoutEffect, useState } from "react";
import { Route, useLocation } from "react-router-dom";
import Navbar from "../components/AdminComponents/Navbar/Navbar";
import SideBar from "../components/AdminComponents/SideBar/SideBar";
const Themplate = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Layout className="flex-row ">
        <SideBar isOpen={isOpen} />
        <Layout className="site-layout h-screen overflow-y-scroll">
          <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
          <Content style={{ height: "90%" }}>
            <Layout
              style={{
                padding: 24,
              }}
            >
              {props.children}
            </Layout>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default function TemplateAdmin({ Component, ...props }) {
  return (
    <>
      <Themplate>
        <Route
          {...props}
          render={(propsCompnent) => (
            <Component propsCompnent={{ ...propsCompnent }} />
          )}
        />
      </Themplate>
    </>
  );
}
