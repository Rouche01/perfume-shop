import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  text-align: center;
  padding: 30px 0 10px;
`;

export const ErrorMessage = styled.p`
  font-size: 1.1rem;
  color: #666;
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const ErrorIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-70",
})`
  color: #bbbbbb9d;
`;
