import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  width: 25vw;
  height: 70px;
  border-radius: 40px;
  border: 2px white solid;
  background: transparent;
  font-size: 30px;
  font-family: var(--font-montserrat-sans);
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: white;
    color: black;
  }
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;
