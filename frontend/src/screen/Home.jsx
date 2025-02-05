import React from "react";
import Layout from "../layout/Layout";
import Banner from "../components/Home/Banner";
import Brand from "../components/Home/Brand";
import BannerProduct from "../components/Home/BannerProduct";

const Home = () => {
  return (
 
    <Layout>
      <Banner />
      <Brand />
      <BannerProduct />
    </Layout>
  );
};

export default Home;
