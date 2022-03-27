import Headind from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Posts List:</title>
      </Head>
      <Headind tag={"h2"} text={"Contacts list:"} />
      <ul>
        {posts &&
          posts.map(({ title, id }) => {
            return (
              <li key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Posts;
