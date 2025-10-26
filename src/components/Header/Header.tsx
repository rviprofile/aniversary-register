"use client";
import { useState } from "react";
import * as S from "./Header.styled";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <h1>
        АЛЁНЕ <strong>30</strong>
      </h1>
    </S.HeaderContainer>
  );
};
