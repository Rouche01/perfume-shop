import styled from "styled-components";

interface FormRowProps {
  columns: 1 | 2;
  mt?: number;
}

export const PageContainer = styled.div`
  max-width: 1280px;
  margin: auto;
`;

export const PageTitle = styled.h2`
  font-size: 1.25rem;
  font-family: Jost;
  margin: 30px 0 40px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  color: #f20;
  font-size: 0.8rem;
  margin-top: 5px;
`;

export const FormRow = styled.div<FormRowProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.columns === 1 ? "1fr" : "1fr 1fr"};
  gap: 25px;
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : 0)};
`;
