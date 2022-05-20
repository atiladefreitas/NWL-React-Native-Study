import React from "react";
import { Profile } from "../../Components/Profile";
import { Container, Header } from "./style";

function Home() {
  return (
    <Container>
      <Header>
        <Profile />
      </Header>
    </Container>
  );
}

export { Home };
