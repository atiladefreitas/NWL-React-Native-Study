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
  StatusBar,
} from "./style";
import { ButtonIcon } from "../../Components/ButtonIcon";

function SignIn() {
  const [text, setText] = useState("Freitas");

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={IllustrationImg} resizeMode="stretch" />

      <Wrapper>
        <Title>
          Organize {`\n`} as suas jogatinas {`\n`} facilmente
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon />
      </Wrapper>
    </Container>
  );
}

export { SignIn };
