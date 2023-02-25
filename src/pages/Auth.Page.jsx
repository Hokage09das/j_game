import styled from "styled-components";
import { AuthForm } from "../components/entrance/auth-form";

export const AuthPage = () => {
  return (
    <PageContainer>
      <AuthForm />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://wallpaperaccess.com/full/625497.jpg");
`;
