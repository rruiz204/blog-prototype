import { JSX } from "react";
import { Link as RouterLink } from "react-router";

interface Props {
  text: string;
  route: string;
};

export const Link = ({ route, text }: Props): JSX.Element => {
  return (
    <RouterLink to={route}>
      <p className="font-inter-semi text-lg text-details-100 hover:text-details-200">{text}</p>
    </RouterLink>
  );
};