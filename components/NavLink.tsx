import Link from "next/link";

import styles from "../styles/Nav.module.css";

export default function NavLink({ children, route, currentRoute }) {
  return (
    <Link href={route}>
      <a className={currentRoute === route ? styles.active : null}>
        {children}
      </a>
    </Link>
  );
}