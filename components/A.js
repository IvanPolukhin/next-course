import Link from "next/link";
import styles from "../styles/links.module.css";

export default function ({ text, href }) {
  return (
    <Link href={href} className={styles.link}>
      {text}
    </Link>
  );
}
