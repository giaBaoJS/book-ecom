import Layout, { Content } from "antd/lib/layout/layout";
import axios from "axios";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";
import ModalForm from "../components/AdminComponents/HOC/ModalForm";
import Navbar from "../components/AdminComponents/Navbar/Navbar";
import SideBar from "../components/AdminComponents/SideBar/SideBar";
const Themplate = (props) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const { Component: ChildModal } = useSelector(
    (state) => state.modalFormReducer
  );
  const Modal = ModalForm(ChildModal);
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
      <Modal title="ok" />
    </>
  );
};
export default function TemplateAdmin({ Component, ...props }) {
  React.useEffect(() => {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " +
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYm9vay5hZG1pbiIsImp0aSI6IjJlZGVlMzEyLTlkM2MtNGY1ZS1hN2JlLTQ2NWQ1NGIzOGI0MCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiZXhwIjoxNjIzMDQzNDU4LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM2MSIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzYxIn0.cvbaP7AgxE3CWQE_fE1QTFpNNtUIL_cC4RlkVYYnvKU";
  }, []);
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
