import { useState } from "react";
import * as S from "./Selector.styled";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/layouts/Register/RegisterStore";

export const Selector = ({
  name,
  onReturn,
  question,
  setStep,
  onConfirm,
}: {
  name: string;
  onReturn: () => void;
  onConfirm: () => void;
  question: string;
  setStep: (value: boolean) => void;
}) => {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const selected = useSelector(
    (state: RootState) => state[name as keyof RootState]
  );
  return (
    <S.Container
      className={
        confirmed ? "slide-out-blurred-right" : "slide-in-blurred-left"
      }
    >
      <S.Title>{question}</S.Title>
      <S.Row>
        <S.ConfirmButton
          onClick={() => {
            onReturn();
            setConfirmed(true);
          }}
        >
          <Image src={"/img/back.svg"} width={40} height={40} alt="back" />
        </S.ConfirmButton>
        <S.Choice isSelected={selected === true} onClick={() => setStep(true)}>
          Да
        </S.Choice>
        <S.Choice
          isSelected={selected === false}
          onClick={() => setStep(false)}
        >
          Нет
        </S.Choice>
        <S.ConfirmButton
          onClick={() => {
            onConfirm();
            setConfirmed(true);
          }}
        >
          <Image src={"/img/check.svg"} width={40} height={40} alt="confirm" />
        </S.ConfirmButton>
      </S.Row>
    </S.Container>
  );
};
