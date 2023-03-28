import Image from "next/image";
import { Inter } from "next/font/google";
import homeStyles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <section className={homeStyles.headingMd}>
        <p>[Anne&apos;s Blog Introduction]</p>
        <p>(This is a WebSite)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={`${homeStyles.headingLg} ${homeStyles.textBold}`}>
          Blog
        </h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
}
