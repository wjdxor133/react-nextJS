// import React from 'react'; -> next.js에서는 이 구문이 없어도 상관없다.
// next.js는 무조건 pages 폴더 안에 있는 컴포넌트를 인식해서 화면을 나눈다.
import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <AppLayout>
      <div>Heollo, Next!</div>
    </AppLayout>
  );
};

export default Home;
