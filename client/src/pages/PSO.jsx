import React from "react";
import PSOForm from "../components/PSOForm";
import PSOResult from "../components/PSOResult";
import Layout from "../layout/Layout";

const PSO = () => {
  return (
    <Layout>
      <div>Shortest Path Finder</div>
      <div>
        <PSOForm />
        <PSOResult />
      </div>
    </Layout>
  );
};

export default PSO;
