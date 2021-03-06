import React, { useState } from "react";
/* import { Image } from "react-native"; */
import { theme } from "../../global/styles/theme";
import IllustrationImg from "../../assets/illustration.png";
import {
  Container,
  Text,
  TextInput,
  Image,
  Wrapper,
  Title,
  SubTitle,
} from "./style";
import { ButtonIcon } from "../../Components/ButtonIcon";

function SignIn() {
  const [text, setText] = useState("Freitas");

  return (
    <Container>
      <Image source={IllustrationImg} resizeMode="stretch" />

      <Wrapper>
        <Title>
          Conecte-se {"\n"} e organize suas {"\n"} jogatinas
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title="Entrar com o Discord" />
      </Wrapper>
    </Container>
  );
}

export { SignIn };
