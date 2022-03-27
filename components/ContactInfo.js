import Headind from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, address } = contact || {};
  const { street, suite, city, zipcode } = address || {};
  if (!contact) {
    return <Headind text={"Empty"} tag={"h1"} />;
  }

  return (
    <>
      <Headind tag={"h1"} text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>

      <div>
        <strong>Address: </strong>
        {`${street}, ${suite}, ${city}, ${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
