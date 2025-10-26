import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    cursor: pointer;
    right: 22px;
    top: 14px;
    transition: all 0.2s ease;
    opacity: 0.4;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Input = styled.input`
  width: 25vw;
  height: 70px;
  border-radius: 40px;
  border: 2px white solid;
  background: transparent;
  font-size: 30px;
  font-family: var(--font-montserrat-sans);
  font-weight: 400;
  transition: all 0.2s ease-in-out;
  padding-left: 30px;
  position: relative;
  &::placeholder {
    color: white;
    opacity: 0.5;
  }
`;
