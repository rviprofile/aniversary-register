import { LinkCapsule } from "../LinkCapsule/LinkCapsule";
import * as S from "./EventGuide.styled";
import Image from "next/image";

export const EventGuide = () => {
  return (
    <S.Container className="fade-in-bottom">
      <LinkCapsule url={"https://www.loft2rent.ru/loft/115047/141622/"}>
        Где?{" "}
        <p style={{ fontSize: "1em" }}>
          Loft<span style={{ color: "#FD8F02", fontSize: "1em" }}>2</span>
          Rent
        </p>
      </LinkCapsule>
      <LinkCapsule url={"https://ohmywishes.com/users/48r5frtsfp"}>
        Как добраться?
        <Image src={"/img/maps.png"} alt="maps logo" width={205} height={35} />
      </LinkCapsule>
      <LinkCapsule url={"https://ohmywishes.com/users/48r5frtsfp"}>
        Что подарить?
        <Image
          src={"/img/Ohmywishes.png"}
          alt="wishes logo"
          width={205}
          height={38}
        />
      </LinkCapsule>
    </S.Container>
  );
};
