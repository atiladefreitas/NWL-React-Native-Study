import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./style";

import { theme } from "../../global/styles/theme";

type IProps = {
  children: React.ReactNode;
};

function Background(props: IProps) {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      <React.Fragment>{props.children}</React.Fragment>
    </LinearGradient>
  );
}

export { Background };
