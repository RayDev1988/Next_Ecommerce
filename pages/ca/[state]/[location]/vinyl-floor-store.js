import Link from "next/link";
import React from "react";
import Layout from "../../../../components/layout/Layout";
import ProductTemplate from "../../../../components/productTemplate";

const VinylStore = () => {
  return (
    <Layout category={"vinyl-floor-store"}>
      <ProductTemplate category={"Vinyl Floor Store"}/>
    </Layout>
  );
};
export default VinylStore;
