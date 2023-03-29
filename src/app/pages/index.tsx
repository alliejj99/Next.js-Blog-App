import homeStyles from "../page.module.css";
import { getSortedPostsData } from "../../../lib/post";
import Link from "next/link";
import { useEffect, useState } from "react";

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// };

const MainPage = () => {
  const allPostsData = getSortedPostsData();

  return (
    <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
      <h2 className={`${homeStyles.headingLg} ${homeStyles.textBold}`}>Blog</h2>
      <ul className={homeStyles.list}>
        {allPostsData.map(({ id, title, date }) => (
          <li className={homeStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={homeStyles.lightText}>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPage;
