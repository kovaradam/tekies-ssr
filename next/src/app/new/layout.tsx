import { PropsWithChildren } from "react";

// export const metadata = {
//   title: "New post",
// };

export default function Layout(props: PropsWithChildren) {
  return <>{props.children}</>;
}
