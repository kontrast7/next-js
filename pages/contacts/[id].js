import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
    // достаём и контекста id контакта и делаем запрос на него
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
      /* пихаем запрос в props.contacT */
    props: { contact: data },
  };
};

const Contact = ({ contact }) => {
  return (
    <div>
      <Head>
        <title>Contact:</title>
      </Head>
      {/* просто отображаем информацию */}
      <ContactInfo contact={contact} />
    </div>
  );
};

export default Contact;
