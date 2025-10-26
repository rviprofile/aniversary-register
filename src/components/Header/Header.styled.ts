import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
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
  width: 100vw;
  height: fit-content;
  margin-top: 25vh;
  font-family: var(--font-montserrat-sans);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-weight: 300;
    font-size: 40px;
    opacity: 0.8;
  }
  h1 {
    font-weight: 100;
    font-size: 120px;
  }
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
`;
