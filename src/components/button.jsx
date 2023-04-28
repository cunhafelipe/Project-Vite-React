import styled from "styled-components";

const ButtonComponent = styled.button`
  margin-top: 4rem;
  color: #fff;
  font-size: 1.18rem;
  font-weight: bold;
  background: blueviolet;
  border: none;
  border-radius: 5px;
  padding: 0.93rem 4rem;

  &:hover {
    cursor: pointer;
    background: none;
    color: blueviolet;
    transition: 1s;
    border: 1px solid blueviolet;
  }
`;

export default ButtonComponent;
