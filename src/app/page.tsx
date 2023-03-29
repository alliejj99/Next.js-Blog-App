import { Inter } from "next/font/google";
import homeStyles from "./page.module.css";
import MainPage from "./pages/posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <section className={homeStyles.headingMd}>
        <p>[Anne&apos;s Blog Introduction]</p>
        <p>(This is a WebSite)</p>
      </section>
      <MainPage />
    </div>
  );
}
