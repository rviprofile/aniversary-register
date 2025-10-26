import { Step } from "@/app/page";
import * as S from "./Button.styled";

export const StartButton = ({ setStep }: { setStep: () => void }) => {
  return (
    <S.Container>
      <S.Button onClick={() => setStep()}>Я ПРИДУ</S.Button>
    </S.Container>
  );
};
