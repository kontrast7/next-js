import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/Navbar.module.css";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav>
      <div>
        <Link href="/">
          <a>
            <img
              src="/logo.jpg"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              alt="logo"
            />
          </a>
        </Link>
      </div>
      <div>
        {navigation.map((l) => {
          return (
            <Link href={l.path} key={l.id}>
              <a className={pathname === l.path ? s.active : null}>{l.title}</a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
