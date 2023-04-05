const MetaOpengraph = ({
  type,
  title,
  description,
  image,
  url,
}: {
  type: string;
  title: string;
  description: string;
  image: string;
  url: string;
}) => {
  return (
    <>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </>
  );
};

export default MetaOpengraph;
