import Logo from "@/assets/Logo";
import * as _ from "./style";
import TTSField from "@/components/TTSInputField";
import NewsBox from "@/components/NewsBox";

export default function Main() {
  return (
    <_.Layout>
      <_.Header>
        <Logo width="40" height="40" />
        <_.Title>Voice Note</_.Title>
      </_.Header>
      <_.Content>
        <TTSField />
        <_.NewsList>
          <_.Label>뉴스 기사</_.Label>
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </_.NewsList>
      </_.Content>
    </_.Layout>
  );
}
