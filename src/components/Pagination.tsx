import React, { FC } from "react";
import styled from "styled-components";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import Dropdown from "./Dropdown";

interface NavButtonProps {
  component: any;
  active?: boolean;
}

const PaginationConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0 70px;
`;

const NavButton = styled(({ component, ...props }: NavButtonProps) =>
  React.cloneElement(component, props)
)`
  background-color: ${(props) => (props.active ? "#ab8e66" : "#F3F3F3")};
  border: 1px solid #f1f1f1;
  color: ${(props) => (props.active ? "#fff" : "rgba(136, 136, 136, 0.4)")};
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  padding: 2px 15px;
`;

const PageInput = styled.div`
  display: flex;
  align-items: center;
`;

const InputText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 0;
  font-size: 0.9rem;
  font-weight: 500;
  color: #888;
  margin: 0 10px;
`;

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: string) => void;
}

const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <PaginationConatiner>
      <NavButton
        component={
          <button>
            <BiCaretLeft size={20} />
          </button>
        }
      />
      <PageInput>
        <InputText>Page: </InputText>
        <Dropdown
          inputValue={currentPage.toString()}
          inputOptions={["1", "2", "3", "4", "5"]}
          inputWidth={70}
          setInputValue={setCurrentPage}
        />
        <InputText>of 6</InputText>
      </PageInput>
      <NavButton
        component={
          <button>
            <BiCaretRight size={18} />
          </button>
        }
        active
      />
    </PaginationConatiner>
  );
};

export default Pagination;
