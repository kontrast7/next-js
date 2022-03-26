import Headind from "../components/Heading";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <Headind tag={"h2"} text={"404"} />
    </div>
  );
};

export default Error;
