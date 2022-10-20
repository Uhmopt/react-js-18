import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
