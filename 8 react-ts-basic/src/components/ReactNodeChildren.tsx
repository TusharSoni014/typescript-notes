import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function ReactNodeChildren({ children }: Props) {
  return <div className=" border-2 border-red-500 my-3">{children}</div>;
}
