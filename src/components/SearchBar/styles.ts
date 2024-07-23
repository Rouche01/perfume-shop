import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 250px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 11px 20px;
  font-size: 1rem;
  border: 1px solid #dedede;
  color: #888;
  border-radius: 100px;
  &:focus {
    outline: none;
  }
`;

export const SearchBtn = styled.div`
  position: absolute;
  right: 0;
  top: 20%;
  /* height: 100%; */
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  cursor: pointer;
`;
