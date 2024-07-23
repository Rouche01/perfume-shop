import React from "react";
import styled from "styled-components";

interface NavButtonProps {
  component: any;
  active?: boolean;
}

export const PaginationConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 70px;
`;

export const NavButton = styled(({ component, ...props }: NavButtonProps) =>
  React.cloneElement(component, props)
)`
  background-color: ${(props) => (props.active ? "#ab8e66" : "#F3F3F3")};
  border: 1px solid #f1f1f1;
  color: ${(props) => (props.active ? "#fff" : "rgba(136, 136, 136, 0.4)")};
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  padding: 2px 15px;
`;

export const PageInput = styled.div`
  display: flex;
  align-items: center;
`;

export const InputText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  margin: 0 10px;
`;
