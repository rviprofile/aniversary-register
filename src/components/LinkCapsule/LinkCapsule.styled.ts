import styled from "@emotion/styled";
import Link from "next/link";

export const Capsule = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: 70px;
  border-radius: 40px;
  border: 2px white dashed;
  background: transparent;
  font-size: 20px;
  font-family: var(--font-montserrat-sans);
  font-weight: 400;
  padding-left: 30px;
  padding-right: 30px;
  text-wrap: nowrap;
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;
