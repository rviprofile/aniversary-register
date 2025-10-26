import * as S from "./TextArea.styled";
import Image from "next/image";
import { useState } from "react";

export const TextArea = ({
  setStep,
  placeholder,
  name,
}: {
  setStep: (value: string) => void;
  placeholder: string;
  name: string;
}) => {
  const [value, setValue] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  return (
    <S.Container>
      <div
        style={{ position: "absolute" }}
        className={
          confirmed ? "slide-out-blurred-right" : "slide-in-blurred-left"
        }
      >
        <S.TextArea
          autoFocus
          name={name}
          draggable={false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
        ></S.TextArea>
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
