import { BuilderComponent, builder } from "@builder.io/react";

// Replace with your Public API Key.
builder.init(process.env.BUILDER_PUBLIC_KEY);

export const getStaticProps = async () => {
  const footer = await builder.get("footer").promise();

  return {
    props: { footer: footer },
  };
};

export default function Footer({ footer }) {
  return (
    <>
      <div>Footer component:</div>
      {/* Put your footer here. */}
      <BuilderComponent model="footer" content={footer} />
      {/* Put the rest of your page here. */}
    </>
  );
}
