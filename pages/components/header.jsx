import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your Public API Key.
const BUILDER_API_KEY = process.env.BUILDER_PUBLIC_KEY;
builder.init(BUILDER_API_KEY);

export const getStaticProps = async () => {
  // Get the JSON content customized in the visual tool (buidler.io).
  // You can query depending on the request, for targeting to 1 header or other.
  const header = await builder.get("header").promise();

  return {
    props: { header: header },
  };
};

export default function Header({ header }) {
  return (
    <>
      {/* Here is the header component that take the JSON content from builder.io and render it as a React. */}
      <BuilderComponent model="header" content={header} />
    </>
  );
}
