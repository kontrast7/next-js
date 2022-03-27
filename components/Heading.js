const Headind = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Headind;
