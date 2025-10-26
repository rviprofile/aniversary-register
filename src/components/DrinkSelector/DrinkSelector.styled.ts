import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.div`
  font-size: 30px;
  font-family: var(--font-montserrat-sans);
  font-weight: 400;
`;
export const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Drink = styled.div<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px white solid;
  cursor: pointer;
  border-radius: 30px;
  transition: all 0.2s ease;
  ${(props) =>
    props.isSelected &&
    `background-color: #21688295;
box-shadow: 1px 20px 50px 20px #063f53;
-webkit-box-shadow: 1px 20px 50px 20px #063f53;
-moz-box-shadow: 1px 20px 50px 20px #063f53;
    `}
  &:hover {
    background-color: #21688295;
  }
`;

export const ConfirmButton = styled.button`
  width: 100px;
  height: 100px;
  border-radius: 30px;
  background-color: transparent;
  cursor: pointer;
  border: 2px white dashed;
  transition: all 0.2s ease;
  opacity: 0.4;
  &:hover {
    opacity: 0.7;
  }
`;
