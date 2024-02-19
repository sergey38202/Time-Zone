import React, { FC } from "react";

import { IButtonProps } from "./types";
import * as SC from "./styles";

const Button: FC<IButtonProps> = (props) => {
  const { to, children, size, variant, onClick, ...rest } = props;

  if (to) {
    return (
      <SC.StyledLink size={size} variant={variant} to={to} {...rest}>
        {children}
      </SC.StyledLink>
    );
  }

  return (
    <SC.StyledButton size={size} variant={variant} onClick={onClick} {...rest}>
      {children}
    </SC.StyledButton>
  );
};

export default Button;
