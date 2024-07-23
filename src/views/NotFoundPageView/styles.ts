import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  max-width: 900px;
  margin: 0 auto;
`;

export const NotFoundImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ErrorInfo = styled.div`
  margin-left: 30px;
`;

export const ErrorTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 0.94rem;
  color: #888;
`;
