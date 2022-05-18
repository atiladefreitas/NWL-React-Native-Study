import React from "react";

import DiscordImg from "../../assets/discord.png";
import { Container, IconWrapper, Icon, Title } from "./style";

function ButtonIcon() {
  return (
    <Container>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <Title>Entrar com o Discord</Title>
    </Container>
  );
}

export { ButtonIcon };

Container;
IconWrapper;
Icon;
Title;
