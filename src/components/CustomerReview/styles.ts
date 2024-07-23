import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 28px;
`;

export const UserAvatar = styled.div.attrs({
  className: "material-icons material-icons-outlined md-54",
})`
  background-color: #e6e6e6;
  border-radius: 999px;
  color: #8c8c8c;
`;

export const ReviewInfo = styled.div`
  margin-left: 30px;
  width: 100%;
`;

export const ReviewMeta = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  margin-bottom: 7px;
`;

export const UserNamePlusReviewDate = styled.p`
  font-size: 1.06rem;
  color: #666;
  padding: 0;
  margin: 0;
`;

export const ReviewText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.1rem;
  color: #666;
  padding: 0 0 20px;
`;
