import React from "react";
import { Typography } from "../Typography";

interface HeaderTitleProps {
  title: string;
}

export function HeaderTitle({ title }: HeaderTitleProps) {
  return <Typography fontSize={18}>{title}</Typography>;
}
