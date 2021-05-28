import React from "react";
import ListDataInfo from "../../../components/AdminComponents/ListDataInfo/ListDataInfo";
import MultiChart from "../../../components/AdminComponents/MultiChart/MultiChart";
import TableDashboard from "../../../components/AdminComponents/TableDashboard/TableDashboard";

const Dashboard = () => {
  return (
    <>
      <ListDataInfo />
      <br />
      <MultiChart />
      <br />
      <TableDashboard />
    </>
  );
};

export default Dashboard;
