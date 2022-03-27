import Headind from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};
 
  if (!post) {
    return <Headind text={"Empty"} tag={"h1"} />;
  }

  return (
    <>
      <Headind tag={"h1"} text={title} />
      <div>
        <strong>Body: </strong>
        {body}
      </div>

     
    </>
  );
};

export default PostInfo;
