import React from "react";
import DashboardBody from "../../components/DashboardBody";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      {/* Start Header */}
      <Header />
      {/* End Header */}
      {/* Start Body */}
      <DashboardBody />
      {/* End Body */}
      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </>
  );
};

export default Dashboard;
