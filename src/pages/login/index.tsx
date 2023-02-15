import { useState } from 'react';

import DevCycleLogo from '../../assets/images/dev-cycle-logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import VSpace from '../../components/VSpace';
import {
  ContentLayout,
  DevCycleLogoImage,
  ErrorMessageBox,
  LoginForm,
  LoginPageLayout,
  SignUpButton,
} from './styled';

export default function LoginPage() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const login = async ({ email, password }: { email: string; password: string }) => {
    // TODO: 로그인 API 호출
    console.log('login', email, password);
    setErrorMessage('이메일 또는 비밀번호가 일치하지 않습니다.');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.elements.namedItem('email') as HTMLInputElement;
    const password = form.elements.namedItem('password') as HTMLInputElement;

    login({ email: email.value, password: password.value });
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('sign up');
  };

  return (
    <LoginPageLayout>
      <ContentLayout>
        <DevCycleLogoImage src={DevCycleLogo} alt="dev-cycle-logo" />
        <VSpace size={32} />
        <LoginForm onSubmit={handleSubmit}>
          <Input type="email" id="email" placeholder="이메일" />
          <VSpace size={8} />
          <Input type="password" id="password" placeholder="비밀번호" />
          <ErrorMessageBox>{errorMessage}</ErrorMessageBox>
          <VSpace size={8} />
          <Button type="submit">로그인</Button>
          <VSpace size={32} />
          <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
        </LoginForm>
      </ContentLayout>
    </LoginPageLayout>
  );
}
