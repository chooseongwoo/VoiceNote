import X from "@/assets/X";
import * as _ from "./style";

interface TextModalProps {
  onClose: () => void;
}

export default function TextModal({ onClose }: TextModalProps) {
  return (
    <_.Layout>
      <_.Title>제목입니다람쥐.</_.Title>
      <_.Desc>
        내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵내용입니다굴빵
      </_.Desc>
      <_.Button onClick={onClose}>
        <X />
      </_.Button>
    </_.Layout>
  );
}
