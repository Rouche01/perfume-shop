import styled from "styled-components";

type ButtonProps = {
  filled?: boolean;
};

export const Container = styled.div``;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  gap: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #666;
  margin: 0;
  padding: 0;
  display: inline-block;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
  color: #f20;
  background-color: #ff220032;
  padding: 2px 5px;
  font-size: 0.8rem;
  position: relative;
  &:before {
    content: "";
    display: block;
    border-right: 6px solid #ff220032;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    left: -6px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Button = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.filled ? "#ab8e66" : "#ccc")};
  outline: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease-in;
`;

export const StarIcon = styled.span.attrs({
  className: "material-icons material-icons-outlined md-20",
})`
  &:after {
    font-family: "Material Icons";
    content: "star";
  }
`;
