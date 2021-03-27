import React, { useCallback } from "react";
import styled from "styled-components";
import { Form, Input, Button } from "antd";
import Link from "next/Link";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

import { loginAction } from "../reducers/user";
import { useDispatch } from "react-redux";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  // Input 컴포넌트에 props로 넘겨주는 함수는 useCallback을 꼭 쓰는게 최적화에 좋다
  // useCallback과 useMemo의 차이는??
  // useCallback은 함수를 캐싱하는 훅이고, useMemo는 값을 캐싱하는 훅이다.
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  const onsSbmitForm = useCallback(() => {
    console.log(id, password);
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  // 로그인 폼을 만들 때 라이브러리를 사용하는 것을 추천한다.
  return (
    <FormWrapper onFinish={onsSbmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-id">비밀번호</label>
        <br />
        <Input
          name="user-id"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* 인라인 스타일을 넣는 것은 너무나 안좋은 방법 */}
      {/* 인라인 스타일은 리렌더링 될 때마다  객체를 새로 생성하게 되고 리액트는 객체끼리 비교해서 회면에 반영한다.*/}
      {/* 이런 경우 인라인 스타일 부분에서 실제로 바뀐게 아무것도 없는데 리렌더링이 발생하게 됨 */}
      {/* 그 이유는 객체는 새로 생성 될 때마다 서로 다른 값으로 인식하기 때문에 */}
      {/* 그러므로 스타일 컴포넌트같은 css관련 라이브러리나 css 파일을 만들어서 스타일 적용을 해야함 */}
      {/* 만약 스타일 컴포넌트로 적용하기가 싫다면??  useMemo를 사용해라 */}
      {/* const style = useMemo(() => ({ marginTop: 10 }), []) */}
      {/* 이렇게 사용하면 컴포넌트가 리렌더링이 된다 할지라도 같은 값을 유지하기 때문에 다시 렌덜링이 되지 않을 것 이다. */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <button>회원가입</button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
