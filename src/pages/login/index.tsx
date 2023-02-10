import styled from 'styled-components';

import DevCycleLogo from '../../assets/images/dev-cycle-logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import VSpace from '../../components/VSpace';

export default function LoginPage() {
  const login = async ({ email, password }: { email: string; password: string }) => {
    // TODO: 로그인 API 호출
    console.log('login', email, password);
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
          <VSpace size={32} />
          <Button type="submit">로그인</Button>
          <VSpace size={32} />
          <SignUpButton onClick={handleSignUp}>회원가입</SignUpButton>
        </LoginForm>
      </ContentLayout>
    </LoginPageLayout>
  );
}

const DevCycleLogoImage = styled.img`
  height: 24px;
`;

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const ContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 320px;
  min-width: 200px;
  width: 30%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SignUpButton = styled(Button)`
  background-color: #fff0;
  color: ${({ theme }) => theme.colors.gray2};

  width: fit-content;

  &:hover {
    background-color: #fff1;
    color: ${({ theme }) => theme.colors.gray3};
  }
`;
