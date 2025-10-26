import React from "react";
import * as S from "./LinkCapsule.styled";

export const LinkCapsule = ({
  url,
  children,
}: {
  url: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}) => {
  return (
    <S.Capsule href={url} target="_blank">
      {children}
    </S.Capsule>
  );
};
