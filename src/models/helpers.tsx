import { RefObject } from "react";

export const splitTextToP = (
  text: string[],
  className?: string
): JSX.Element[] =>
  text.map((val, ind) => (
    <p className={className} key={ind}>
      {val}
    </p>
  ));

export const getRefTop = (ref: RefObject<HTMLDivElement>): number => {
  const div = ref.current;
  return div ? div.getBoundingClientRect().top : 0;
};
