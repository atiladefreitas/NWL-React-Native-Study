import React from "react";
import { TouchableOpacityProps } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { Container, IconWrapper, Icon, Title } from "./style";

type Props = {
  title: string;
};

function ButtonIcon({ title }: Props) {
  return (
    <Container>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>

      <Title> {title} </Title>
    </Container>
  );
}

export { ButtonIcon };

Container;
IconWrapper;
Icon;
Title;
