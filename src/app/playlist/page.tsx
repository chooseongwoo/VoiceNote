import TTSInputField from "@/components/TTSInputField";
import * as _ from "./style";
import Play from "@/components/Play/page";

export default function Playlist() {
  return (
    <_.Layout>
      <_.Header>재생</_.Header>
      <_.Content>
        <_.TTSBox>
          <TTSInputField />
          <_.AddButton>재생 목록에 추가하기</_.AddButton>
        </_.TTSBox>
        <_.PlayListBox>
          <_.TextBox>
            <_.Label>재생 목록</_.Label>
            <_.DeleteAll>전체 삭제</_.DeleteAll>
          </_.TextBox>
          <_.PlayList>
            <Play />
          </_.PlayList>
        </_.PlayListBox>
      </_.Content>
    </_.Layout>
  );
}
