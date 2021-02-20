import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// 보통 링크와 관련되서 리액트 라우트를 보통 많이 쓰느데, next.js에서는 자체적인 라우터가 존재한다.
import Link from "next/Link";
import { Menu, Input, Row, Col } from "antd";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {/* 주의할 점은 a태그에 href를 사용하는 것이 아니라, Link 컴포넌트에서
        사용하는 것만 주의 */}
      {/* 개발 모드 일 경우, link 이벤트의 속도가 느리지만, 배포 된 이후에는 빠르니 상관 안써도 됨 */}
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://github.com/ZeroCho/react-nodebird"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </>
  );
};

AppLayout.propTypes = {
  // return 안에 들어가는 즉, 화면을 그릴 수 있는 모든 것들의 타입은 node이다.
  children: PropTypes.node.isRequired,
};

export default AppLayout;
