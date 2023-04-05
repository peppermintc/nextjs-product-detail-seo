const MetaTwitter = ({
  card,
  title,
  description,
  image,
}: {
  card: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <>
      <meta name="twitter:card" content={card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default MetaTwitter;
