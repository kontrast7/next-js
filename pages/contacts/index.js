import Headind from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

// Запрос на всех пользователей
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    //Ответ попадает в props.contacts
    props: { contacts: data },
  };
};

const Contacts = ({ contacts }) => {
  return (
    <div>
      <Head>
        <title>Contacts</title>
      </Head>
      <Headind tag={"h2"} text={"Contacts list:"} />
      <ul>
        {contacts &&
          contacts.map(({ username, id }) => {
            return (
              <li key={id}>
                {/* map ответ от сервера в Link. Генерируются страницы [id] */}
                <Link href={`/contacts/${id}`}>{username}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Contacts;
