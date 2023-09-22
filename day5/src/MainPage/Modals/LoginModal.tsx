import {
  LoginModalWrapper,
  LoginModalInput,
  LoginModalButton
} from './Modal.style';

const LoginModal = () => {
  return (
    <LoginModalWrapper>
      <h1>로그인</h1>
      <LoginModalInput>
        <span>아이디</span>
        <input />
      </LoginModalInput>
      <LoginModalInput>
        <span>비밀번호</span>
        <input type='password' />
      </LoginModalInput>
      <LoginModalButton>
        <button>login</button>
      </LoginModalButton>
    </LoginModalWrapper>
  );
};

export default LoginModal;
