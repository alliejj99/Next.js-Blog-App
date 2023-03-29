#### Next.js Blog App
  Next.JS로 만들어 보는 블로그 앱입니다.  

- [TypeScript](https://languid-argon-8f2.notion.site/TypeScript-7977c52d051043c5b3b6d47a1724f86c)

- **설치 방법**
```bash
npx create-next-app@latest
yarn create next-app

npx create-next-app@latest --typescript
yarn create next-app --typescript
```
___

- **기본 파일 구조**  
    
  ![image](https://user-images.githubusercontent.com/118407356/226940104-6cb7e814-4e4e-4ce1-b631-0f3ca74cb2ba.png)


  **pages 폴더**
  - 이 폴더 안에 페이지들을 생성 합니다.  

  - inxex.tsx가 처음 “/”페이지로 설정됩니다.  

  - _app.tsx는 공통되는 레이아웃을 작성합니다. 모든 파에지에 공통으로 들어가는 것을 넣을때 사용하면 됩니다. (url을 통해 특정 페이지에 진입하기 전 통과하는 인터셉터 페이지 입니다.)  

  - 만약 about이라는 페이지를 만들려면 pages 폴더 안에 about.tsx를 생성해 주세요.  

  **public 폴더**
  - 이미지와 같은 정적(static) 에셋들을 보관합니다.  

  **styles 폴더**

  - 스타일링을 처리하는 폴더입니다.  

  - 모듈 css는 컴포넌트 종속적으로 스타일링하기 위한 것이며, 확장자 옆에 module을 붙여줘야 합니다.  

  **next.config.js**

  - Next JS는 웹팩을 기본 번들러로 사용합니다. 그래서 웹팩에 관한 설정들을 이 파일에서 처합니다.

___

- **Pre-Rendering**

  Next.JS는 모든 페이지를 pre-render합니다. 이 pre-render한다는 의미는 모든 페이지를 위한 HTML을 Client 사이드에서 자바스크립트로 처리하기 전, “사전에” 생성한다는 것입니다. 이렇게 하기 때문에 SEO 검색엔진 최적화가 좋아집니다.

  <img width="527" alt="image" src="https://user-images.githubusercontent.com/118407356/226950984-3e92cbda-8d9a-49f4-96b5-a68f88fb3d7a.png">

___

- **Data Fetching**

  Next.JS에서 데이터를 가져오는 방법은 여러가지가 있습니다. 그래서 애플리케이션의 사용 용도에 따라서 다른 방법을 사용해주면 됩니다.

  보통 리액트에서는 데이터를 가져올 때 useEffect Hooks안에서 가져옵니다. 하지만 Next.JS에서는 다른 방법을 통해 가져오는 방식들이 있습니다.  
  
  getStaticProps - Static Generation으로 빌드(build)할 때 데이터를 불러옵니다.( 미리 만들어줌 )  
  getStaticPaths - Static Generation으로 데이터에 기반하여 pre-render시 특정한 라우팅을 구현합니다. (pages/post/[id].js)  
  getServerSidePages - Server Side Rendering으로 요청이 있을 때 데이터를 불러옵니다.   

- **getStaticProps 사용해야 할 때**
  - 페이지를 렌더링하는 데 필요한 데이터를 사용자의 요청보다 먼저 build 시간에 필요한 데이터를 가져올때.
  - 데이터는 Headiress CMS에서 데이터를 가져올 때.
  - 데이터를 공개적으로 캐시할 수 있을때
  - 페이지는 미리 렌더링 되어야하고 매우 빨라야 할때

- **getStaticPaths 사용 해야 할 때**
  - 동적 라우팅이 필요할 때 getStaticPaths로 경로 리스트를 정의하고, HTML에 Build 시간에 렌더 됩니다.
  - Next.JS는 pre-render에서 정적으로 getStaticPaths에서 호출하는 경로들을 가져옵니다.

- **getServerSidePages 사용해야 할 때**

  - 요청할 때 데이터를가져와야 하는페이지를 미리 렌더해야 할 때 사용합니다. 서버가 모든 요청에 대한 결과를 계산하고, 추가 구성없이 CND에 의해 결과를 캐시할 수 없기 때문에 첫 번째 바이트까지의 시간은 getStaticProps보다 느립니다.

---
- **Type Assertion**
  TypeScript에서는 시스템이 추론 및 분석한 타입 내용을 우리가 원하는 대로 얼마든지 바꿀 수 있습니다 이때 “타입표명(Type Assertion)”이라 불리는 메커니즘이 사용됩니다. TypeScript의 타입표명은 프로그래머가 컴파일러에게 내가 너보다 타입에 더 잘 알고 있고, 나의 주장에 대해 의심하지 말라는 의미입니다.

  Type Assertion을 사용하면 값의 type을 설정하고 컴파일러에 이를 유추하지 않도록 지시할 수 있습니다. 이것은 프로그래머로서 TypeScript가 자체적으로 추론할 수 있는 것보다 변수 유형에 대해 더 잘 이해하고 있을 때입니다.

  ```tsx
  // lib/post.ts
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
        ...allPostsData(metterResult.data as { date: string; title: string }),
      };
    });

    // Sort 정렬
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  ```

  <aside>
  💡 **as Foo, <Foo>**
  타입표명은 위의 두가지 방식으로 표현할 수 있습니다. 하지만 리액트를 사용할 때는<Foo>키워드가 JSX의 문법과 겹치기 때문에 as Foo를 공통적으로 사용하는 것을 추천합니다.

  </aside>