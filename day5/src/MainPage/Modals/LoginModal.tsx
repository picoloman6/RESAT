import React, { useState } from 'react';

import {
  LoginModalWrapper,
  LoginModalInput,
  LoginModalButton
} from './Modal.style';

interface PropsType {
  setModal: React.Dispatch<React.SetStateAction<string>>;
}

const LoginModal: React.FC<PropsType> = ({ setModal }) => {
  const [userInfo, setUserInfo] = useState<{ id: string; password: string }>({
    id: '',
    password: ''
  });

  const [error, setError] = useState<{ id: boolean; password: boolean }>({
    id: false,
    password: false
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newObj = { ...userInfo };
    if (name === 'id') {
      newObj.id = value;
    } else if (name === 'password') {
      newObj.password = value;
    }
    setUserInfo(newObj);
  };

  const onClickButton = () => {
    const { id, password } = userInfo;
    const newObj = { ...error };
    if (id !== '123') {
      newObj.id = true;
    } else {
      newObj.id = false;
    }

    if (password !== '123') {
      newObj.password = true;
    } else {
      newObj.password = false;
    }

    if (id === '123' && password === '123') {
      newObj.id = false;
      newObj.password = false;
      setModal(() => 'none');
      alert('로그인이 완료됐습니다.');
    }

    setError(newObj);
  };

  return (
    <LoginModalWrapper>
      <h1>로그인</h1>
      <LoginModalInput $error={error.id}>
        <span>아이디</span>
        <input name='id' value={userInfo.id} onChange={onChangeInput} />
        <span>아이디를 잘못 입력하셨습니다.</span>
      </LoginModalInput>
      <LoginModalInput $error={error.password}>
        <span>비밀번호</span>
        <input
          name='password'
          type='password'
          value={userInfo.password}
          onChange={onChangeInput}
        />
        <span>패스워드를 잘못 입력하셨습니다.</span>
      </LoginModalInput>
      <LoginModalButton>
        <button onClick={onClickButton}>login</button>
      </LoginModalButton>
    </LoginModalWrapper>
  );
};

export default LoginModal;
