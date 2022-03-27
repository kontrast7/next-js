import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  
  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  
  return {
    paths,
    fallback: false
  }
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

const Post = ({ post }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <PostInfo post={post} />
    </div>
  );
};

export default Post;
