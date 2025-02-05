import React from "react";
import Layout from "../../layout/Layout";
import BannerNike from "../../components/Home/page/BannerNike";
import Product from "../../components/Home/page/Product";

const HomeNike = () => {
  return (
    <Layout>
      <BannerNike />
      <Product />
    </Layout>
  );
};

export default HomeNike;
