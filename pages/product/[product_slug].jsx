import { builder, BuilderComponent } from "@builder.io/react";
import React from "react";
import DefaultErrorPage from "next/error";

import products from "../../utils/products.json" assert { type: "json" };

// Replace with your Public API Key.
const BUILDER_API_KEY = process.env.BUILDER_PUBLIC_KEY;
builder.init(BUILDER_API_KEY);

export const getStaticProps = async ({ params }) => {
  console.log(params);
  const header = await builder.get("header").promise();
  const content = await builder.get("product").promise();

  let product = products.items.find(
    ({ product }) => product.slug === params.product_slug
  );
  console.log(products.items.map(({ product }) => product.slug));

  return {
    props: {
      content: content || null,
      product: product || null,
      header: header || null,
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default function ProductDetail({ content, product, header }) {
  if (!product) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      {/* Put your header here. */}
      <BuilderComponent model="header" content={header} />
      <BuilderComponent model="product" content={content} data={product} />
      {/* Put the rest of your page here. */}
    </>
  );
}
