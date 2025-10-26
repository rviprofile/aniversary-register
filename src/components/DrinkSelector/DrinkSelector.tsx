import { useEffect, useState } from "react";
import * as S from "./DrinkSelector.styled";
import Image from "next/image";
import { RegisterState, setDrinks } from "@/layouts/Register/RegisterSlices";
import { useDispatch, useSelector } from "react-redux";

export const DrinkSelector = ({
  onReturn,
  setStep,
}: {
  onReturn: () => void;
  setStep: (value: string[]) => void;
}) => {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const options = ["wine", "wine-red", "beer", "whiskey", "cocktail"];
  const drinks = useSelector((state: RegisterState) => state.drinks);
  const [selected, setSelected] = useState<string[]>(drinks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDrinks(selected));
  }, [selected]);
  return (
    <S.Container
      className={
        confirmed ? "slide-out-blurred-right" : "slide-in-blurred-left"
      }
    >
      <S.Title>Что будешь пить?</S.Title>
      <S.Row>
        <S.ConfirmButton
          onClick={() => {
            onReturn();
            setConfirmed(true);
          }}
        >
          <Image src={"/img/back.svg"} width={40} height={40} alt="back" />
        </S.ConfirmButton>
        {options.map((option) => {
          return (
            <S.Drink
              isSelected={selected.includes(option)}
              key={option}
              onClick={() =>
                setSelected((prev) =>
                  prev.includes(option)
                    ? prev.filter((item) => item !== option)
                    : [...prev, option]
                )
              }
            >
              <img
                src={`/img/${option}.png`}
                width={0} // задаём ширину
                height={60} // высоту не фиксируем
                style={{ width: "auto", objectFit: "cover" }} // сохраняем пропорции
                alt={option}
              />
            </S.Drink>
          );
        })}
        <S.ConfirmButton
          onClick={() => {
            setStep(selected);
            setConfirmed(true);
          }}
        >
          <Image src={"/img/check.svg"} width={40} height={40} alt="confirm" />
        </S.ConfirmButton>
      </S.Row>
    </S.Container>
  );
};
