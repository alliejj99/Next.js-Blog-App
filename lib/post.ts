import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // ./poosts 파일 이름 추적

  const fileNames = fs.readdirSync(postsDirectory);
  // ['pre-rendering.md', ...]

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ""); // 불러올때 확장자 .md 생략

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8"); // 인코딩

    const metterResult = matter(fileContents);

    return {
      id,
      ...(metterResult.data as { date: string; title: string }),
    };
  });

  // Sort 정렬
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
      ``;
    }
  });
}
