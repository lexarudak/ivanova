import { RefObject } from "react";

export const Placeholder = ({
  refObj,
}: {
  refObj: RefObject<HTMLDivElement>;
}): JSX.Element => {
  return (
    <h2 style={{ visibility: "hidden" }} ref={refObj}>
      PLACEHOLDER
    </h2>
  );
};
