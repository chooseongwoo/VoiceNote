import Logo from "@/assets/Logo";
import * as _ from "./style";
import TTSField from "@/components/TTSInputField";

export default function Main() {
  return (
    <_.Layout>
      <_.Header>
        <Logo width="40" height="40" />
        <_.Title>Voice Note</_.Title>
      </_.Header>
      <_.Content>
        <TTSField />
      </_.Content>
    </_.Layout>
  );
}
