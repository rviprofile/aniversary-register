import { RegisterState, setName } from "@/layouts/Register/RegisterSlices";
import * as S from "./TextInput.styled";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const TextInput = ({
  setStep,
  placeholder,
  name,
}: {
  setStep: (value: string) => void;
  placeholder: string;
  name: string;
}) => {
  const value = useSelector((state: RegisterState) => state.name);
  const dispatch = useDispatch();
  const [confirmed, setConfirmed] = useState<boolean>(false);
  return (
    <S.Container>
      <div
        style={{ position: "absolute" }}
        className={
          confirmed ? "slide-out-blurred-right" : "slide-in-blurred-left"
        }
      >
        <S.Input
          autoFocus
          name={name}
          value={value}
          onChange={(e) => dispatch(setName(e.target.value))}
          placeholder={placeholder}
          maxLength={15}
          minLength={2}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              setStep(value);
              setConfirmed(true);
            }
          }}
        ></S.Input>
        {value.length > 1 && (
          <Image
            src={"/img/check.svg"}
            width={40}
            height={40}
            alt="confirm"
            onClick={() => {
              setStep(value);
              setConfirmed(true);
            }}
          />
        )}
      </div>
    </S.Container>
  );
};
