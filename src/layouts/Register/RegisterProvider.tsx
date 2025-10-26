"use client";

import { Provider } from "react-redux";
import { store } from "./RegisterStore";

type Props = {
  children: React.ReactNode;
};

export const RegisterProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
