import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your Public API Key.
builder.init(process.env.BUILDER_PUBLIC_KEY);

export const getStaticProps = async () => {
  const content = await builder.get("404").promise();

  return {
    props: { content: content || null },
  };
};

export default function Footer({ content }) {
  return (
    <>
      <div>404 component:</div>
      {/* Put your footer here. */}
      <BuilderComponent model="404" content={content} />
      {/* Put the rest of your page here. */}
    </>
  );
}
