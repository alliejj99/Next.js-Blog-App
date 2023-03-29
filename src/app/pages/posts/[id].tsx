import React from "react";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  getAllPostIds,
  getPostData,
  getSortedPostsData,
} from "../../../../lib/post";
import homeStyles from "../../page.module.css";

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) => {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1 className={homeStyles.headingXl}>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  // [{params: {id: 'pre-rendering}, {...}}]
  return {
    paths,
    fallback: false, // 리턴되지 않는것은 모두 404페이지로 로드
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string); // {id: 'pre-rendering}

  return {
    props: {
      postData,
    },
  };
};
