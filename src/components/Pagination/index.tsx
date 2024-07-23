import React, { FC } from "react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import Dropdown from "@/components/Dropdown";
import { NavButton, PaginationConatiner, InputText, PageInput } from "./styles";

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
