import { BuilderComponent, builder } from "@builder.io/react";
import css from "styled-jsx/css";

// Replace with your Public API Key.
const BUILDER_API_KEY = process.env.BUILDER_PUBLIC_KEY;
builder.init(BUILDER_API_KEY);

export const getStaticProps = async ({ params }) => {
  const urlPath = "/" + (params?.page?.join("/") || "");

  const hero = await builder.get("hero").toPromise();

  return {
    props: { hero: hero || null },
  };
};

export default function Hero({ hero }) {
  return (
    <>
      <div>Hero component:</div>
      {/* Put your header here. */}
      <BuilderComponent model="hero" content={hero} />
      {/* Put the rest of your page here. */}
      <div>Finish here</div>
    </>
  );
}
