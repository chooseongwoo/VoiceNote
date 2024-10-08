import Logo from "@/assets/Logo";
import * as _ from "./style";

export default function Splash() {
  return (
    <_.Layout>
      <Logo width="130" height="130" />
      <_.Title>Voice Note</_.Title>
    </_.Layout>
  );
}
