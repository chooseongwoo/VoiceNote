import Add from "@/assets/Add";
import * as _ from "./style";
import { news } from "@/types/news";

export default function NewsBox({ title, description }: news) {
  return (
    <_.Layout>
      <_.Left>
        <_.Title>{title}</_.Title>
        <_.Description>{description}</_.Description>
      </_.Left>
      <_.Button>
        <Add />
      </_.Button>
    </_.Layout>
  );
}
