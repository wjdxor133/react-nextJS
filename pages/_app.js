import React from "react";
import PropTypes from "prop-types";
import Head from "next/head"; // next.js에서는 html <head> 태그의 정보를 수정하고 싶을 때를 대비해서 head라는 컴포넌트를 제공한다.
import "antd/dist/antd.css";

import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};
// <Component />처럼 JSX로 쓸 수 있는 것들을 elementType이라고 한다.
NodeBird.propTypes = {
  Component: PropTypes.elementType.isReauired,
};

export default wrapper.withRedux(NodeBird);
