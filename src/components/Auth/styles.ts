import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 650px;
  margin: 60px auto;
  border: 1px solid #dedede;
  box-sizing: border-box;
  border-radius: 2px;
  padding: 30px 50px;
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 10px #ddd;
  }
`;

export const AuthTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 500;
  color: #222;
`;

export const AuthSubtitle = styled.h6`
  margin: 0;
  padding: 0;
  color: #aaa;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;

export const AuthLink = styled.a`
  color: #ab8e66;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const ResetLink = styled.span`
  display: inline-block;
  text-align: left;
  font-size: 0.875rem;
  width: 100%;
  margin: 25px 0 10px;
  font-weight: 500;
  color: #222;
`;

export const FormRow = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const AuthForm = styled.div`
  width: 100%;
  margin-top: 35px;
`;

export const SocialAuth = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  gap: 20px;
`;
