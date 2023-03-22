#### Next.js Blog App
  Next.JS로 만들어 보는 블로그 앱입니다.  

- **설치 방법**
```bash
npx create-next-app@latest
yarn create next-app

npx create-next-app@latest --typescript
yarn create next-app --typescript
```

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
