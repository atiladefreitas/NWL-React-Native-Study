import React from "react";
import { Avatar } from "../Avatar";
import { Container, Greeting, User, UserName, Message, Wrapper } from "./style";

function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/atiladefreitas.png" />
      <Wrapper>
        <User>
          <Greeting> Olé</Greeting>
          <UserName>Átila</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Wrapper>
    </Container>
  );
}

export { Profile };
