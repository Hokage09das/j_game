import React from "react";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

export const MainPage = ({ children }) => {
  return (
    <div>
      <Header />
      <Layout>{children}</Layout>
    </div>
  );
};
