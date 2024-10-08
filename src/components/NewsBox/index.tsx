import Add from "@/assets/Add";
import * as _ from "./style";

export default function NewsBox() {
  return (
    <_.Layout>
      <_.Left>
        <_.Title>제목입니다</_.Title>
        <_.Description>DescriptionDescriptionDescription</_.Description>
      </_.Left>
      <_.Button>
        <Add />
      </_.Button>
    </_.Layout>
  );
}
