"use client";

import { Header } from "@/components/Header/Header";
import styles from "./page.module.css";
import { StartButton } from "@/components/Button/Button";
import { TextInput } from "@/components/TextInput/TextInput";
import { useState } from "react";
import { DrinkSelector } from "@/components/DrinkSelector/DrinkSelector";
import { TextArea } from "@/components/TextArea/TextArea";
import { Selector } from "@/components/Selector/Selector";
import { EventGuide } from "@/components/EventGuide/EventGuide";
import { useDispatch } from "react-redux";
import {
  setDrinks,
  setKaraoke,
  setName,
} from "@/layouts/Register/RegisterSlices";

export type Step =
  | "start"
  | "name"
  | "accompaniment"
  | "drinks"
  | "karaoke"
  | "comment"
  | "songs"
  | "guide";

export default function Home() {
  const [step, setStep] = useState<Step>("start");
  const dispatch = useDispatch();
  const generateStep = (step: Step) => {
    switch (step) {
      case "start":
        return <StartButton setStep={() => setStep("name")} />;
      case "name":
        return (
          <TextInput
            key={step}
            name={step}
            placeholder={"Имя"}
            setStep={(value: string) => {
              dispatch(setName(value));
              setTimeout(() => setStep("drinks"), 400);
            }}
          />
        );
      case "drinks":
        return (
          <DrinkSelector
            onReturn={() => setTimeout(() => setStep("name"), 400)}
            setStep={(value: string[]) => {
              dispatch(setDrinks(value));
              setTimeout(() => setStep("karaoke"), 400);
            }}
          />
        );
      case "karaoke":
        return (
          <Selector
            name="karaoke"
            onReturn={() => setTimeout(() => setStep("drinks"), 400)}
            onConfirm={() => setTimeout(() => setStep("guide"), 200)}
            question="Будешь петь в караоке?"
            setStep={(value: boolean) => {
              dispatch(setKaraoke(value));
            }}
          />
        );
      case "accompaniment":
        return (
          <TextInput
            key={step}
            name={step}
            placeholder={"С кем будешь"}
            setStep={(value: string) => {
              setTimeout(() => setStep("drinks"), 200);
            }}
          />
        );
      case "comment":
        return (
          <TextArea
            name={step}
            placeholder="5 песен которые хочешь услышать"
            setStep={(value: string) => {
              setTimeout(() => setStep("drinks"), 200);
            }}
          />
        );
      case "guide":
        return <EventGuide />;
      default:
        return <StartButton setStep={() => setStep("name")} />;
    }
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        {generateStep(step)}
      </main>
    </div>
  );
}
